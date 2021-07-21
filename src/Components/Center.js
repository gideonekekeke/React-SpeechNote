import React from "react";
import pic from "../Components/img/1.jpg";
import pic1 from "../Components/img/2.jpg";
import pic2 from "../Components/img/3.jpg";
import pic3 from "../Components/img/4.jpg";
import pic4 from "../Components/img/5.jpg";
import pr1 from "../Components/img/my1.jpeg";
import pr2 from "../Components/img/my2.jpg";
import pr3 from "../Components/img/f3.png";
import pic5 from "../Components/img/6.jpg";
import pic6 from "../Components/img/f4.png";
import pic7 from "../Components/img/f5.png";
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
  StarOutlined,
  GlobalOutlined,
  FileImageOutlined,
  FileGifOutlined,
  AudioMutedOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Post from "./Post";
import NewPost from "./NewPost";
function Center({ avatar, profile, name, text, name1, cover, text1 }) {
  return (
    <div
      style={{
        // height: "100vh",
        width: "600px",
        background: "#F7F9FA",
        border: "1px solid lightgray",
        marginLeft: "30px",
      }}
    >
      <div
        style={{
          top: 0,
          position: "sticky",
          height: "50px",
          width: "100%",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid lightgray",
        }}
      >
        <div
          style={{
            width: "95%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>Home</div>
          <StarOutlined style={{ color: "#08a0e9" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "200px",
          width: "100%",
          background: "white",
          // boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
          borderBottom: "1px solid lightgray",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "white",
              borderRadius: "50px",
              margin: "10px",
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
          <input
            placeholder="What's happening?"
            style={{
              margin: "10px",
              width: "50%",
              outline: "none",
              border: "none",
              height: "50px",
              fontSize: "20px",
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "75px" }}
        >
          {" "}
          <GlobalOutlined style={{ color: "#08a0e9" }} />
          <div style={{ color: "#08a0e9", marginLeft: "10px" }}>
            Everyone can reply
          </div>
        </div>
        <br />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "75px",
            borderTop: "1px solid silver",
            // backgroundColor: "red",
          }}
        >
          <FileImageOutlined
            style={{ fontSize: "20px", margin: "10px", color: "#08a0e9" }}
          />
          <FileGifOutlined
            style={{ fontSize: "20px", margin: "10px", color: "#08a0e9" }}
          />
          <AudioMutedOutlined
            style={{ fontSize: "20px", margin: "10px", color: "#08a0e9" }}
          />
          <SmileOutlined
            style={{ fontSize: "20px", margin: "10px", color: "#08a0e9" }}
          />
          <Button
            style={{
              background: "#08a0e9",
              color: "white",
              border: "none",
              height: "50px",
              width: "100px",
              borderRadius: "10px",
              marginLeft: "200px",
              fontSize: "15px",
              marginTop: "5px",

              // justifyContent: "flex-end",
            }}
          >
            Tweet
          </Button>
        </div>
      </div>
      <Post
        profile={pic1}
        avatar={pr2}
        name="osazie @osazie"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,"
      />
      <Post
        profile={pic4}
        avatar={pr3}
        name="Gbadamosi @osazie.com"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,"
      />
      <NewPost
        name1="Mrs Bukola"
        cover={pic2}
        text1="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,"
      />
      <NewPost
        name1="Mr Ubani"
        cover={pic5}
        text1="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,"
      />
      <Post
        profile={pic6}
        avatar={pic7}
        name="Gbadamosi @osazie.com"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,"
      />
    </div>
  );
}

export default Center;
