/* eslint-disable import/order */
/* eslint-disable import/first */
interface SignUpInterface {
  body: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    userHandle: string;
  };
}
interface VerifyInterface {
  pathParams: {
    token: string;
  };
}
import { Href, useRouter } from 'expo-router';
import { io } from 'socket.io-client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { socketHostname } from '~/utils/callApis/apiUtils';
import { routes } from '~/utils/routes';
import {
  forgotPasswordService,
  login,
  register,
  setupPassword,
  resetPassword,
  verifyOtp,
  verifyToken,
} from '~/utils/services/auth';
import { unSeenCountService } from '~/utils/services/dashboard';
import { getCurrentUser, resetPasswordService, updateProfileService } from '~/utils/services/user';
import {
  getStorageItemAsync,
  removeStorageItemAsync,
  setStorageItemAsync,
} from '~/hooks/useStorageState';
import { createAccountService, updateAccountService } from '~/utils/services/account';
import { existTradeService } from '~/utils/services/trade';
import { useTheme } from './ThemeContext';

const storageTokenKeyName = 'accessToken';

// ** Defaults
const defaultProvider = {
  user: null as any,
  loading: false, //TODO:update it to true
  forgotLoading: false,
  signInLoading: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  verify: () => Promise.resolve(),
  createPassword: () => Promise.resolve(),
  forgotPassword: () => Promise.resolve(),
  resetPass: () => Promise.resolve(),
  setForgotLoading: () => Boolean,
  setSelectedSideBar: () => null,
  selectedSideBar: 'dashboard',
  setSignInLoading: () => Boolean,
  getSelectedSideBar: () => null,
  setActiveAccount: () => null,
  activeAccount: {},
  verifyUser: () => Promise.resolve(),
  subscriptionActive: false,
  getActiveAccount: () => {},
  updateProfile: () => {},
  userResetPassword: () => {},
  btnLoading: false,
  setSocketIo: () => null,
  socketIo: {},
  brokerData: [],
  setBrokerData: () => {},
};
const AuthContext = createContext(defaultProvider as any);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: any) => {
  const [brokerData, setBrokerData] = useState([]);
  const [unSeenCount, setUnseenCount] = useState(0);
  const [csvSocketData, setCsvSocketData] = useState({});
  const [activeAccount, setActiveAccount] = useState({} as any);
  const [socketIo, setSocketIo] = useState({} as any);
  const [user, setUser] = useState(defaultProvider.user);
  const [subscriptionActive, setSubscriptionActive] = useState<boolean>(
    defaultProvider.subscriptionActive
  );
  const { showToast } = useTheme();

  const [selectedSideBar, setSelectedSideBar] = useState('dashboard');
  const [loading, setLoading] = useState(defaultProvider.loading);
  const [forgotLoading, setForgotLoading] = useState(defaultProvider.forgotLoading);
  const [verifyOtpLoading, setVerifyOtpLoading] = useState(false);
  const [signInLoading, setSignInLoading] = useState(defaultProvider.signInLoading);
  const [btnLoading, setBtnLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  // ** Hooks
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const getUser = async (cb?: any) => {
    setLoading(true);
    getCurrentUser()
      .then(async (response: any) => {
        cb && cb();
        // since animation of logo is 2 seconds, we are setting loading to false after 2 seconds
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(async (err) => {
        // since animation of logo is 2 seconds, we are setting loading to false after 2 seconds
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };

  useEffect(() => {
    getUser(() => {});
  }, []);

  const handleLogin = async (params: any, cb: any, errorCallback: any) => {
    setSignInLoading(true);
    login(params)
      .then(async (response: any) => {
        await setStorageItemAsync(storageTokenKeyName, response?.accessToken);
        cb && cb();
        getUser(() => {
          router.replace({
            pathname: routes.auth.user_verification,
            params: { data: JSON.stringify(response) },
          });
          setSignInLoading(false);
        });
      })
      .catch((err: any) => {
        setSignInLoading(false);

        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = async () => {
    setUser(null);
    await Promise.all([
      removeStorageItemAsync(storageTokenKeyName),
      removeStorageItemAsync('activeAccount'),
    ] as any);
    router.push(routes.auth.login as any);
  };
  const handleSignUp = ({ body }: SignUpInterface, successCb: any, errorCallback: any) => {
    setSignInLoading(true);
    register({ body })
      .then(async () => {
        router.push(routes.auth.login as any);
        showToast('Email has been sent to your email address', 'success');

        successCb && successCb();
      })
      .catch((err: any) => {
        showToast(err?.message, 'error');

        if (errorCallback) errorCallback(err);
      })
      .finally(() => {
        setSignInLoading(false);
      });
  };
  const verify = ({ pathParams }: VerifyInterface, cb: any, errorCallback: any) => {
    setVerifyOtpLoading(true);
    verifyOtp({ pathParams })
      .then(async (response: any) => {
        setVerifyOtpLoading(false);
        cb && cb(response, 'success');
      })
      .catch((err: any) => {
        setVerifyOtpLoading(false);

        if (errorCallback) errorCallback(err);
      });
  };
  const verifyUser = ({ pathParams }: VerifyInterface, cb: any, errorCallback: any) => {
    setForgotLoading(true);
    verifyToken({ pathParams })
      .then(async (response: any) => {
        setForgotLoading(false);
        cb && cb(response, 'success');
      })
      .catch((err: any) => {
        setForgotLoading(false);
        // toast.error(err?.message);

        if (errorCallback) errorCallback(err, 'error');
      });
  };
  const forgotPassword = ({ body }: any, cb: any, errorCallback: any) => {
    setForgotLoading(true);
    forgotPasswordService({ body })
      .then(async () => {
        setForgotLoading(false);
        cb && cb();
      })
      .catch((err: any) => {
        setForgotLoading(false);
        if (errorCallback) errorCallback(err);
      });
  };
  // reset password when user is logged out
  const resetPass = ({ pathParams }: any, cb: any, errorCallback: any) => {
    setForgotLoading(true);
    resetPassword({ pathParams })
      .then(async () => {
        setForgotLoading(false);
        cb && cb();
      })
      .catch((err: any) => {
        setForgotLoading(false);
        if (errorCallback) errorCallback(err);
      });
  };

  const createPassword = ({ body }: any, cb: any, errorCallback: any) => {
    setupPassword({ body })
      .then(async (response: any) => {
        cb && cb(response);
      })
      .catch((err: any) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const updateProfile = async ({ body }: any, cb: any, errCb: any) => {
    setBtnLoading(true);
    updateProfileService({
      body,
    })
      .then((res: any) => {
        setUser({
          ...user,
          firstName: res?.data?.firstName,
          lastName: res?.data?.lastName,
          email: res?.data?.email,
          userHandle: res?.data?.userHandle,
          profileImage: res?.data?.profileImage,
          timeZone: res?.data?.timeZone,
        });
        // toast.success('Updated successfully');
        cb && cb();
        setBtnLoading(false);
      })
      .catch((err: any) => {
        // toast.error(err?.message);
        errCb && errCb(err);
        setBtnLoading(false);
      })
      .finally(() => {});
  };
  // reset password when user is logged in
  const userResetPassword = async ({ pathParams }: any, cb: any, errCb: any) => {
    setBtnLoading(true);
    resetPasswordService({
      pathParams,
    })
      .then(() => {
        // toast.success('Password updated successfully');
        cb && cb();
      })
      .catch((err: any) => {
        // toast.error(err?.message);
        errCb && errCb(err);
      })
      .finally(() => {
        setBtnLoading(false);
      });
  };
  useEffect(() => {
    if (user?.uuid) {
      const socket: any = io(socketHostname(), {
        transports: ['websocket', 'polling'],
        secure: true,
        forceNew: true,
      });

      socket?.on('connect', () => {
        setSocketIo(socket);
      });

      socket?.emit('join_room', user?.uuid);

      return () => {
        socket.disconnect();
      };
    }
  }, [user]);
  const getUnSeenCount = async () => {
    const res: any = await unSeenCountService();
    setUnseenCount(res?.data);
  };
  useEffect(() => {
    getUnSeenCount();
  }, []);

  const values = {
    user,
    loading,
    getUser,
    forgotLoading,
    signInLoading,
    verifyOtpLoading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    signUp: handleSignUp,
    verify,
    createPassword,
    forgotPassword,
    resetPass,
    setForgotLoading,
    setVerifyOtpLoading,
    setSignInLoading,
    setSelectedSideBar,
    selectedSideBar,
    activeAccount,
    setActiveAccount,
    verifyUser,
    subscriptionActive,
    updateProfile,
    userResetPassword,
    btnLoading,
    setSocketIo,
    socketIo,
    setCsvSocketData,
    csvSocketData,
    brokerData,
    setBrokerData,
    setUnseenCount,
    unSeenCount,
    getUnSeenCount,
    //subscription
    isOpen,
    setIsOpen,

    searching,
  };

  return <AuthContext.Provider value={values as any}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
