import { MessageType } from "@/interfaces/message/MessageType";
import { fetchMessages } from "@/services/messages/messages-api";
import { BellOutlined, LoadingOutlined, RedoOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Badge, Button, Popover } from "antd";
import React from "react";

interface NotificationPopoverProps {
  newMessagesCount: number;
  resetNewMessagesCount: () => void;
}

const NotificationPopover = ({ newMessagesCount, resetNewMessagesCount }: NotificationPopoverProps) => {
  const { refetch } = useQuery<MessageType[]>({
    queryKey: ['api/servicebus/messages'],
    queryFn: fetchMessages,
});

  const [open, setOpen] = React.useState(false);
  const [refreshIsLoading, setRefreshIsLoading] = React.useState<boolean>(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleRefresh = () => {
    setRefreshIsLoading(true);
    refetch().then(() => {
      setRefreshIsLoading(false);
      setOpen(false);
      resetNewMessagesCount();
    });
  };

  const renderRefreshIcon = refreshIsLoading ? <LoadingOutlined /> : <RedoOutlined />;

  const renderContent = () => {
    
    if (newMessagesCount)
      return (
        <div>
          <p>You have {newMessagesCount} new messages!</p>
          <Button type="default" style={{ marginTop: '10px' }} icon={renderRefreshIcon} onClick={handleRefresh}>
            Refresh
          </Button>
        </div>
      );
    else 
      return (
        <div>
          <p>No new messages!</p>
        </div>
      );
  }

  return (
    <Popover
      content={ renderContent() }
      title="Notifications"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Badge count={newMessagesCount} size="small" color="var(--color-blue)">
        <Button
          type="text"
          icon={<BellOutlined />}
        />
      </Badge>
    </Popover>
  );
}

export default NotificationPopover;