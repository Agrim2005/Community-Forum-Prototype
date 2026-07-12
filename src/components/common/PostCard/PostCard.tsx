import { useState } from "react";
import { Avatar, Badge, Button, Card } from "@/components/ui";
import type { Post } from "@/types/post.types";
import { useBookmarkStore } from "@/store/bookmark.store";
import { useAuthStore } from "@/store/auth.store";
import { usePostStore } from "@/store/post.store";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    const user = useAuthStore((state) => state.user);
    const { deletePost, editPost } = usePostStore();

    const [liked, setLiked] = useState(post.isLiked);
    const [likes, setLikes] = useState(post.likes);
    const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore();

    const bookmarked = isBookmarked(post.id);
    const [showComments, setShowComments] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(post.content);

    const handleLike = () => {
        if (liked) {
            setLikes((prev) => prev - 1);
        } else {
            setLikes((prev) => prev + 1);
        }
        setLiked(!liked);
    };

    const handleBookmark = () => {
        if (bookmarked) {
            removeBookmark(post.id);
        } else {
            addBookmark(post);
        }
    };

    const handleDelete = () => {
        const confirmed = window.confirm(
            "This action cannot be undone.\n\nDo you want to delete this post?"
        );

        if (!confirmed) return;
        deletePost(post.id);
    };

    const handleSave = () => {
        if (!editedContent.trim()) return;
        editPost(post.id, editedContent);
        setIsEditing(false);
    };

    const handleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <Card>
            <div className="space-y-5">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Avatar src={post.author.avatar} alt={post.author.name} />
                        <div>
                            <h3 className="font-semibold"> {post.author.name} </h3>
                            <p className="text-sm text-gray-500"> {post.createdAt} </p>
                        </div>
                    </div>
                    <Badge>Community</Badge>
                </div>

                {/* Post Content */}
                {isEditing ? (
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="w-full border rounded-lg p-3"
                        rows={4}
                        maxLength={500}
                    />
                ) : (
                    <p className="text-gray-800 leading-7">
                        {post.content}
                    </p>
                )}

                {/* Footer */}
                <div className="border-t pt-4">
                    <div className="flex justify-between text-gray-600 mb-4">
                        <span>❤️ {likes} Likes</span>
                        <span>💬 {post.comments} Comments</span>
                    </div>

                    {showComments && (
                        <div className="mt-5 border-t pt-4 space-y-3">
                            {post.commentList.map((comment) => (
                                <div key={comment.id} className="bg-gray-100 rounded-lg p-3">
                                    <p className="font-semibold"> {comment.author} </p>
                                    <p className="text-gray-700"> {comment.text} </p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="grid grid-cols-3 gap-3">
                        <Button variant="secondary" fullWidth onClick={handleLike}>
                            {liked ? "❤️ Liked" : "🤍 Like"}
                        </Button>
                        <Button variant="secondary" fullWidth onClick={handleComments}>
                            {showComments ? "🙈 Hide" : "💬 Comment"}
                        </Button>
                        <Button variant="secondary" fullWidth onClick={handleBookmark}>
                            {bookmarked ? "📌 Saved" : "🔖 Save"}
                        </Button>
                    </div>

                    {/* Merged author action buttons into a single conditional render */}
                    {post.author.id === user?.id && (
                        <>
                            <div className="mt-4">
                                {isEditing ? (
                                    <Button fullWidth onClick={handleSave}>
                                        💾 Save Changes
                                    </Button>
                                ) : (
                                    <Button variant="secondary" fullWidth onClick={() => setIsEditing(true)}>
                                        ✏️ Edit Post
                                    </Button>
                                )}
                            </div>

                            <Button
                                variant="secondary"
                                fullWidth
                                onClick={() => {
                                    setEditedContent(post.content);
                                    setIsEditing(false);
                                }}
                            >
                                Cancel
                            </Button>

                            <div className="mt-3">
                                <Button variant="secondary" fullWidth onClick={handleDelete}>
                                    🗑️ Delete Post
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default PostCard;