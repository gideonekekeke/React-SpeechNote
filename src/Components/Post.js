import React from "react";
import {
  MoreOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
function Post({ profile, avatar, name, text }) {
  return (
    <div
      style={{
        width: "100%",
        // height: "20px",
        borderTop: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
        backgroundColor: "white",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          margin: 10,
          alignItems: "center",
          width: "100%",
          height: "100%",
          // backgroundColor: "black",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={profile}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: "silver",
              objectFit: "cover",
            }}
          />

          <div style={{ marginLeft: 10 }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 15,
                display: "flex",
                // backgroundColor: "red",
                width: "95%",
                justifyContent: "space-between",
              }}
            >
              {name} 2h
              <MoreOutlined
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              />
            </div>

            <div style={{ width: "95%", fontSize: 12, marginTop: 5 }}>
              {text}
            </div>
          </div>
        </div>
        <img
          src={avatar}
          style={{
            height: 300,
            width: 500,
            backgroundColor: "silver",
            marginLeft: 60,
            marginTop: 20,
            borderRadius: 5,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            // flexDirection: "row",
            width: 500,
            // backgroundColor: "red",
            marginLeft: 20,
            marginTop: 7,
            justifyContent: "space-around",
            fontSize: 13,
            display: "flex",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <MessageOutlined style={{ fontSize: 17 }} />
            <div style={{ fontSize: 10, marginLeft: 5 }}>30</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <RetweetOutlined style={{ fontSize: 17 }} />
            <div style={{ fontSize: 10, marginLeft: 5 }}>1.1k</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <HeartOutlined style={{ fontSize: 17 }} />
            <div style={{ fontSize: 10, marginLeft: 5 }}>2.5k</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ShareAltOutlined style={{ fontSize: 17 }} />
            <div style={{ fontSize: 10, marginLeft: 5 }}>510</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
