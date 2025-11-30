# React Native Reels View

A fully customizable, high‑performance **Instagram/TikTok‑style Reels viewer** for React Native. Built with TypeScript and designed for deeply interactive video feeds.

This package helps you build:
- 🔥 Smooth vertically‑scrolling reels
- 🎥 Auto‑play, mute/unmute, and per‑video refs
- ❤️ Like/Unlike with custom UI
- 💬 Comments, reactions, interaction bar
- 🔗 Save/Unsave logic
- 👤 Who reacted/commented components
- 📌 Fully customizable render functions

---

## 📦 Installation
```bash
npm install react-native-reels-view
```
or
```bash
yarn add react-native-reels-view
```

---

## 🚀 Basic Usage
```tsx
import ReelsView from "react-native-reels-view";

const App = () => {
  return (
    <ReelsView
      data={reelsData}
      
    />
  );
};
```

---

# 📘 **API Reference**
Below is the **complete documentation** for `MyListProps<T>`.

---

## 🔹 **data: T[]** *(required)*
The array of reel items.

---

## 🔹 **renderItem?: (item: T, index: number) => React.ReactNode**
Custom renderer for each reel.

---

## 🔹 **canGoBack?: boolean**
If true, shows a back icon.

---

## 🔹 **onEndReached?: () => void**
Triggered when the user scrolls to the last reel.

---

## 🔹 **onEndReachedThreshold?: number**
Defines how close to the bottom before `onEndReached` fires.

---

## 🔹 **viewabilityConfig?: FlatListProps<T>["viewabilityConfig"]**
Controls which items are considered "viewable".

---

## 🔹 **ListFooterComponent?: React.ReactNode**
Renders custom footer.

---

## 🔹 **ref?: React.Ref<FlatList<T>>**
Reference to the FlatList.

---

## 🔹 **initialLoading?: boolean**
Show loading before first reel appears.

---

## 🔹 **loadingComponent?: React.ReactNode**
Custom loading UI.

---

## 🎵 **Mute/Unmute Icons**
### muteIcon?: React.ReactNode
### unMuteIcon?: React.ReactNode

---

## 🎥 **videosRef?: VideoRef | Record<string, VideoRef> | function**
Used to control videos individually.

Example usage:
```ts
videosRef={(refs) => console.log(refs)}
```

---

## 🎛 **reelsDetails?: (details, index) => React.ReactNode**
Render custom author & description block.

---

## ⭐ Interaction Bar
### reelsInteractionBar?: (details, index) => React.ReactNode
Fully custom interaction UI (like/share/save/comment).

---

## ❤️ Like / Unlike Icons
- unlikeIcon?: React.ReactNode
- likeIcon?: React.ReactNode

---

## 📌 Save / Unsave Icons
- unsaveIcon?: React.ReactNode
- saveIcon?: React.ReactNode

---

## 👤 **currentUser?: { id, name, image, role? }**
Used for reactions & comment attribution.

---

## 🧑‍🤝‍🧑 **whoReactedComponent?: ({ item, index }) => React.ReactNode**
Render list of people who liked the reel.

---

## 💬 **whoCommentedComponent?: ({ item, index }) => React.ReactNode**
Render list of commenters.

---

## 📝 **onLikeTextPress?: (item, index) => void**
Handles when user taps “Liked by…” text.

---

## ❤️‍🔥 LikeComponent
```ts
LikeComponent?: (
  details: { post: any; isLike: boolean; setIsLike: (value: boolean) => void },
  index: number
) => React.ReactNode;
```
Lets you override like logic entirely.

---

## 💾 SaveComponent
```ts
SaveComponent?: (
  details: { post: any; isSave: boolean; setIsSave: (value: boolean) => void },
  index: number
) => React.ReactNode;
```
---

## ✉ onSendComment
```ts
onSendComment?: ({ commentText, post, setCommentText }) => void;
```
Called when user submits a comment.

---

## 📥 renderInputComponent?: (post) => React.ReactNode
Custom input field.

---

## 🗂 customCommentsComponent?: ({ item, index }) => React.ReactNode
Override entire comments list.

---

# 🎯 **Summary**
This package gives you:
- Full control over UI
- Per‑reel refs
- All interactions customizable
- Commenting system
- Reactions system
- Smooth infinite scroll reels

Perfect for building:
- Social feeds
- Stories & reels
- Content discovery pages

---

# 📄 License
MIT

---

If you want, I can also generate:
✔ npm‑ready README formatting
✔ GitHub badges
✔ Demo GIF placeholders
✔ Example code folder

