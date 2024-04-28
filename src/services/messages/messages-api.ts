import { MessageBodyType } from "@/interfaces/message/MessageBodyType";

export const fetchMessages = async () => {
    const response = await fetch('http://localhost:5000/api/servicebus/messages');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const receiveMessages = async () => {
    const response = await fetch('http://localhost:3001/receive-messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

export const sendMessage = async (message: MessageBodyType) => {
    if (!message) {
        throw new Error('Message is required');
    }

    const response = await fetch('http://localhost:3001/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}