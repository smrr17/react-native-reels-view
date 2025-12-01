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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_video_1 = require("react-native-video");
const react_native_reanimated_1 = __importDefault(require("react-native-reanimated"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_responsive_screen_1 = require("react-native-responsive-screen");
const react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
const Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
const MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
const FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
const HeartComponent_1 = __importDefault(require("./HeartComponent"));
const CommentSection_1 = __importDefault(require("./CommentSection"));
const useVideoItem_1 = __importDefault(require("../hooks/useVideoItem"));
const VideoItem = (0, react_1.memo)(({ item, onSendComment, currentUser, index, currentIndex, isLiked, videoRefs, reelsDetails, toggleLike, playVideoAtIndex, pauseVideoAtIndex, screenHeight, muted, toggleMute, whoCommentedComponent, onBottomSheetOpen, onBottomSheetClose, whoReactedComponent, childRef, muteIcon, renderInputComponent, saveIcon, unsaveIcon, SaveComponent, customCommentsComponent, unMuteIcon, videosRef, reelsInteractionBar, LikeComponent, likeIcon, unlikeIcon, commentIcon, onLikeTextPress, topRightActionBar, }) => {
    var _a, _b, _c, _d;
    const { isMutedIconVisible, isBookmarkIconVisible, setIsBookmarkIconVisible, isCommentVisible, orientation, setOrientation, videoWidth, animatedVideoStyle, videoHeight, toggleMuteLocal, handleCommentPress, handleCloseComments, } = (0, useVideoItem_1.default)({
        index,
        item,
        currentIndex,
        pauseVideoAtIndex,
        playVideoAtIndex,
        toggleMute,
        screenHeight,
        onBottomSheetOpen,
        onBottomSheetClose,
    });
    const comments = [
        {
            id: "1",
            username: "john_doe",
            userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
            text: "This is absolutely amazing! Love the energy 🔥",
            time: "2h ago",
            likes: 24,
        },
        {
            id: "2",
            username: "sarah_smith",
            userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
            text: "No pain no gain! This motivates me so much 💪",
            time: "1h ago",
            likes: 18,
        },
        {
            id: "3",
            username: "john_doe",
            userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
            text: "This is absolutely amazing! Love the energy 🔥",
            time: "2h ago",
            likes: 24,
        },
        {
            id: "4",
            username: "sarah_smith",
            userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
            text: "No pain no gain! This motivates me so much 💪",
            time: "1h ago",
            likes: 18,
        },
        {
            id: "5",
            username: "john_doe",
            userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
            text: "This is absolutely amazing! Love the energy 🔥",
            time: "2h ago",
            likes: 24,
        },
        {
            id: "6",
            username: "sarah_smith",
            userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
            text: "No pain no gain! This motivates me so much 💪",
            time: "1h ago",
            likes: 18,
        },
        {
            id: "7",
            username: "john_doe",
            userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
            text: "This is absolutely amazing! Love the energy 🔥",
            time: "2h ago",
            likes: 24,
        },
        {
            id: "8",
            username: "sarah_smith",
            userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
            text: "No pain no gain! This motivates me so much 💪",
            time: "1h ago",
            likes: 18,
        },
    ];
    const [isLike, setIsLike] = (0, react_1.useState)(false);
    (0, react_1.useImperativeHandle)(childRef, () => ({
    // You can expose methods if needed
    }));
    return (<react_native_gesture_handler_1.GestureHandlerRootView style={{ flex: 1 }}>
        <react_native_1.View style={[
            styles.videoContainer,
            {
                height: screenHeight,
                backgroundColor: "#000",
            },
        ]}>
          <react_native_1.TouchableOpacity activeOpacity={1} onPress={toggleMuteLocal} delayLongPress={200} onPressOut={() => {
            playVideoAtIndex(index);
        }} onLongPress={() => {
            pauseVideoAtIndex(index);
        }} style={styles.videoWrapper}>
            {topRightActionBar && (<react_native_1.View style={{ position: "absolute", top: 50, right: 20, zIndex: 2 }}>
                {topRightActionBar({ item, index })}
              </react_native_1.View>)}

            {isMutedIconVisible && (<react_native_1.View style={styles.muteIcon}>
                {muteIcon || unMuteIcon ? (muted ? (muteIcon ? (muteIcon) : (<Ionicons_1.default name="volume-mute" size={(0, react_native_responsive_fontsize_1.RFValue)(24)} color={"white"}/>)) : unMuteIcon ? (unMuteIcon) : (<Ionicons_1.default name="volume-high" size={(0, react_native_responsive_fontsize_1.RFValue)(24)} color={"white"}/>)) : (<Ionicons_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(24)} color={"white"} name={muted ? "volume-mute" : "volume-high"}/>)}
              </react_native_1.View>)}

            <react_native_reanimated_1.default.View style={[styles.videoAnimationWrapper, animatedVideoStyle]}>
              <react_native_video_1.Video ref={(ref) => {
            videoRefs.current[item.id] = ref;
            if (typeof videosRef === "function") {
                videosRef(videoRefs.current);
            }
            else if (videosRef && typeof videosRef === "object") {
                videosRef.current = videoRefs.current;
            }
        }} source={{
            // uri: item?.videos?.tiny?.url,
            uri: "https://jnzjjlasclxzhjibqchp.supabase.co/storage/v1/object/public/videos/instasave.website_AQOZIH0Fi_l2Tp0X8ErhP-bB0TAJXf7212AczIbQwlm5kJaa2nHbxWOMOMHT5g4-J5P98eEJVfcJz3uQwCK-h3KXvizYNYLeBRk37nA.mp4",
        }} rate={1.0} volume={muted ? 0 : 1.0} muted={muted} resizeMode={orientation === "portrait"
            ? react_native_video_1.ResizeMode.COVER
            : react_native_video_1.ResizeMode.CONTAIN} playWhenInactive={false} playInBackground={false} onLoad={(data) => {
            const { width, height } = data.naturalSize;
            const isPortrait = height > width;
            const isLandscape = width > height;
            console.log("isPortrait:", isPortrait);
            console.log("isLandscape:", isLandscape);
            if (isPortrait) {
                setOrientation("portrait");
            }
            else if (isLandscape) {
                setOrientation("landscape");
            }
        }} style={[
            styles.video,
            {
                borderRadius: isCommentVisible ? (0, react_native_responsive_fontsize_1.RFValue)(12) : 0,
            },
        ]} controls={false} repeat={true} paused={index !== currentIndex} poster={(_b = (_a = item === null || item === void 0 ? void 0 : item.media) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.thumbnail_url} posterResizeMode="cover"/>
            </react_native_reanimated_1.default.View>

            <react_native_1.View style={styles.overlay}>
              {reelsDetails ? (reelsDetails(item, index)) : (<>
                  <react_native_1.View style={{ gap: (0, react_native_responsive_fontsize_1.RFValue)(10) }}>
                    <react_native_1.View style={styles.userInfo}>
                      <react_native_1.Image source={{
                uri: (item === null || item === void 0 ? void 0 : item.profile_image_url)
                    ? `${item.profile_image_url}`
                    : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
            }} style={styles.profileImage}/>
                      <react_native_1.Text style={styles.userText}>{`${(_c = item.user) === null || _c === void 0 ? void 0 : _c.name}`}</react_native_1.Text>
                    </react_native_1.View>

                    {(item === null || item === void 0 ? void 0 : item.content) && (<react_native_1.View style={styles.audioLabel}>
                        <react_native_1.Text numberOfLines={5} style={styles.audioText}>
                          {item === null || item === void 0 ? void 0 : item.content}
                        </react_native_1.Text>
                      </react_native_1.View>)}
                  </react_native_1.View>
                </>)}
              {reelsInteractionBar ? (<react_native_1.View style={{
                backgroundColor: "red",
                width: (0, react_native_responsive_screen_1.widthPercentageToDP)(15),
                alignItems: "center",
            }}>
                  {reelsInteractionBar({
                item,
                index,
                isLiked,
                setIsLike,
                isBookmarkIconVisible,
                setIsBookmarkIconVisible,
                handleCommentPress: () => handleCommentPress("comments"),
                handleCloseComments: () => handleCloseComments("comments"),
            })}
                </react_native_1.View>) : (<react_native_1.View style={{
                gap: (0, react_native_responsive_fontsize_1.RFValue)(12),
                alignItems: "center",
                justifyContent: "center",
            }}>
                  {LikeComponent ? (LikeComponent({
                post: item,
                isLike,
                setIsLike,
            }, index)) : (<HeartComponent_1.default onLikeTextPress={onLikeTextPress} onDefaultPress={() => {
                    handleCommentPress("likes");
                }} likeIcon={likeIcon} unlikeIcon={unlikeIcon} item={item} isLiked={isLiked} toggleLike={toggleLike}/>)}
                  <react_native_1.TouchableOpacity style={styles.likeButton} onPress={() => handleCommentPress()}>
                    {commentIcon ? (commentIcon) : (<MaterialCommunityIcons_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(25)} color={"white"} name={"comment-multiple"}/>)}
                    <react_native_1.Text style={styles.likeCount}>
                      {(_d = item === null || item === void 0 ? void 0 : item.comments_count) !== null && _d !== void 0 ? _d : ""}
                    </react_native_1.Text>
                  </react_native_1.TouchableOpacity>
                  <react_native_1.View>
                    {SaveComponent ? (SaveComponent({
                post: item,
                isSave: isBookmarkIconVisible,
                setIsSave: setIsBookmarkIconVisible,
            })) : (<react_native_1.TouchableOpacity style={styles.likeButton} onPress={() => {
                    setIsBookmarkIconVisible((prev) => !prev);
                }}>
                        {saveIcon || unsaveIcon ? (isBookmarkIconVisible ? (saveIcon ? (saveIcon) : (<FontAwesome_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(25)} color={"yellow"} name={"bookmark"}/>)) : unsaveIcon ? (unsaveIcon) : (<FontAwesome_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(25)} color={"white"} name={"bookmark-o"}/>)) : (<FontAwesome_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(25)} color={isBookmarkIconVisible ? "yellow" : "white"} name={isBookmarkIconVisible ? "bookmark" : "bookmark-o"}/>)}
                      </react_native_1.TouchableOpacity>)}
                  </react_native_1.View>
                </react_native_1.View>)}
            </react_native_1.View>
          </react_native_1.TouchableOpacity>

          <CommentSection_1.default customCommentsComponent={customCommentsComponent} renderInputComponent={renderInputComponent} onSendComment={onSendComment} currentUser={currentUser} item={item} index={index} whoCommentedComponent={whoCommentedComponent} whoReactedComponent={whoReactedComponent} screenHeight={screenHeight} title={isCommentVisible.name} isVisible={isCommentVisible.visible} onClose={() => {
            handleCloseComments("comment");
        }} comments={comments} videoHeight={videoHeight} videoWidth={videoWidth}/>
        </react_native_1.View>
      </react_native_gesture_handler_1.GestureHandlerRootView>);
});
exports.default = VideoItem;
const styles = react_native_1.StyleSheet.create({
    muteIcon: {
        position: "absolute",
        top: (0, react_native_responsive_screen_1.heightPercentageToDP)(50),
        left: (0, react_native_responsive_screen_1.widthPercentageToDP)(50),
        alignSelf: "center",
        transform: [{ translateX: -25 }, { translateY: -25 }],
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 50,
        padding: 10,
        zIndex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    errorText: {
        color: "red",
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    retryText: {
        color: "blue",
        fontSize: 16,
    },
    videoContainer: {
        width: (0, react_native_responsive_screen_1.widthPercentageToDP)(100),
        backgroundColor: "#000",
        overflow: "hidden",
    },
    videoWrapper: {
        flex: 1,
        position: "relative",
    },
    videoAnimationWrapper: {
        width: "100%",
        height: "100%",
    },
    video: {
        width: "100%",
        height: "100%",
    },
    overlay: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "flex-end",
        alignSelf: "center",
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "space-between",
        padding: 20,
        marginBottom: (0, react_native_responsive_fontsize_1.RFValue)(10),
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },
    userText: {
        color: "white",
    },
    audioLabel: {
        borderRadius: 20,
        alignSelf: "flex-start",
    },
    audioText: {
        color: "white",
        fontSize: 14,
        maxWidth: (0, react_native_responsive_screen_1.widthPercentageToDP)(75),
    },
    likeButton: {
        alignSelf: "flex-end",
        alignItems: "center",
    },
    likeCount: {
        color: "white",
        fontSize: 14,
        marginTop: 4,
    },
    footerLoading: {
        paddingVertical: 20,
    },
    // Comment Section Styles
    backdrop: Object.assign(Object.assign({}, react_native_1.StyleSheet.absoluteFillObject), { backgroundColor: "transparent", zIndex: 1 }),
    commentContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: (0, react_native_responsive_screen_1.heightPercentageToDP)(50),
        backgroundColor: "black",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 2,
        paddingHorizontal: 16,
        paddingTop: 0,
        // marginBottom: hp(25),
    },
    dragHandleContainer: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 16,
        // Make it a large touch target
        minHeight: 44,
        backgroundColor: "transparent",
    },
    dragHandle: {
        width: 40,
        height: 5,
        backgroundColor: "white",
        borderRadius: 3,
    },
    commentHeader: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: "white",
    },
    commentTitle: {
        color: "white",
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(18),
    },
    commentList: {
        flex: 1,
        // height: hp(20),
        marginBottom: 8,
    },
    commentItem: {
        flexDirection: "row",
        marginBottom: 16,
    },
    commentAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 12,
    },
    commentContent: {
        flex: 1,
    },
    commentHeaderRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },
    commentUsername: {
        color: "white",
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(14),
    },
    commentTime: {
        color: "grey",
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(11),
    },
    commentText: {
        color: "white",
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(14),
        lineHeight: 18,
        marginBottom: 8,
    },
    commentActions: {
        flexDirection: "row",
        alignItems: "center",
    },
    commentActionButton: {
        marginRight: 12,
    },
    replyText: {
        color: "grey",
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(12),
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderTopWidth: 0.5,
        borderTopColor: "grey",
        marginBottom: (0, react_native_responsive_screen_1.heightPercentageToDP)(2),
    },
    inputAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12,
    },
    commentInputWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "grey",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    commentInput: {
        flex: 1,
        color: "white",
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(14),
        maxHeight: 80,
        padding: 0,
    },
    sendButton: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    sendText: {
        color: "blue",
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(14),
    },
});
