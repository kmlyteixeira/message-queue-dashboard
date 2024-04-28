'use client'

import MessageChart from "@/components/chart/MessageChart";
import MessageGrid from "@/components/grid/MessageGrid";
import AppPage from "@/components/layouts/app/AppPage";
import { MessageType } from "@/interfaces/message/MessageType";
import { fetchMessages } from "@/services/messages/messages-api";
import { useQuery } from "@tanstack/react-query";
import { Divider } from "antd";
import { Content } from "antd/es/layout/layout";

import styled from "styled-components";

export interface MainProps {
  data: MessageType[] | undefined;
}

const CustomContent = styled(Content)`
    background-color: var(--color-secondary);
    margin: 0 10px 10px 10px;
    border-radius: 10px;
    max-height: 92%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    z-index: 0;
`;

const App = () => {
  const { data } = useQuery<MessageType[]>({
    queryKey: ['api/servicebus/messages'],
    queryFn: fetchMessages,
  });

  return (
    <AppPage>
      <CustomContent>
        <MessageChart data={data}></MessageChart>
        <Divider></Divider>
        <MessageGrid data={data}></MessageGrid>
      </CustomContent>
    </AppPage>
  );
}

export default App;