import React from "react";
import pic from "../Components/img/1.jpg";
import {
  MoreOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
  ShareAltOutlined,
  TwitterOutlined,
  HomeOutlined,
  HomeFilled,
  SignalFilled,
  NumberOutlined,
  NotificationOutlined,
  BellOutlined,
  MailOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

function SideBar() {
  return (
    <div style={{ width: "300px", top: 0, position: "sticky" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "400px",
          // backgroundColor: "red",
          alignItems: "center",
          margin: "10px",
          flexDirection: "column",
          top: 0,
          position: "sticky",
        }}
      >
        <TwitterOutlined style={{ fontSize: "40px", color: "#08a0e9" }} />
        <br />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HomeFilled style={{ fontSize: "25px", color: "#08a0e9" }} />
          <h3 style={{ marginLeft: "20px" }}>Home</h3>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          <NumberOutlined style={{ fontSize: "25px" }} />
          <h3 style={{ marginLeft: "20px" }}>Explore</h3>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BellOutlined style={{ fontSize: "25px" }} />

          <h3 style={{ marginLeft: "20px" }}>Notifications</h3>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "30px",
          }}
        >
          <MailOutlined style={{ fontSize: "25px" }} />
          <h3 style={{ marginLeft: "20px" }}>Messages</h3>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
          }}
        >
          <BookOutlined style={{ fontSize: "25px" }} />
          <h3 style={{ marginLeft: "20px" }}>Bookmarks</h3>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UserOutlined style={{ fontSize: "25px" }} />
          <h3 style={{ marginLeft: "20px" }}>Profile</h3>
        </div>
        <Button
          style={{
            width: "200px",
            height: "40px",
            fontSize: "20px",
            borderRadius: "20px",
            color: "white",
            backgroundColor: "#08a0e9",
            border: "none",
          }}
        >
          Tweet
        </Button>
        <br />
        <br />
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "red",
              borderRadius: "50px",
            }}
          >
            <img
              src={pic}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "50px",
              }}
            />
          </div>
          <div style={{ marginLeft: "10px" }}>Gideon Ekeke</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
