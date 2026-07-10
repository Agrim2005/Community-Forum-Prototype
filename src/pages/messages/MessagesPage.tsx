import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui";
import { MessageBubble } from "@/components/common";

import { messages as initialMessages } from "@/data/messages";
import type { Message } from "@/types/message.types";

const MessagesPage = () => {
    const [messages, setMessages] =
        useState<Message[]>(initialMessages);

    const [text, setText] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const handleSend = () => {
        if (!text.trim()) return;

        const newMessage: Message = {
            id: crypto.randomUUID(),
            sender: "You",
            text,
            time: "Just now",
            isMine: true,
        };

        setMessages((prev) => [...prev, newMessage]);

        setText("");
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">

            <div className="mb-8">

                <h1 className="text-4xl font-bold">
                    Messages
                </h1>

                <p className="text-gray-500 mt-2">
                    Chat with your connections.
                </p>

            </div>

            <div className="space-y-4 border rounded-xl p-6 h-[500px] overflow-y-auto">

                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        message={message}
                    />
                ))}

                <div ref={bottomRef} />

            </div>

            <div className="flex gap-3 mt-6">

                <input
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend();
                        }
                    }}
                    type="text"
                    value={text}
                    onChange={(e) =>
                        setText(e.target.value)
                    }
                    placeholder="Type a message..."
                    className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                />

                <Button
                    onClick={handleSend}
                    disabled={!text.trim()}
                >
                    Send
                </Button>

            </div>

        </div>
    );
};

export default MessagesPage;