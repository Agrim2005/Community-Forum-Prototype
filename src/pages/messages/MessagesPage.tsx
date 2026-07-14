import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Button } from "@/components/ui";

import {
  MessageBubble,
} from "@/components/common";

import {
  conversations as initialConversations,
} from "@/data/messages";

import type {
  Conversation,
  Message,
} from "@/types/message.types";

const MessagesPage = () => {
  const [
    conversations,
    setConversations,
  ] = useState<Conversation[]>(
    initialConversations
  );

  const [
    selectedConversationId,
    setSelectedConversationId,
  ] = useState(
    initialConversations[0].id
  );

  const [
    searchText,
    setSearchText,
  ] = useState("");

  const [
    text,
    setText,
  ] = useState("");

  const bottomRef =
    useRef<HTMLDivElement>(null);

  const selectedConversation =
    conversations.find(
      (conversation) =>
        conversation.id ===
        selectedConversationId
    );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [
    selectedConversation?.messages,
  ]);

  const filteredConversations =
    useMemo(() => {
      return conversations.filter(
        (conversation) =>
          conversation.name
            .toLowerCase()
            .includes(
              searchText.toLowerCase()
            )
      );
    }, [
      conversations,
      searchText,
    ]);

  const handleSend = () => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: crypto.randomUUID(),

      sender: "You",

      text: text.trim(),

      time: new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),

      isMine: true,
    };

    setConversations(
      (currentConversations) =>
        currentConversations.map(
          (conversation) =>
            conversation.id ===
            selectedConversationId
              ? {
                  ...conversation,

                  messages: [
                    ...conversation.messages,
                    newMessage,
                  ],
                }
              : conversation
        )
    );

    setText("");
  };

  const getLastMessage = (
    conversation: Conversation
  ) => {
    const lastMessage =
      conversation.messages[
        conversation.messages.length - 1
      ];

    return lastMessage;
  };

  if (!selectedConversation) {
    return null;
  }

  return (
    <div
      className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        py-6
        sm:py-10
      "
    >
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          dark:border-gray-800
          bg-white
          dark:bg-gray-950
          shadow-lg
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[320px_minmax(0,1fr)]
            min-h-[650px]
          "
        >
          {/* Conversation Sidebar */}

          <aside
            className="
              border-b
              lg:border-b-0
              lg:border-r
              border-gray-200
              dark:border-gray-800
              bg-gray-50
              dark:bg-gray-950
            "
          >
            <div
              className="
                p-5
                border-b
                border-gray-200
                dark:border-gray-800
              "
            >
              <h1
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                Messages
              </h1>

              <p
                className="
                  text-sm
                  text-gray-600
                  dark:text-gray-400
                  mt-1
                "
              >
                Chat with your connections.
              </p>

              {/* Search */}

              <div className="relative mt-5">
                <span
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                  "
                >
                  🔍
                </span>

                <input
                  type="text"
                  value={searchText}
                  onChange={(e) =>
                    setSearchText(
                      e.target.value
                    )
                  }
                  placeholder="Search messages..."
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-900
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-500
                    dark:placeholder:text-gray-400
                    pl-10
                    pr-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-purple-500
                  "
                />
              </div>
            </div>

            {/* Conversation List */}

            <div
              className="
                p-3
                space-y-2
                max-h-[350px]
                lg:max-h-[540px]
                overflow-y-auto
              "
            >
              {filteredConversations.map(
                (conversation) => {
                  const isSelected =
                    conversation.id ===
                    selectedConversationId;

                  const lastMessage =
                    getLastMessage(
                      conversation
                    );

                  return (
                    <button
                      key={conversation.id}
                      type="button"
                      onClick={() => {
                        setSelectedConversationId(
                          conversation.id
                        );

                        setText("");
                      }}
                      className={`
                        w-full
                        text-left
                        rounded-xl
                        p-3
                        border
                        transition
                        cursor-pointer

                        ${
                          isSelected
                            ? `
                                border-purple-500
                                bg-purple-50
                                dark:bg-purple-950/30
                              `
                            : `
                                border-transparent
                                hover:bg-gray-100
                                dark:hover:bg-gray-900
                              `
                        }
                      `}
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        {/* Avatar */}

                        <div
                          className="
                            relative
                            shrink-0
                          "
                        >
                          <img
                            src={
                              conversation.avatar
                            }
                            alt={
                              conversation.name
                            }
                            className="
                              w-12
                              h-12
                              rounded-full
                              object-cover
                            "
                          />

                          {conversation.isOnline && (
                            <span
                              className="
                                absolute
                                bottom-0
                                right-0
                                w-3
                                h-3
                                rounded-full
                                bg-green-500
                                border-2
                                border-white
                                dark:border-gray-950
                              "
                            />
                          )}
                        </div>

                        {/* Conversation Details */}

                        <div
                          className="
                            min-w-0
                            flex-1
                          "
                        >
                          <div
                            className="
                              flex
                              justify-between
                              gap-2
                            "
                          >
                            <h3
                              className="
                                font-semibold
                                text-gray-900
                                dark:text-white
                                truncate
                              "
                            >
                              {
                                conversation.name
                              }
                            </h3>

                            <span
                              className="
                                text-xs
                                text-purple-600
                                dark:text-purple-400
                                shrink-0
                              "
                            >
                              {lastMessage?.time}
                            </span>
                          </div>

                          <p
                            className="
                              text-sm
                              text-gray-500
                              dark:text-gray-400
                              truncate
                              mt-1
                            "
                          >
                            {lastMessage?.isMine
                              ? `You: ${lastMessage.text}`
                              : lastMessage?.text}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                }
              )}

              {filteredConversations.length ===
                0 && (
                <p
                  className="
                    text-center
                    text-gray-500
                    dark:text-gray-400
                    py-8
                  "
                >
                  No conversations found.
                </p>
              )}
            </div>
          </aside>

          {/* Active Conversation */}

          <section
            className="
              flex
              flex-col
              min-w-0
              bg-white
              dark:bg-gray-950
            "
          >
            {/* Chat Header */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                px-4
                sm:px-6
                py-4
                border-b
                border-gray-200
                dark:border-gray-800
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <img
                  src={
                    selectedConversation.avatar
                  }
                  alt={
                    selectedConversation.name
                  }
                  className="
                    w-11
                    h-11
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h2
                    className="
                      font-semibold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {
                      selectedConversation.name
                    }
                  </h2>

                  <p
                    className={`
                      text-sm

                      ${
                        selectedConversation.isOnline
                          ? "text-green-500"
                          : `
                              text-gray-500
                              dark:text-gray-400
                            `
                      }
                    `}
                  >
                    {selectedConversation.isOnline
                      ? "● Online"
                      : "Offline"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label="More options"
                className="
                  text-2xl
                  text-gray-600
                  dark:text-gray-300
                  cursor-pointer
                "
              >
                ⋮
              </button>
            </div>

            {/* Chat Messages */}

            <div
              className="
                flex-1
                h-[450px]
                lg:h-auto
                min-h-[450px]
                overflow-y-auto
                p-4
                sm:p-6
                space-y-5
                bg-gray-50
                dark:bg-gray-900
              "
            >
              {selectedConversation.messages.map(
                (message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                  />
                )
              )}

              <div ref={bottomRef} />
            </div>

            {/* Message Input */}

            <div
              className="
                p-4
                border-t
                border-gray-200
                dark:border-gray-800
                bg-white
                dark:bg-gray-950
              "
            >
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                "
              >
                <input
                  type="text"
                  value={text}
                  onChange={(e) =>
                    setText(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter"
                    ) {
                      handleSend();
                    }
                  }}
                  placeholder={`Message ${selectedConversation.name}...`}
                  className="
                    flex-1
                    min-w-0
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-900
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-500
                    dark:placeholder:text-gray-400
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-purple-500
                  "
                />

                <Button
                  onClick={handleSend}
                  disabled={!text.trim()}
                >
                  Send
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;