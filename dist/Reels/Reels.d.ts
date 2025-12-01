import * as React from 'react';
import { FlatListProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { VideoRef } from 'react-native-video';
type MyListProps<T> = {
    data: T[];
    canGoBack?: boolean;
    onEndReached?: () => void;
    onEndReachedThreshold?: number;
    viewabilityConfig?: FlatListProps<T>['viewabilityConfig'];
    ListFooterComponent?: React.ReactNode;
    ref?: React.Ref<FlatList<T>> | null;
    initialLoading?: boolean;
    loadingComponent?: React.ReactNode;
    muteIcon?: React.ReactNode;
    unMuteIcon?: React.ReactNode;
    videosRef?: VideoRef | null | ((ref: Record<string, VideoRef>) => void);
    reelsDetails?: (details: any, index: number) => React.ReactNode;
    reelsInteractionBar?: ({ item, index, isLiked, setIsLike, isBookmarkIconVisible, setIsBookmarkIconVisible, handleCommentPress, handleCloseComments, }: {
        item: any;
        index: number;
        isLiked: boolean;
        setIsLike: (value: boolean) => void;
        isBookmarkIconVisible: boolean;
        setIsBookmarkIconVisible: (value: boolean) => void;
        handleCommentPress: (section?: string) => void;
        handleCloseComments: (section?: string) => void;
    }) => React.ReactNode;
    unlikeIcon?: React.ReactNode;
    likeIcon?: React.ReactNode;
    unsaveIcon?: React.ReactNode;
    saveIcon?: React.ReactNode;
    commentIcon?: React.ReactNode;
    goBackIcon?: React.ReactNode;
    currentUser?: {
        id: number | string;
        name: string;
        image: string;
        role?: string;
    };
    whoReactedComponent?: ({ item, index, }: {
        item: any;
        index: number;
    }) => React.ReactNode;
    whoCommentedComponent?: ({ item, index, }: {
        item: any;
        index: number;
    }) => React.ReactNode;
    onLikeTextPress?: (item: any, index: number) => void;
    LikeComponent?: (details: {
        post: any;
        isLike: boolean;
        setIsLike: (value: boolean) => void;
    }, index: number) => React.ReactNode;
    SaveComponent?: (details: {
        post: any;
        isSave: boolean;
        setIsSave: (value: boolean) => void;
    }, index: number) => React.ReactNode;
    onSendComment?: ({ commentText, post, setCommentText, }: {
        commentText: string;
        post: any;
        setCommentText: React.Dispatch<React.SetStateAction<string>>;
    }) => void;
    renderInputComponent?: (post: any) => React.ReactNode;
    topRightActionBar?: ({ item, index, }: {
        item: any;
        index: number;
    }) => React.ReactNode;
    customCommentsComponent?: ({ item, index, }: {
        item: any;
        index: number;
    }) => React.ReactNode;
} & Omit<FlatListProps<T>, 'renderItem'>;
declare const Reels: ({ canGoBack, saveIcon, unsaveIcon, SaveComponent, whoReactedComponent, customCommentsComponent, onSendComment, renderInputComponent, currentUser, goBackIcon, topRightActionBar, whoCommentedComponent, reelsDetails, onLikeTextPress, likeIcon, unlikeIcon, LikeComponent, initialLoading, loadingComponent, ref: outerRef, data: videos, onEndReached, onEndReachedThreshold, viewabilityConfig, ListFooterComponent, muteIcon, unMuteIcon, videosRef, commentIcon, reelsInteractionBar, ...rest }: MyListProps<any>) => React.JSX.Element;
export default Reels;
