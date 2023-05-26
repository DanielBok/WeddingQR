import { Divider, Layout, theme, Typography } from "antd";
import React from "react";
import QRCustom from "./static/QR-CUSTOM.jpg";

const {Content} = Layout;


function App() {
  const {token: {colorBgContainer}} = theme.useToken();

  return (
    <Layout style={{height: "100vh"}}>
      <Layout style={{padding: "0 24px 24px"}}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Typography.Title level={3} style={{textAlign: "center"}}>
            Thank you for supporting Daniel and Priscilla's family building plans (with a cat of course)
          </Typography.Title>
          <Divider/>
          <div style={{display: "flex", justifyContent: "center", height: "95%"}}>
            <img src={QRCustom} alt="QR Code" style={{minHeight: 400, maxHeight: "80%"}}/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
