import api from "./api";

export interface ApiUser {
  id: string;
  name: string;
  username: string;
  avatar: string | null;
}

export interface ApiConversation {
  id: string;

  participants: Array<{
    userId: string;
    conversationId: string;

    user: ApiUser;
  }>;

  messages: Array<{
    id: string;
    text: string;
    createdAt: string;
    senderId: string;
    conversationId: string;
  }>;
}

export interface ApiMessage {
  id: string;

  text: string;

  createdAt: string;

  senderId: string;

  conversationId: string;

  sender: ApiUser;
}

interface ConversationsResponse {
  status: string;
  data: ApiConversation[];
}

interface MessagesResponse {
  status: string;
  data: ApiMessage[];
}

interface MessageResponse {
  status: string;
  data: ApiMessage;
}

export const getConversations = async () => {
  const response =
    await api.get<ConversationsResponse>(
      "/messages/conversations",
    );

  return response.data.data;
};

export const createConversation = async (
  userId: string,
) => {
  const response =
    await api.post<{
      status: string;
      data: ApiConversation;
    }>(
      "/messages/conversations",
      {
        userId,
      },
    );

  return response.data.data;
};

export const getMessages = async (
  conversationId: string,
) => {
  const response =
    await api.get<MessagesResponse>(
      `/messages/conversations/${conversationId}`,
    );

  return response.data.data;
};

export const sendMessage = async (
  conversationId: string,
  text: string,
) => {
  const response =
    await api.post<MessageResponse>(
      "/messages",
      {
        conversationId,
        text,
      },
    );

  return response.data.data;
};