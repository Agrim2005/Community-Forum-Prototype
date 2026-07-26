import { Bookmark } from "lucide-react";
import EmptyState from "./EmptyState";

const NoBookmarks = () => (
  <EmptyState
    icon={<Bookmark size={56} />}
    title="No bookmarks"
    description="Bookmark your favourite posts to access them quickly later."
  />
);

export default NoBookmarks;