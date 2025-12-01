declare const useVideoItem: ({ index, currentIndex, pauseVideoAtIndex, playVideoAtIndex, toggleMute, screenHeight, onBottomSheetOpen, onBottomSheetClose, item, }: {
    index: number;
    currentIndex: number;
    pauseVideoAtIndex: (index: number) => void;
    playVideoAtIndex: (index: number) => void;
    toggleMute: () => void;
    screenHeight: number;
    onBottomSheetOpen: () => void;
    onBottomSheetClose: () => void;
    item: any;
}) => {
    isMutedIconVisible: boolean;
    setIsMutedIconVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    isBookmarkIconVisible: any;
    setIsBookmarkIconVisible: import("react").Dispatch<any>;
    isCommentVisible: {
        visible: boolean;
        name: string;
    };
    setIsCommentVisible: import("react").Dispatch<import("react").SetStateAction<{
        visible: boolean;
        name: string;
    }>>;
    focused: boolean;
    orientation: "portrait" | "landscape";
    setOrientation: import("react").Dispatch<import("react").SetStateAction<"portrait" | "landscape">>;
    animatedVideoStyle: {
        height: number;
        width: number;
        top: number;
        alignSelf: "center";
    };
    toggleMuteLocal: () => () => void;
    handleCommentPress: (name?: string) => void;
    handleCloseComments: (name?: string) => void;
    videoHeight: import("react-native-reanimated").SharedValue<number>;
    videoWidth: import("react-native-reanimated").SharedValue<number>;
};
export default useVideoItem;
