import { MessageBodyType } from "@/interfaces/message/MessageBodyType";
import { sendMessage } from "@/services/messages/messages-api";
import { useMutation } from "@tanstack/react-query";

const useSendMessage = () => {
    const { mutate, isPending, isError } = useMutation({
        mutationFn: sendMessage
    });

    const send = async (message: MessageBodyType) => {
        mutate(message);
    }

    return {
        send,
        isPending,
        isError
    }
}

export default useSendMessage;