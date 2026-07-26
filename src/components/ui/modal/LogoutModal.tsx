import ConfirmModal from "./ConfirmModal";

interface LogoutModalProps {
  isOpen: boolean;
  onLogout: () => void;
  onClose: () => void;
}

const LogoutModal = ({
  isOpen,
  onLogout,
  onClose,
}: LogoutModalProps) => (
  <ConfirmModal
    isOpen={isOpen}
    title="Logout"
    message="Are you sure you want to log out?"
    onConfirm={onLogout}
    onClose={onClose}
  />
);

export default LogoutModal;