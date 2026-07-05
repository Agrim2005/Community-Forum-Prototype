import { useState } from "react";
import { Avatar, Badge, Button, Card } from "@/components/ui";
import type { Post } from "@/types/post.types";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    const [liked, setLiked] = useState(post.isLiked);
    const [likes, setLikes] = useState(post.likes);
    const [bookmarked, setBookmarked] = useState(post.isBookmarked);
    const [showComments, setShowComments] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLikes((prev) => prev - 1);
        } else {
            setLikes((prev) => prev + 1);
        }
        setLiked(!liked);
    };

    // Moved outside of handleLike to fix the scoping error
    const handleBookmark = () => {
        setBookmarked(!bookmarked);
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
                        <Avatar
                            src={post.author.avatar}
                            alt={post.author.name}
                        />
                        <div>
                            <h3 className="font-semibold">
                                {post.author.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {post.createdAt}
                            </p>
                        </div>
                    </div>
                    <Badge>Community</Badge>
                </div>

                {/* Post Content */}
                <p className="text-gray-800 leading-7">
                    {post.content}
                </p>

                {/* Footer */}
                <div className="border-t pt-4">
                    <div className="flex justify-between text-gray-600 mb-4">
                        <span>❤️ {likes} Likes</span>
                        <span>💬 {post.comments} Comments</span>
                    </div>

                    {showComments && (
                        <div className="mt-5 border-t pt-4 space-y-3">
                            {post.commentList.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="bg-gray-100 rounded-lg p-3"
                                >
                                    <p className="font-semibold">
                                        {comment.author}
                                    </p>

                                    <p className="text-gray-700">
                                        {comment.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="grid grid-cols-3 gap-3">
                        {/* Fixed Buttons: Added Like button, removed duplicate Save */}
                        <Button
                            variant="secondary"
                            fullWidth
                            onClick={handleLike}
                        >
                            {liked ? "❤️ Liked" : "🤍 Like"}
                        </Button>

                        <Button
                            variant="secondary"
                            fullWidth
                            onClick={handleComments}
                        >
                            {showComments ? "🙈 Hide" : "💬 Comment"}
                        </Button>

                        <Button
                            variant="secondary"
                            fullWidth
                            onClick={handleBookmark}
                        >
                            {bookmarked ? "📌 Saved" : "🔖 Save"}
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default PostCard;