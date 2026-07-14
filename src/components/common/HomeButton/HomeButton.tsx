import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-lg
        font-medium
        bg-white
        text-gray-900
        border
        border-gray-300
        hover:bg-gray-100
        dark:bg-gray-800
        dark:text-white
        dark:border-gray-600
        dark:hover:bg-gray-700
        transition
        cursor-pointer
      "
    >
      ← Back to Home
    </button>
  );
};

export default HomeButton;