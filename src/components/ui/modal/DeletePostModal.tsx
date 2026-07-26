import ConfirmModal from "./ConfirmModal";

interface DeletePostModalProps {
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
}

const DeletePostModal = ({
  isOpen,
  onDelete,
  onClose,
}: DeletePostModalProps) => (
  <ConfirmModal
    isOpen={isOpen}
    title="Delete Post"
    message="Are you sure you want to delete this post? This action cannot be undone."
    onConfirm={onDelete}
    onClose={onClose}
  />
);

export default DeletePostModal;