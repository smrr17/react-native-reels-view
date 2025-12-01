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
const react_native_reanimated_1 = __importDefault(require("react-native-reanimated"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_responsive_screen_1 = require("react-native-responsive-screen");
const Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
const react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
const useCommentSection_1 = __importDefault(require("../hooks/useCommentSection"));
const CommentSection = (0, react_1.memo)(({ isVisible, customCommentsComponent, onClose, comments, title, videoHeight, videoWidth, screenHeight, whoReactedComponent, whoCommentedComponent, onSendComment, currentUser, item, renderInputComponent, index, }) => {
    const { animatedStyle, onGestureEvent, onHandlerStateChange, newComment, setNewComment, handleSendComment, } = (0, useCommentSection_1.default)({
        isVisible,
        onClose,
        videoHeight,
        videoWidth,
        screenHeight,
    });
    if (!isVisible)
        return null;
    return (<>
        <react_native_1.TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose}/>

        <react_native_reanimated_1.default.View style={[styles.commentContainer, animatedStyle]}>
          <react_native_gesture_handler_1.PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange} minDist={10}>
            <react_native_reanimated_1.default.View style={styles.dragHandleContainer}>
              <react_native_1.View style={styles.dragHandle}/>
            </react_native_reanimated_1.default.View>
          </react_native_gesture_handler_1.PanGestureHandler>

          <react_native_1.View style={styles.commentHeader}>
            <react_native_1.Text style={styles.commentTitle}>{title !== null && title !== void 0 ? title : ''}</react_native_1.Text>
          </react_native_1.View>

          {title === 'likes' ? (whoReactedComponent ? (whoReactedComponent({ item: item, index: index })) : null) : (<react_native_1.View style={{ flex: 1 }}>
              {customCommentsComponent ? (customCommentsComponent({ item: item, index: index })) : (<>
                  {whoCommentedComponent ? (<react_native_1.View style={{ flex: 1 }}>
                      {whoCommentedComponent({ item: item, index: index })}
                    </react_native_1.View>) : (<react_native_gesture_handler_1.FlatList data={comments} keyExtractor={item => item.id} renderItem={({ item }) => (<react_native_1.View style={styles.commentItem}>
                          <react_native_1.Image source={{ uri: item === null || item === void 0 ? void 0 : item.userAvatar }} style={styles.commentAvatar}/>
                          <react_native_1.View style={styles.commentContent}>
                            <react_native_1.View style={styles.commentHeaderRow}>
                              <react_native_1.Text style={styles.commentUsername}>
                                {item.username}
                              </react_native_1.Text>
                              <react_native_1.Text style={styles.commentTime}>
                                {item.time}
                              </react_native_1.Text>
                            </react_native_1.View>
                            <react_native_1.Text style={styles.commentText}>{item.text}</react_native_1.Text>
                            <react_native_1.View style={styles.commentActions}>
                              <react_native_1.TouchableOpacity style={styles.commentActionButton}>
                                <Ionicons_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(14)} color={'#888'} name="heart-outline"/>
                              </react_native_1.TouchableOpacity>
                              <react_native_1.Text style={styles.likeCount}>{item.likes}</react_native_1.Text>
                            </react_native_1.View>
                          </react_native_1.View>
                        </react_native_1.View>)} style={styles.commentList} showsVerticalScrollIndicator={false}/>)}
                  {renderInputComponent ? (renderInputComponent(item)) : (<react_native_1.View style={styles.inputContainer}>
                      <react_native_1.Image source={{
                        uri: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.image) ||
                            'https://randomuser.me/api/portraits/men/1.jpg',
                    }} style={styles.inputAvatar}/>

                      <react_native_1.View style={styles.commentInputWrapper}>
                        <react_native_1.TextInput style={styles.commentInput} placeholder="Share your thoughts..." placeholderTextColor={'#888'} value={newComment} onChangeText={setNewComment} multiline/>
                        <react_native_1.TouchableOpacity style={[
                        styles.sendButton,
                        { opacity: (newComment === null || newComment === void 0 ? void 0 : newComment.trim()) ? 1 : 0.5 },
                    ]} onPress={() => onSendComment === null || onSendComment === void 0 ? void 0 : onSendComment({
                        commentText: newComment,
                        post: item,
                        setCommentText: setNewComment,
                    })} disabled={!(newComment === null || newComment === void 0 ? void 0 : newComment.trim())}>
                          <Ionicons_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(20)} color={'white'} name="send"/>
                        </react_native_1.TouchableOpacity>
                      </react_native_1.View>
                    </react_native_1.View>)}
                </>)}
            </react_native_1.View>)}
        </react_native_reanimated_1.default.View>
      </>);
});
exports.default = CommentSection;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
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
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    videoWrapper: {
        flex: 1,
        position: 'relative',
    },
    videoAnimationWrapper: {
        width: '100%',
        height: '100%',
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
    // Comment Section Styles
    backdrop: Object.assign(Object.assign({}, react_native_1.StyleSheet.absoluteFillObject), { backgroundColor: 'transparent', zIndex: 1 }),
    commentContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: (0, react_native_responsive_screen_1.heightPercentageToDP)(50),
        backgroundColor: '#121212',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 2,
        paddingHorizontal: 16,
        paddingTop: 0,
        // marginBottom: hp(25),
    },
    dragHandleContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 16,
        // Make it a large touch target
        minHeight: 44,
        backgroundColor: 'transparent',
    },
    dragHandle: {
        width: 40,
        height: 5,
        backgroundColor: 'white',
        borderRadius: 3,
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
    },
    commentTitle: {
        color: 'white',
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(16),
        textTransform: 'capitalize',
    },
    commentList: {
        flex: 1,
        // height: hp(20),
        marginBottom: 8,
    },
    commentItem: {
        flexDirection: 'row',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    commentUsername: {
        color: 'white',
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(14),
    },
    commentTime: {
        color: '#888',
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(11),
    },
    commentText: {
        color: 'white',
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(14),
        lineHeight: 18,
        marginBottom: 8,
    },
    commentActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentActionButton: {
        marginRight: 12,
    },
    replyText: {
        color: '#888',
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(12),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderTopWidth: 0.5,
        borderTopColor: '#444',
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    commentInput: {
        flex: 1,
        color: 'white',
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(12),
        maxHeight: 80,
        padding: 0,
    },
    sendButton: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    sendText: {
        color: '#1E90FF',
        fontSize: (0, react_native_responsive_fontsize_1.RFValue)(14),
    },
});
