import type { Message } from "@/types/message.types";

interface MessageBubbleProps {
    message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
    return (
        <div
            className={`flex ${message.isMine ? "justify-end" : "justify-start"
                }`}
        >
            <div
                className={`rounded-xl p-4 shadow-md max-w-sm ${message.isMine
                    ? "bg-purple-600 text-white"
                    : "bg-white border"
                    }`}
            >
                <div className="space-y-2 max-w-sm">

                    <h3
                        className={`font-semibold ${message.isMine
                                ? "text-white"
                                : ""
                            }`}
                    >
                        {message.sender}
                    </h3>

                    <p>{message.text}</p>

                    <p
                        className={`text-xs ${message.isMine
                            ? "text-purple-100"
                            : "text-gray-500"
                            }`}
                    >
                        {message.time}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default MessageBubble;