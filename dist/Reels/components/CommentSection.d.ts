import React from 'react';
declare const CommentSection: React.MemoExoticComponent<({ isVisible, customCommentsComponent, onClose, comments, title, videoHeight, videoWidth, screenHeight, whoReactedComponent, whoCommentedComponent, onSendComment, currentUser, item, renderInputComponent, index, }: {
    isVisible: boolean;
    renderInputComponent?: (post: any) => React.ReactNode;
    customCommentsComponent?: ({ item, index, }: {
        item: any;
        index: number;
    }) => React.ReactNode;
    onSendComment?: ({ commentText, post, setCommentText, }: {
        commentText: string;
        post: any;
        setCommentText: React.Dispatch<React.SetStateAction<string>>;
    }) => void;
    onClose: () => void;
    comments: any[];
    title?: string;
    videoHeight: any;
    videoWidth: any;
    screenHeight: number;
    item?: any;
    currentUser?: {
        id: number | string;
        name: string;
        image: string;
        role?: string;
    };
    index?: number;
    whoReactedComponent?: ({ item, index, }: {
        item: any;
        index: number;
    }) => React.ReactNode;
    whoCommentedComponent?: ({ item, index, }: {
        item: any;
        index: number;
    }) => React.ReactNode;
}) => React.JSX.Element>;
export default CommentSection;
