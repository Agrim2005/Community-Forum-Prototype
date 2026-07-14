import type {
  Message,
} from "@/types/message.types";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({
  message,
}: MessageBubbleProps) => {
  return (
    <div
      className={`
        flex
        ${
          message.isMine
            ? "justify-end"
            : "justify-start"
        }
      `}
    >
      <div
        className={`
          w-fit
          max-w-[85%]
          sm:max-w-[70%]
          lg:max-w-[60%]
          rounded-xl
          px-4
          py-3
          shadow-sm
          transition-colors
          duration-200

          ${
            message.isMine
              ? `
                  bg-purple-600
                  dark:bg-purple-700
                  text-white
                `
              : `
                  bg-gray-100
                  dark:bg-gray-800
                  text-gray-900
                  dark:text-gray-100
                  border
                  border-gray-200
                  dark:border-gray-700
                `
          }
        `}
      >
        <h3
          className="
            font-semibold
            text-sm
            mb-1
          "
        >
          {message.sender}
        </h3>

        <p
          className="
            leading-relaxed
            break-words
          "
        >
          {message.text}
        </p>

        <p
          className={`
            text-xs
            mt-2

            ${
              message.isMine
                ? "text-purple-100"
                : `
                    text-gray-500
                    dark:text-gray-400
                  `
            }
          `}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;