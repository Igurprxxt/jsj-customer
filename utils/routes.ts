export const routes = {
  expo_update: '/expo-update',
  offline: '/offline',
  auth: {
    login: '/(auth)/login',
    forgot_pwd: '/(auth)/forgot-password',
    verifyOtp: '/(auth)/verify-otp',
    update_password: '/(auth)/update-password',
    user_verification: '/(auth)/user-verification',
  },
  user: {
    profile: '/(hydrogen)/(profile)/page',
  },
  tabs: {
    tabs: '/(tabs)',
    home: '/(tabs)/home/page',
    loan: '/(tabs)/loan/page',
    forsale: '/(tabs)/forsale/page',
    messages: '/(tabs)/messages/page',
    action: '/(tabs)/actions/page',
    apply_loan: '/(tabs)/loan/(apply-loan)/page',
    loan_list: '/(tabs)/home/(loan-list)/page',
    singleLoan: (id: string) => `/(tabs)/home/(loan-details)/${id}`,
  },
};
