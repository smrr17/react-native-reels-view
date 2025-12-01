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
const react_native_responsive_screen_1 = require("react-native-responsive-screen");
const react_native_responsive_fontsize_1 = require("react-native-responsive-fontsize");
const Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
const HeartComponent = (0, react_1.memo)(({ item, isLiked, toggleLike, likeIcon, unlikeIcon, onLikeTextPress, onDefaultPress, }) => {
    return (<react_native_1.TouchableOpacity style={styles.likeButton} onPress={() => toggleLike(item.id)}>
        {likeIcon || unlikeIcon ? (isLiked && likeIcon ? (likeIcon ? (likeIcon) : (<Ionicons_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(28)} color={'red'} name={'heart'}/>)) : unlikeIcon ? (unlikeIcon) : (<Ionicons_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(28)} color={'white'} name={'heart-outline'}/>)) : (<Ionicons_1.default size={(0, react_native_responsive_fontsize_1.RFValue)(28)} color={isLiked ? 'red' : 'white'} name={isLiked ? 'heart' : 'heart-outline'}/>)}
        <react_native_1.Pressable onPress={() => {
            if (onLikeTextPress) {
                onLikeTextPress(item, item.index);
            }
            else if (onDefaultPress) {
                onDefaultPress();
            }
        }}>
          <react_native_1.Text style={styles.likeCount}>Likes</react_native_1.Text>
        </react_native_1.Pressable>
      </react_native_1.TouchableOpacity>);
});
exports.default = HeartComponent;
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
