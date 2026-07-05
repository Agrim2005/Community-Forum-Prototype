import { useState } from "react";
import { Button, Card, Avatar } from "@/components/ui";
import { useAuthStore } from "@/store/auth.store";

interface CreatePostProps {
    onAddPost: (content: string) => void;
}

const CreatePost = ({ onAddPost }: CreatePostProps) => {
    // 1. Move the hook inside the component
    const user = useAuthStore((state) => state.user);
    
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (!content.trim()) return;
        onAddPost(content);
        setContent("");
    };

    return (
        <Card>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Avatar
                        src={user?.avatar}
                        alt={user?.name}
                    />

                    <div>
                        <h3 className="font-semibold">
                            {user?.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            Share something with the community
                        </p>
                    </div>
                </div>

                {/* Textarea properly separated from other elements */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your thoughts with the community..."
                    className="w-full border rounded-lg p-4 resize-none outline-none focus:ring-2 focus:ring-purple-500"
                    rows={4}
                    maxLength={500}
                />

                {/* Character count div placed below the textarea */}
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        {content.length}/500 characters
                    </span>
                </div>

                <div className="flex justify-end">
                    <Button
                        onClick={handleSubmit}
                        disabled={!content.trim()}
                    >
                        Post
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default CreatePost;