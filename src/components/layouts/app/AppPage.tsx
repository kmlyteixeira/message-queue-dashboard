'use client';

import { useCustomNotification } from '@/commons/hooks/notification/useCustomNotification';
import MessageDrawer from '@/components/drawer/MessageDrawer';
import { Layout } from 'antd';
import React, { ReactNode } from 'react';
import MainLayout, { LayoutMainPanel } from '../MainLayout';
import MainHeader from '../main-header/MainHeader';
import MainSidebar from '../main-sidebar/MainSidebar';
import useReceiveMessages from './hooks/useReceiveMessages';

export type AppPageProps = {
  children: ReactNode;
};

export default function AppPage({ children }: AppPageProps) {
  const { openNotification, contextHolder } = useCustomNotification();
  const [showDrawer, setShowDrawer] = React.useState(false);
  const { receive, isPending, isError } = useReceiveMessages();

  const handleReceive = () => {
    try {
      receive().then(() => openNotification('success'));
    } catch (error) {
      openNotification('error');
    }
  }

  return (
    <MainLayout>
        <MainHeader></MainHeader>
        <Layout>
            {contextHolder}
            <MainSidebar onOpenDrawer={() => setShowDrawer(true)} onReceive={handleReceive} receiveIsLoading={isPending}></MainSidebar>
            <LayoutMainPanel>{children}</LayoutMainPanel>
            <MessageDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />
        </Layout>

    </MainLayout>
  );
}
