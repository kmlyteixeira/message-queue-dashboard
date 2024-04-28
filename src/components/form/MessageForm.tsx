import { MessageBodyType } from "@/interfaces/message/MessageBodyType";
import { Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

interface FormProps {
    onMessageChange: (newValue: string, field: keyof MessageBodyType) => void;
}

interface ItemProps {
    label: string;
    field: keyof MessageBodyType;
    required?: boolean;
}

const MessageForm = ({ onMessageChange }: FormProps) => {

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>, field: keyof MessageBodyType) => {
        const newValue = event.target.value;
        onMessageChange(newValue, field); 
      };

    const formItems: ItemProps[] = [
        { label: 'Title', field: 'title', required: true },
        { label: 'Summary', field: 'summary', required: true },
        { label: 'Image URL', field: 'imageUrl', required: false },
        { label: 'URL', field: 'url', required: false }
    ];

    return (
        <Form>
            {formItems.map((item) => (
                <FormItem
                    key={item.field}
                    label={item.label}
                    name={item.field}
                    rules={[{ required: item.required, message: `Please input ${item.label}!` }]}
                >
                    <TextArea onChange={(e) => handleMessageChange(e, item.field)} />
                </FormItem>
            ))}
        </Form>
    );
}

export default MessageForm;
