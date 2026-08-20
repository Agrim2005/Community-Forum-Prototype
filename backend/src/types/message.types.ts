export interface SendMessageRequest {
  conversationId: string;
  text: string;
}
export interface CreateConversationRequest {
  userId: string;
}