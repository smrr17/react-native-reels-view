import React from "react";
import { VideoRef } from "react-native-video";
import { FlatListProps, FlatList } from "react-native";
export type MyListProps<T> = {
    renderItem?: (item: T, index: number) => React.ReactNode;
    data: T[];
    canGoBack?: boolean;
    onEndReached?: () => void;
    onEndReachedThreshold?: number;
    viewabilityConfig?: FlatListProps<T>["viewabilityConfig"];
    ListFooterComponent?: React.ReactNode;
    ref?: React.Ref<FlatList<T>> | null;
    initialLoading?: boolean;
    loadingComponent?: React.ReactNode;
    muteIcon?: React.ReactNode;
    unMuteIcon?: React.ReactNode;
    videosRef?: VideoRef | null | ((ref: Record<string, VideoRef>) => void);
    reelsDetails?: (details: any, index: number) => React.ReactNode;
    reelsInteractionBar?: (details: any, index: number) => React.ReactNode;
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
    customCommentsComponent?: ({ item, index, }: {
        item: any;
        index: number;
    }) => React.ReactNode;
} & Omit<FlatListProps<T>, "renderItem">;
