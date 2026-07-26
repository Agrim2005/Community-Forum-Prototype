import { FileText } from "lucide-react";
import EmptyState from "./EmptyState";

const NoPosts = () => (
  <EmptyState
    icon={<FileText size={56} />}
    title="No posts yet"
    description="Create your first post and start sharing with the community."
  />
);

export default NoPosts;