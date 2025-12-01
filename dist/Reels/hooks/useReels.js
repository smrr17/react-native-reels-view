"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const API_KEY = '51028846-bc7883b46347d8d05c0535553';
const PAGE_SIZE = 10;
const { height } = react_native_1.Dimensions.get('window');
const axios_1 = __importDefault(require("axios"));
const native_1 = require("@react-navigation/native");
const useReels = () => {
    const [videos, setVideos] = (0, react_1.useState)([]);
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
    const fetchVideos = (pageNum) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            const response = yield axios_1.default.get(`https://pixabay.com/api/videos/?key=${API_KEY}&q=nature&per_page=${PAGE_SIZE}&page=${pageNum}`);
            if (response.data.hits.length === 0) {
                setHasMore(false);
                return;
            }
            if (pageNum === 1) {
                setVideos(response.data.hits);
            }
            else {
                setVideos(prev => [...prev, ...response.data.hits]);
            }
            setError(null);
        }
        catch (err) {
            setError('Failed to fetch videos. Please try again.');
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    });
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
    const playVideoAtIndex = (0, react_1.useCallback)((index) => {
        var _a;
        const videoRef = videoRefs.current[(_a = videos[index]) === null || _a === void 0 ? void 0 : _a.id];
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
    (0, react_1.useEffect)(() => {
        fetchVideos(1);
    }, []);
    const handleLoadMore = () => {
        if (!loading && hasMore) {
            setPage(prev => prev + 1);
            fetchVideos(page + 1);
        }
    };
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
        fetchVideos,
        handleLoadMore,
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
