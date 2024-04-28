import { MessageBodyType } from '@/interfaces/message/MessageBodyType';
import { ExportOutlined } from '@ant-design/icons';
import { Image, Modal, Tag } from 'antd';
import Link from 'antd/es/typography/Link';
import Paragraph from 'antd/es/typography/Paragraph';
import styled from 'styled-components';

const CustomModal = styled(Modal)`
  display: flex;
  flexDirection: column;
`;

interface MessageCardProps {
  message: MessageBodyType | null;
  visible: boolean;
  onClose: () => void;
}

const MessageCard = ({ message, visible, onClose }: MessageCardProps) => {
  return (
    <CustomModal
      title={message?.title}
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Paragraph>{message?.summary}</Paragraph>
      {message?.imageUrl ? <Image src={message?.imageUrl} alt='image_url' preview={false}></Image> : null}
      {message?.url ?
        <Tag color="geekblue" style={{ marginTop: '10px' }}>
          <Link href={message?.url} target="_blank">
            <ExportOutlined style={{ paddingRight: '10px' }} />
            See full article
          </Link>
        </Tag> : null
      }

    </CustomModal>
  );
};

export default MessageCard;