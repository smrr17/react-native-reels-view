"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const native_1 = require("@react-navigation/native");
const react_native_reanimated_1 = require("react-native-reanimated");
const { width } = react_native_1.Dimensions.get('window');
const useVideoItem = ({ index, currentIndex, pauseVideoAtIndex, playVideoAtIndex, toggleMute, screenHeight, onBottomSheetOpen, onBottomSheetClose, item, }) => {
    var _a;
    const [isMutedIconVisible, setIsMutedIconVisible] = (0, react_1.useState)(false);
    const [isBookmarkIconVisible, setIsBookmarkIconVisible] = (0, react_1.useState)((_a = item === null || item === void 0 ? void 0 : item.is_saved) !== null && _a !== void 0 ? _a : false);
    const [isCommentVisible, setIsCommentVisible] = (0, react_1.useState)({
        visible: false,
        name: '',
    });
    const focused = (0, native_1.useIsFocused)();
    const videoWidth = (0, react_native_reanimated_1.useSharedValue)(width);
    const [orientation, setOrientation] = (0, react_1.useState)('portrait');
    const videoHeight = (0, react_native_reanimated_1.useSharedValue)(screenHeight);
    (0, react_1.useEffect)(() => {
        if (isCommentVisible.visible) {
            onBottomSheetOpen();
            videoHeight.value = (0, react_native_reanimated_1.withTiming)(screenHeight * 0.5, { duration: 300 });
            videoWidth.value = (0, react_native_reanimated_1.withTiming)(width * 0.7, { duration: 300 });
        }
        else {
            onBottomSheetClose();
            videoHeight.value = (0, react_native_reanimated_1.withTiming)(screenHeight, { duration: 300 });
            videoWidth.value = (0, react_native_reanimated_1.withTiming)(width, { duration: 300 });
        }
    }, [isCommentVisible.visible]);
    console.log('VideoItem useVideoItem -> index:', isCommentVisible);
    const animatedVideoStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => ({
        height: videoHeight.value,
        width: videoWidth.value,
        top: 0,
        alignSelf: 'center',
    }));
    (0, react_1.useEffect)(() => {
        if (!focused) {
            pauseVideoAtIndex(index);
        }
        else if (index === currentIndex) {
            playVideoAtIndex(index);
        }
    }, [focused, currentIndex]);
    const toggleMuteLocal = (0, react_1.useCallback)(() => {
        setIsMutedIconVisible(true);
        const timer = setTimeout(() => {
            setIsMutedIconVisible(false);
        }, 1000);
        toggleMute();
        return () => clearTimeout(timer);
    }, [toggleMute]);
    const handleCommentPress = (0, react_1.useCallback)((name = 'comment') => {
        setIsCommentVisible({ visible: true, name: name });
    }, []);
    const handleCloseComments = (0, react_1.useCallback)((name = 'comment') => {
        setIsCommentVisible({ visible: false, name: name });
    }, []);
    return {
        isMutedIconVisible,
        setIsMutedIconVisible,
        isBookmarkIconVisible,
        setIsBookmarkIconVisible,
        isCommentVisible,
        setIsCommentVisible,
        focused,
        orientation,
        setOrientation,
        animatedVideoStyle,
        toggleMuteLocal,
        handleCommentPress,
        handleCloseComments,
        videoHeight,
        videoWidth,
    };
};
exports.default = useVideoItem;
