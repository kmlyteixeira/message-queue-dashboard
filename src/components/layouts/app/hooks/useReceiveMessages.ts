import { receiveMessages } from "@/services/messages/messages-api";
import { useMutation } from "@tanstack/react-query";

const useReceiveMessages = () => {
    const { mutate, isPending, isError } = useMutation({
        mutationFn: receiveMessages
    });

    const receive = async () => {
        await mutate();
    };

    return {
        receive,
        isPending,
        isError
    }
}

export default useReceiveMessages;