import type { MenuProps } from "antd";
import { Divider, Layout, Menu, theme, Typography } from "antd";
import React, { useState } from "react";
import QRCustom from "./static/QR-CUSTOM.jpg";
import QR238 from "./static/QR238.jpg";
import QR488 from "./static/QR488.jpg";
import QR728 from "./static/QR728.jpg";

const {Header, Content, Sider} = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const IMAGES = {
  "Custom": {image: QRCustom, desc: "Custom"},
  "1 pax": {image: QR238, desc: "$238"},
  "2 pax": {image: QR488, desc: "$488"},
  "3 pax": {image: QR728, desc: "$728"},
};

function getMenuItem(label: string, key: React.Key): MenuItem {
  return {
    key,
    label,
  };
}

function App() {
  const {token: {colorBgContainer}} = theme.useToken();
  const [imageKey, setImageKey] = useState<keyof typeof IMAGES>("1 pax");
  const info = IMAGES[imageKey];

  return (
    <Layout>
      <Header style={{display: "flex", alignItems: "center", justifyItems: "center"}}>
        <Typography.Title
          level={3}
          style={{color: "white", textAlign: "center"}}
        >Thank you for supporting Daniel and Priscilla's honeymoon plans!</Typography.Title>
      </Header>
      <Layout>
        <Sider width={200} style={{background: colorBgContainer}}>
          <Menu
            defaultOpenKeys={["0"]}
            items={[{
              key: "0",
              label: "Select Num Pax",
              children: Object.keys(IMAGES).map(key => getMenuItem(key, key)),
              type: "group",
            }]}
            mode="inline"
            onSelect={(({key}) => setImageKey(key as keyof typeof IMAGES))}
          />
        </Sider>
        <Layout style={{padding: "0 24px 24px"}}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Typography.Title level={3} style={{textAlign: "center"}}>{info.desc}</Typography.Title>
            <Divider/>
            <img src={info.image}/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
