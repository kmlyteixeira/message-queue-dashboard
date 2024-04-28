'use client'

import { HomeFilled, ImportOutlined, LoadingOutlined, PlusSquareOutlined, SendOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { styled } from "styled-components";

interface MainSidebarProps {
    onOpenDrawer: () => void;
    receiveIsLoading: boolean;
    onReceive: () => void;
}

const CustomSider = styled(Sider)`
    height: '92vh';
    background: var(--color-primary);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    z-index: 1;
`;

const CustomContent = styled.div`
    background-color: var(--color-primary);
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    width: 55px;
    z-index: 1;
`;

const MainSidebar = ({ onOpenDrawer, receiveIsLoading, onReceive }: MainSidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(true);

    const renderReceiveIcon = () => {
        if (receiveIsLoading) {
          return <LoadingOutlined />;
        } else {
          return <ImportOutlined />;
        }
      };

    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        onClick?: (e: React.MouseEvent) => void
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            onClick
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Home', '1', <HomeFilled />),
        getItem('Messages', 'sub1', <PlusSquareOutlined />, [
            getItem('Send', '4', <SendOutlined />, undefined, onOpenDrawer),
            getItem('Receive', '5', renderReceiveIcon(), undefined, onReceive)
        ])
    ];

    return (
        <CustomContent>
            <CustomSider
                trigger={null}
                collapsible
                collapsed={collapsed}
                onMouseEnter={() => setCollapsed(false)}
                onMouseLeave={() => setCollapsed(true)}
                theme="light"
                collapsedWidth="50px"
                style={{ borderRadius: '0 10px 10px 0', height: '92vh' }}>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{ height: '92vh', borderRadius: '0 10px 10px 0' }}
                />
            </CustomSider>
        </CustomContent>
    );
};

export default MainSidebar;