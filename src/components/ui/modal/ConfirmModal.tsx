import Modal from "./Modal";
import Button from "@/components/ui/button/Button";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onClose,
}: ConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm}>
            Confirm
          </Button>
        </>
      }
    >
      <p className="text-gray-600 dark:text-gray-300">
        {message}
      </p>
    </Modal>
  );
};

export default ConfirmModal;