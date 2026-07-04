import { Avatar, Badge, Button, Card } from "@/components/ui";
import type { Post } from "@/types/post.types";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
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

                    <Badge>
                        Community
                    </Badge>

                </div>

                {/* Post Content */}

                <p className="text-gray-800 leading-7">
                    {post.content}
                </p>

                {/* Footer */}

                <div className="border-t pt-4">

                    <div className="flex justify-between text-gray-600 mb-4">

                        <span>❤️ {post.likes} Likes</span>

                        <span>💬 {post.comments} Comments</span>

                    </div>

                    <div className="grid grid-cols-3 gap-3">

                        <Button variant="secondary" fullWidth>
                            ❤️ Like
                        </Button>

                        <Button variant="secondary" fullWidth>
                            💬 Comment
                        </Button>

                        <Button variant="secondary" fullWidth>
                            🔖 Save
                        </Button>

                    </div>

                </div>

            </div>
        </Card>
    );
};

export default PostCard;