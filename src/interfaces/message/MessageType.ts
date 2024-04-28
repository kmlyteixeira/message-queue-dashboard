import { MessageBodyType } from "./MessageBodyType";

export type DataIndexMessageType = keyof MessageType;

export interface MessageType {
    id: string;
    enqueuedAt: string;
    state: string;
    bodySize: number;
    message: MessageBodyType;
}

export const attributeDescriptions: Record<DataIndexMessageType, string> = {
    id: 'ID',
    enqueuedAt: 'Enqueued At',
    state: 'State',
    bodySize: 'Body Size',
    message: 'Message'
};