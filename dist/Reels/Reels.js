"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const react_native_1 = require("react-native");
const useReels_1 = __importDefault(require("./hooks/useReels"));
const react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const VideoItem_1 = __importDefault(require("./components/VideoItem"));
const Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
const react_native_responsive_screen_1 = require("react-native-responsive-screen");
const Reels = (_a) => {
    var { canGoBack, saveIcon, unsaveIcon, SaveComponent, whoReactedComponent, customCommentsComponent, onSendComment, renderInputComponent, currentUser, goBackIcon, topRightActionBar, whoCommentedComponent, reelsDetails, onLikeTextPress, likeIcon, unlikeIcon, LikeComponent, initialLoading, loadingComponent, ref: outerRef, data: videos, onEndReached, onEndReachedThreshold, viewabilityConfig, ListFooterComponent, muteIcon, unMuteIcon, 
    // renderItem,
    videosRef, commentIcon, reelsInteractionBar } = _a, rest = __rest(_a, ["canGoBack", "saveIcon", "unsaveIcon", "SaveComponent", "whoReactedComponent", "customCommentsComponent", "onSendComment", "renderInputComponent", "currentUser", "goBackIcon", "topRightActionBar", "whoCommentedComponent", "reelsDetails", "onLikeTextPress", "likeIcon", "unlikeIcon", "LikeComponent", "initialLoading", "loadingComponent", "ref", "data", "onEndReached", "onEndReachedThreshold", "viewabilityConfig", "ListFooterComponent", "muteIcon", "unMuteIcon", "videosRef", "commentIcon", "reelsInteractionBar"]);
    const { videoRefs, flatListRef, currentIndex, likedVideos, toggleLike, handleViewableItemsChanged, screenHeight, playVideoAtIndex, pauseVideoAtIndex, navigation, muted, toggleMute, childRef, setIsBottomSheetOpen, isBottomSheetOpen, setVideoItemHeight, videoItemHeight, } = (0, useReels_1.default)({ videos });
    const renderVideoItem = (0, react_1.useCallback)(({ item, index }) => {
        const idKey = String(item.id);
        const isLiked = Boolean(likedVideos[idKey]);
        // if (renderItem) {
        //   const rendered = renderItem(item, index);
        //   if (rendered === undefined) {
        //     return null;
        //   }
        //   if (React.isValidElement(rendered)) {
        //     return rendered as React.ReactElement;
        //   }
        //   // wrap non-element nodes into a fragment to satisfy FlatList's expected return type
        //   return <>{rendered}</>;
        // }
        return (<VideoItem_1.default SaveComponent={SaveComponent} saveIcon={saveIcon} unsaveIcon={unsaveIcon} customCommentsComponent={customCommentsComponent} renderInputComponent={renderInputComponent} onSendComment={onSendComment} currentUser={currentUser} topRightActionBar={topRightActionBar} whoCommentedComponent={whoCommentedComponent} whoReactedComponent={whoReactedComponent} onLikeTextPress={onLikeTextPress} commentIcon={commentIcon} likeIcon={likeIcon} unlikeIcon={unlikeIcon} LikeComponent={LikeComponent} reelsInteractionBar={reelsInteractionBar} reelsDetails={reelsDetails} muteIcon={muteIcon} unMuteIcon={unMuteIcon} childRef={childRef} item={item} index={index} muted={muted} toggleMute={toggleMute} currentIndex={currentIndex} isLiked={isLiked} videoRefs={videoRefs} videosRef={videosRef} toggleLike={toggleLike} playVideoAtIndex={playVideoAtIndex} pauseVideoAtIndex={pauseVideoAtIndex} screenHeight={videoItemHeight || screenHeight} isBottomSheetOpen={isBottomSheetOpen} onBottomSheetOpen={() => setIsBottomSheetOpen(true)} onBottomSheetClose={() => setIsBottomSheetOpen(false)}/>);
    }, [
        topRightActionBar,
        saveIcon,
        unsaveIcon,
        SaveComponent,
        customCommentsComponent,
        renderInputComponent,
        onSendComment,
        currentUser,
        whoCommentedComponent,
        whoReactedComponent,
        onLikeTextPress,
        commentIcon,
        likeIcon,
        unlikeIcon,
        // renderItem,
        LikeComponent,
        reelsInteractionBar,
        reelsDetails,
        muteIcon,
        unMuteIcon,
        videosRef,
        currentIndex,
        likedVideos,
        toggleLike,
        playVideoAtIndex,
        pauseVideoAtIndex,
        screenHeight,
        muted,
        childRef,
        videoRefs,
        toggleMute,
        setIsBottomSheetOpen,
        isBottomSheetOpen,
        videoItemHeight,
    ]);
    const keyExtractor = (0, react_1.useCallback)((item) => item.id.toString(), []);
    if (initialLoading) {
        return (<react_native_gesture_handler_1.GestureHandlerRootView style={styles.loadingContainer}>
        {loadingComponent ? (loadingComponent) : (<react_native_1.ActivityIndicator size="large" color="#fff"/>)}
      </react_native_gesture_handler_1.GestureHandlerRootView>);
    }
    return (<react_native_gesture_handler_1.GestureHandlerRootView onLayout={(event) => {
            !videoItemHeight && setVideoItemHeight(event.nativeEvent.layout.height);
        }} style={styles.container}>
      {canGoBack && (<react_native_1.Pressable style={styles.backIcon} onPress={() => {
                navigation === null || navigation === void 0 ? void 0 : navigation.goBack();
                // Handle back navigation
            }}>
          {goBackIcon ? (goBackIcon) : (<Ionicons_1.default name="arrow-back-circle" size={(0, react_native_responsive_fontsize_1.RFValue)(24)} color="white"/>)}
        </react_native_1.Pressable>)}
      <react_native_gesture_handler_1.FlatList scrollEnabled={!isBottomSheetOpen} ref={listRef => {
            flatListRef.current = listRef;
            if (outerRef) {
                if (typeof outerRef === 'function') {
                    outerRef(listRef);
                }
                else {
                    outerRef.current = listRef;
                }
            }
        }} data={videos !== null && videos !== void 0 ? videos : []} initialNumToRender={3} maxToRenderPerBatch={7} windowSize={10} keyExtractor={keyExtractor} horizontal={false} pagingEnabled refreshControl={
        // @ts-ignore
        <react_native_1.RefreshControl colors={['#fff']} refreshing={rest.refreshing} onRefresh={rest.onRefresh}/>} showsVerticalScrollIndicator={false} onEndReached={onEndReached} onEndReachedThreshold={onEndReachedThreshold !== null && onEndReachedThreshold !== void 0 ? onEndReachedThreshold : 0.5} onViewableItemsChanged={handleViewableItemsChanged} viewabilityConfig={viewabilityConfig !== null && viewabilityConfig !== void 0 ? viewabilityConfig : {
            itemVisiblePercentThreshold: 50,
        }} snapToInterval={videoItemHeight || screenHeight} decelerationRate="fast" removeClippedSubviews={true} ListFooterComponent={() => {
            if (ListFooterComponent) {
                return ListFooterComponent;
            }
        }} renderItem={renderVideoItem} {...rest}/>
    </react_native_gesture_handler_1.GestureHandlerRootView>);
};
exports.default = Reels;
const styles = react_native_1.StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: (0, react_native_responsive_screen_1.heightPercentageToDP)(7),
        left: (0, react_native_responsive_screen_1.widthPercentageToDP)(5),
        zIndex: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    retryText: {
        color: 'blue',
        fontSize: 16,
    },
    videoContainer: {
        width: (0, react_native_responsive_screen_1.widthPercentageToDP)(100),
    },
    videoWrapper: {
        flex: 1,
        position: 'relative',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'flex-end',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: (0, react_native_responsive_fontsize_1.RFValue)(10),
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },
    userText: {
        color: 'white',
    },
    audioLabel: {
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    audioText: {
        color: 'white',
        fontSize: 14,
    },
    likeButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    likeCount: {
        color: 'white',
        fontSize: 14,
        marginTop: 4,
    },
    footerLoading: {
        paddingVertical: 20,
    },
});
