import { useState } from "react";

import {
  Avatar,
  Badge,
  Button,
  Card,
} from "@/components/ui";

import type { Post } from "@/types/post.types";

import { useBookmarkStore } from "@/store/bookmark.store";
import { useAuthStore } from "@/store/auth.store";
import { usePostStore } from "@/store/post.store";

interface PostCardProps {
  post: Post;
}

const PostCard = ({
  post,
}: PostCardProps) => {
  const user = useAuthStore(
    (state) => state.user
  );

  const {
    deletePost,
    editPost,
  } = usePostStore();

  const {
    addBookmark,
    removeBookmark,
    isBookmarked,
  } = useBookmarkStore();

  const [liked, setLiked] =
    useState(post.isLiked);

  const [likes, setLikes] =
    useState(post.likes);

  const [showComments, setShowComments] =
    useState(false);

  const [isEditing, setIsEditing] =
    useState(false);

  const [
    editedContent,
    setEditedContent,
  ] = useState(post.content);

  const bookmarked =
    isBookmarked(post.id);

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

    editPost(
      post.id,
      editedContent
    );

    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(post.content);
    setIsEditing(false);
  };

  const handleComments = () => {
    setShowComments(
      (prev) => !prev
    );
  };

  return (
    <Card>
      <div className="space-y-5">

        {/* Header */}

        <div
          className="
            flex
            justify-between
            items-center
            gap-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              min-w-0
            "
          >
            <Avatar
              src={post.author.avatar}
              alt={post.author.name}
            />

            <div className="min-w-0">
              <h3
                className="
                  font-semibold
                  text-gray-900
                  dark:text-white
                "
              >
                {post.author.name}
              </h3>

              <p
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {post.createdAt}
              </p>
            </div>
          </div>

          <Badge>
            Community
          </Badge>
        </div>

        {/* Post Content */}

        {isEditing ? (
          <div>
            <p
              className="
                font-semibold
                mb-2
                text-gray-900
                dark:text-white
              "
            >
              Editing Post
            </p>

            <textarea
              value={editedContent}
              onChange={(e) =>
                setEditedContent(
                  e.target.value
                )
              }
              className="
                w-full
                border
                border-gray-300
                dark:border-gray-600
                rounded-lg
                p-3
                bg-white
                dark:bg-gray-900
                text-gray-900
                dark:text-white
                placeholder:text-gray-500
                dark:placeholder:text-gray-400
                outline-none
                focus:ring-2
                focus:ring-purple-500
                resize-none
              "
              rows={4}
              maxLength={500}
            />
          </div>
        ) : (
          <p
            className="
              text-gray-800
              dark:text-gray-100
              leading-7
            "
          >
            {post.content}
          </p>
        )}

        {/* Footer */}

        <div
          className="
            border-t
            border-gray-200
            dark:border-gray-600
            pt-4
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:justify-between
              gap-2
              text-gray-600
              dark:text-gray-300
              mb-4
            "
          >
            <span>
              ❤️ {likes} Likes
            </span>

            <span>
              💬 {post.comments} Comments
            </span>
          </div>

          {/* Comments */}

          {showComments && (
            <div
              className="
                mt-5
                border-t
                border-gray-200
                dark:border-gray-600
                pt-4
                space-y-3
              "
            >
              {post.commentList.length > 0 ? (
                post.commentList.map(
                  (comment) => (
                    <div
                      key={comment.id}
                      className="
                        bg-gray-100
                        dark:bg-gray-900
                        border
                        border-gray-200
                        dark:border-gray-700
                        rounded-lg
                        p-3
                      "
                    >
                      <p
                        className="
                          font-semibold
                          text-gray-900
                          dark:text-white
                        "
                      >
                        {comment.author}
                      </p>

                      <p
                        className="
                          text-gray-700
                          dark:text-gray-200
                          mt-1
                        "
                      >
                        {comment.text}
                      </p>
                    </div>
                  )
                )
              ) : (
                <p
                  className="
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  No comments yet.
                </p>
              )}
            </div>
          )}

          {/* Main Actions */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-3
              mt-4
            "
          >
            <Button
              variant="secondary"
              fullWidth
              onClick={handleLike}
            >
              {liked
                ? "❤️ Liked"
                : "🤍 Like"}
            </Button>

            <Button
              variant="secondary"
              fullWidth
              onClick={handleComments}
            >
              {showComments
                ? "🙈 Hide"
                : "💬 Comment"}
            </Button>

            <Button
              variant="secondary"
              fullWidth
              onClick={handleBookmark}
            >
              {bookmarked
                ? "📌 Saved"
                : "🔖 Save"}
            </Button>
          </div>

          {/* Author Actions */}

          {post.author.id === user?.id && (
            <div className="mt-4 space-y-3">
              {isEditing ? (
                <>
                  <Button
                    fullWidth
                    onClick={handleSave}
                  >
                    💾 Save Changes
                  </Button>

                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() =>
                    setIsEditing(true)
                  }
                >
                  ✏️ Edit Post
                </Button>
              )}

              <Button
                variant="secondary"
                fullWidth
                onClick={handleDelete}
              >
                🗑️ Delete Post
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PostCard;  