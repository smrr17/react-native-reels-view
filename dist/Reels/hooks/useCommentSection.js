"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const react_native_reanimated_1 = require("react-native-reanimated");
const react_native_responsive_screen_1 = require("react-native-responsive-screen");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const { width, height } = react_native_1.Dimensions.get('window');
const useCommentSection = ({ isVisible, onClose, videoHeight, screenHeight, videoWidth, }) => {
    const [newComment, setNewComment] = (0, react_1.useState)('');
    const sheetHeight = (0, react_native_reanimated_1.useSharedValue)((0, react_native_responsive_screen_1.heightPercentageToDP)(50));
    const translateY = (0, react_native_reanimated_1.useSharedValue)((0, react_native_responsive_screen_1.heightPercentageToDP)(100));
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            height: sheetHeight.value,
            transform: [{ translateY: translateY.value }],
        };
    });
    (0, react_1.useEffect)(() => {
        const keyboardShowEvent = react_native_1.Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
        const keyboardHideEvent = react_native_1.Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
        const showSub = react_native_1.Keyboard.addListener(keyboardShowEvent, event => {
            const height = event.endCoordinates.height;
            const duration = react_native_1.Platform.OS === 'ios' ? 150 : 100;
            sheetHeight.value = (0, react_native_reanimated_1.withTiming)((0, react_native_responsive_screen_1.heightPercentageToDP)(50), { duration });
            translateY.value = (0, react_native_reanimated_1.withTiming)(-height * 0.97, { duration });
        });
        const hideSub = react_native_1.Keyboard.addListener(keyboardHideEvent, () => {
            const duration = react_native_1.Platform.OS === 'ios' ? 150 : 100;
            sheetHeight.value = (0, react_native_reanimated_1.withTiming)((0, react_native_responsive_screen_1.heightPercentageToDP)(50), { duration });
            translateY.value = (0, react_native_reanimated_1.withTiming)(0, { duration });
        });
        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (isVisible) {
            sheetHeight.value = (0, react_native_reanimated_1.withTiming)((0, react_native_responsive_screen_1.heightPercentageToDP)(50), { duration: 300 });
            translateY.value = (0, react_native_reanimated_1.withTiming)(0, { duration: 300 });
        }
        else {
            translateY.value = (0, react_native_reanimated_1.withTiming)((0, react_native_responsive_screen_1.heightPercentageToDP)(100), { duration: 300 });
        }
    }, [isVisible]);
    const handleSendComment = () => {
        if (newComment.trim()) {
            setNewComment('');
        }
    };
    const onGestureEvent = (0, react_1.useCallback)((event) => {
        'worklet';
        const { translationY } = event.nativeEvent;
        if (translationY > 0) {
            // Dragging DOWN → animate video expanding
            const progress = Math.min(translationY / (screenHeight * 0.5), 1);
            videoHeight.value = (0, react_native_reanimated_1.withTiming)(screenHeight * (0.5 + 0.5 * progress), {
                duration: 200,
            });
            videoWidth.value = (0, react_native_reanimated_1.withTiming)(width * (0.7 + 0.3 * progress), {
                duration: 200,
            });
            translateY.value = translationY; // move comment sheet with gesture
        }
    }, []);
    // const onGestureEvent = useCallback((event: any) => {
    //   "worklet";
    //   const { translationY } = event.nativeEvent;
    //   // Dragging DOWN → move sheet
    //   if (translationY > 0) {
    //     translateY.value = translationY;
    //     return;
    //   }
    //   // Dragging UP → expand HEIGHT instead of moving it
    //   const newHeight = hp(50) - translationY;
    //   if (newHeight <= hp(85)) {
    //     sheetHeight.value = newHeight;
    //   } else {
    //     sheetHeight.value = hp(85);
    //   }
    // }, []);
    // ----------------------
    // DRAG END
    // ----------------------
    const onHandlerStateChange = (0, react_1.useCallback)((event) => {
        'worklet';
        react_native_1.Keyboard.dismiss();
        const { translationY, velocityY, state } = event.nativeEvent;
        if (state === react_native_gesture_handler_1.State.END) {
            const draggedUp = translationY < -(0, react_native_responsive_screen_1.heightPercentageToDP)(10);
            const draggedDown = translationY > (0, react_native_responsive_screen_1.heightPercentageToDP)(15);
            if (draggedUp) {
                // Snap to expanded height
                sheetHeight.value = (0, react_native_reanimated_1.withTiming)((0, react_native_responsive_screen_1.heightPercentageToDP)(85), { duration: 300 });
                translateY.value = (0, react_native_reanimated_1.withTiming)(0, { duration: 300 });
            }
            else if (draggedDown) {
                // Close
                translateY.value = (0, react_native_reanimated_1.withTiming)((0, react_native_responsive_screen_1.heightPercentageToDP)(100), { duration: 300 });
                (0, react_native_reanimated_1.runOnJS)(onClose)();
            }
            else {
                // Snap back to collapsed (50%)
                sheetHeight.value = (0, react_native_reanimated_1.withTiming)((0, react_native_responsive_screen_1.heightPercentageToDP)(50), { duration: 300 });
                translateY.value = (0, react_native_reanimated_1.withTiming)(0, { duration: 300 });
            }
        }
    }, [onClose]);
    return {
        animatedStyle,
        onGestureEvent,
        onHandlerStateChange,
        newComment,
        setNewComment,
        handleSendComment,
        translateY,
    };
};
exports.default = useCommentSection;
