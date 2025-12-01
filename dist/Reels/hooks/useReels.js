"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const API_KEY = '51028846-bc7883b46347d8d05c0535553';
const PAGE_SIZE = 10;
const { height } = react_native_1.Dimensions.get('window');
const native_1 = require("@react-navigation/native");
const useReels = ({ videos }) => {
    const [page, setPage] = (0, react_1.useState)(1);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    const [hasMore, setHasMore] = (0, react_1.useState)(true);
    const videoRefs = (0, react_1.useRef)({});
    const flatListRef = (0, react_1.useRef)(null);
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const [likedVideos, setLikedVideos] = (0, react_1.useState)({});
    const insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    const [isBottomSheetOpen, setIsBottomSheetOpen] = (0, react_1.useState)(false);
    const focused = (0, native_1.useIsFocused)();
    const [videoItemHeight, setVideoItemHeight] = (0, react_1.useState)(null);
    const childRef = (0, react_1.useRef)(null);
    const currentItemRef = (0, react_1.useRef)(videos[0]);
    const navigation = (0, native_1.useNavigation)();
    const [muted, setMuted] = (0, react_1.useState)(!focused ? true : false);
    const bottomSheetRef = (0, react_1.useRef)(null);
    const screenHeight = (0, react_1.useMemo)(() => {
        return height;
        if (react_native_1.Platform.OS === 'android') {
            return height - (height * 12) / 100;
        }
        return height - (height * 11.5) / 100;
    }, []);
    const togglePlayNPause = (index, isLongPress) => {
        var _a;
        const videoRef = videoRefs.current[(_a = videos[index]) === null || _a === void 0 ? void 0 : _a.id];
        console.log('Toggling play/pause for video ID:', videoRef);
        if (videoRef) {
            if (isLongPress) {
                videoRef.setStatusAsync({ isLooping: true });
                return;
            }
            videoRef.getStatusAsync().then((status) => {
                if (status.isPlaying) {
                    videoRef.pause();
                }
                else {
                    videoRef.resume();
                }
            });
        }
    };
    console.log('videoRefs.current[videos[index]?.id]', videoRefs.current);
    const playVideoAtIndex = (0, react_1.useCallback)((index) => {
        var _a;
        const videoRef = videoRefs.current[(_a = videos[index]) === null || _a === void 0 ? void 0 : _a.id];
        console.log('Playing video ID:', videoRef);
        if (videoRef) {
            videoRef.resume();
        }
    }, [videos]);
    const pauseVideoAtIndex = (0, react_1.useCallback)((index) => {
        var _a;
        const videoRef = videoRefs.current[(_a = videos[index]) === null || _a === void 0 ? void 0 : _a.id];
        if (videoRef) {
            videoRef.pause();
        }
    }, [videos]);
    const handleViewableItemsChanged = (0, react_1.useRef)(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const currentItem = viewableItems[0];
            currentItemRef.current = currentItem.item;
            if (currentItem) {
                setCurrentIndex(currentItem.index);
                Object.keys(videoRefs.current).forEach(key => {
                    if (videoRefs.current[key] &&
                        key === currentItem.item.id.toString()) {
                        videoRefs.current[key].resume();
                    }
                    else if (videoRefs.current[key]) {
                        videoRefs.current[key].pause();
                    }
                });
            }
        }
    }).current;
    const toggleLike = (videoId) => {
        setLikedVideos((prev) => (Object.assign(Object.assign({}, prev), { [videoId]: !prev[videoId] })));
    };
    const handleDoubleTap = (videoId) => {
        toggleLike(videoId);
    };
    const toggleMute = () => {
        setMuted(prev => !prev);
    };
    return {
        videos,
        loading,
        error,
        flatListRef,
        currentIndex,
        likedVideos,
        videoRefs,
        screenHeight,
        insets,
        handleViewableItemsChanged,
        toggleLike,
        handleDoubleTap,
        togglePlayNPause,
        playVideoAtIndex,
        pauseVideoAtIndex,
        bottomSheetRef,
        toggleMute,
        muted,
        currentItemRef,
        childRef,
        isBottomSheetOpen,
        setIsBottomSheetOpen,
        setVideoItemHeight,
        videoItemHeight,
        focused,
        navigation,
    };
};
exports.default = useReels;
