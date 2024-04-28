import { useCustomNotification } from "@/commons/hooks/notification/useCustomNotification";
import { MessageBodyType } from "@/interfaces/message/MessageBodyType";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React from "react";
import MessageForm from "../form/MessageForm";
import useSendMessage from "./hooks/useSendMessage";



interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const MessageDrawer = ({ open, onClose }: DrawerProps) => {
  const { send, isPending, isError } = useSendMessage();
  const { openNotification, contextHolder } = useCustomNotification();

  const [formData, setFormData] = React.useState<MessageBodyType>({
    title: '',
    imageUrl: '',
    summary: '',
    url: ''
  });

  const handleMessageChange = (newValue: string, field: keyof MessageBodyType) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: newValue
    }));
  };

  const handleSend = async (message: MessageBodyType) => {
    try {
      await send(message);
      onClose();
      openNotification('success');
    } catch {
      onClose();
      openNotification('error');
    }
  }

  return (
    <>
      {contextHolder}
      <Drawer
        title="Send a Message"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        destroyOnClose={true}
        extra={
          <Space>
            <Button type="primary" onClick={() => handleSend(formData)} icon={isPending && <LoadingOutlined />}>Submit</Button>
          </Space>
        }
      >
        <MessageForm onMessageChange={handleMessageChange} />
      </Drawer>
    </>
  );
}

export default MessageDrawer;