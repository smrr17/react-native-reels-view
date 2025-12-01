import React from 'react';
declare const useCommentSection: ({ isVisible, onClose, videoHeight, screenHeight, videoWidth, }: {
    isVisible: boolean;
    onClose: () => void;
    videoHeight: any;
    screenHeight: number;
    videoWidth: any;
}) => {
    animatedStyle: {
        height: number;
        transform: {
            translateY: number;
        }[];
    };
    onGestureEvent: (event: any) => void;
    onHandlerStateChange: (event: any) => void;
    newComment: string;
    setNewComment: React.Dispatch<React.SetStateAction<string>>;
    handleSendComment: () => void;
    translateY: import("react-native-reanimated").SharedValue<number>;
};
export default useCommentSection;
