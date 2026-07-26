import { MessageCircle } from "lucide-react";
import EmptyState from "./EmptyState";

const NoMessages = () => (
  <EmptyState
    icon={<MessageCircle size={56} />}
    title="No conversations"
    description="Start chatting with community members."
  />
);

export default NoMessages;