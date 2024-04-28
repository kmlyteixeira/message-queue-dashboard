'use client'

import { BarChartOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import styled from "styled-components";
import MainToolbar from "./main-toolbar/MainToolbar";

const { Header } = Layout;

const CustomHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 50px;
  border-radius: 0 0 10px 10px;
  width: 99.5%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding-left: 15px;
  padding-right: 20px;
`;

const CustomContent = styled.div`
    height: 55px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`;

const MainHeader = () => {
    return (
        <CustomContent>
            <CustomHeader>
                <Typography.Title level={4}> <BarChartOutlined /> DASHBOARD </Typography.Title>
                <MainToolbar></MainToolbar>
            </CustomHeader>
        </CustomContent>
    );
};

export default MainHeader;