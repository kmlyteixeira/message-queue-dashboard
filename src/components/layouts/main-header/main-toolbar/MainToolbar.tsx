import { fetchMessages } from "@/services/messages/messages-api";
import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Dropdown, Space, Typography } from "antd";
import { MessageType } from "antd/es/message/interface";
import React from "react";
import styled from "styled-components";
import NotificationPopover from "../notification-popover/NotificationPopover";

const Toolbar = styled(Space)`
    float: right;
    column-gap: 1rem;
    align-items: center;
`;

const items = [
  { key: '1', label: 'Meu Perfil', onClick: () => console.log('Meu Perfil') },
  { key: '2', label: 'Sair', onClick: () => console.log('Sair') }
];

const MainToolbar = () => {
  const { data, refetch } = useQuery<MessageType[]>({
    queryKey: ['count/messages'],
    queryFn: fetchMessages,
  });

  const [newMessagesCount, setNewMessagesCount] = React.useState(0);
  const [initialMessageCount, setInitialMessageCount] = React.useState<number | undefined>(undefined);

  const handleResetNewMessagesCount = () => {
    setInitialMessageCount(data?.length);
    setNewMessagesCount(0);
  }

  React.useEffect(() => {
    if (data && initialMessageCount === undefined) {
      setInitialMessageCount(data.length);
    }

    if (data && initialMessageCount !== undefined) {
      const currentMessageCount = data.length;
      if (currentMessageCount > initialMessageCount) {
        setNewMessagesCount(currentMessageCount - initialMessageCount);
      } else {
        setNewMessagesCount(0);
      }
    }

  }, [data, initialMessageCount]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <Toolbar>
      <Button
        type="text"
        icon={<QuestionCircleOutlined />}
      />
      <NotificationPopover newMessagesCount={newMessagesCount} resetNewMessagesCount={handleResetNewMessagesCount}/>
      <Dropdown menu={{ items }} placement="bottom">
        <Space style={{ alignItems: "flex-start" }}>
          <Avatar style={{ backgroundColor: 'var(--color-blue)' }} icon={<UserOutlined />} size="small" />
          <Typography.Text>User</Typography.Text>
        </Space>
      </Dropdown>
    </Toolbar>
  );
}

export default MainToolbar;