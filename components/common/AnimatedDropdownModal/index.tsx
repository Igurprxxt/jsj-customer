import React from 'react';
import Modal from 'react-native-modal'; // Import react-native-modal

const AnimatedDropdownModal = ({ open, togglePicker, style, children, ...props }: any) => {
  return (
    <Modal
      isVisible={open}
      onBackdropPress={togglePicker}
      onBackButtonPress={togglePicker}
      swipeDirection="down"
      onSwipeComplete={togglePicker}
      propagateSwipe
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      backdropColor="rgba(0, 0, 0, 0.5)" // Explicit backdrop color
      backdropOpacity={0.8} // Explicit opacity
      useNativeDriver
      useNativeDriverForBackdrop
      style={style}
      {...props}>
      {children}
    </Modal>
  );
};

export default AnimatedDropdownModal;
