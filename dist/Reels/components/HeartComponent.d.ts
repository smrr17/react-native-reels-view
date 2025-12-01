import React from 'react';
declare const HeartComponent: React.MemoExoticComponent<({ item, isLiked, toggleLike, likeIcon, unlikeIcon, onLikeTextPress, onDefaultPress, }: {
    item: any;
    isLiked: boolean;
    toggleLike: (id: string) => void;
    likeIcon: React.ReactNode;
    unlikeIcon: React.ReactNode;
    onLikeTextPress?: (item: any, index: number) => void;
    onDefaultPress?: () => void;
}) => React.JSX.Element>;
export default HeartComponent;
