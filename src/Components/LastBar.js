import React from "react";
import { Input, Space, Button } from "antd";
import pr1 from "../Components/img/my1.jpeg";
import pr2 from "../Components/img/my2.jpg";
// import "antd/dist/antd.css";
import {
  MoreOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
  ShareAltOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Search } = Input;

function LastBar() {
  return (
    <div style={{ width: "550px", background: "#F7F9FA" }}>
      <div
        style={{
          height: "50px",
          width: "70%",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          position: "sticky",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Search Twitter"
            style={{
              height: "40px",
              width: "300px",
              borderRadius: "20px",
              backgroundColor: "#F7F9FA",
              outline: "none",
              // marginLeft: "100px",
            }}
          />
          <Button
            style={{
              background: "#08a0e9",
              color: "white",
              border: "none",
              height: "50px",
              width: "100px",
              borderRadius: "20px",

              fontSize: "15px",
              marginTop: "5px",

              // justifyContent: "flex-end",
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div
        style={{
          height: "500px",
          width: "400px",
          background: "white",
          marginTop: "20px",
          margin: "10px",
          borderRadius: "10px",
          boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",

            // margin: "10px",
            marginTop: "10px",

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              {" "}
              TRENDS FOR YOU
            </div>
            <SettingOutlined style={{ color: "#08a0e9" }} />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "12px" }}>
              {" "}
              Trending in Ajegunle
              <div>#Codelab </div>
              <div style={{ color: "#08a0e9" }}>2.15k Tweets</div>
            </div>
            <MoreOutlined />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "12px" }}>
              {" "}
              Trending in Ajegunle
              <div>#Codelab </div>
              <div style={{ color: "#08a0e9" }}>2.15k Tweets</div>
            </div>
            <MoreOutlined />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "12px" }}>
              {" "}
              Trending in Ajegunle
              <div>#Codelab </div>
              <div style={{ color: "#08a0e9" }}>2.15k Tweets</div>
            </div>
            <MoreOutlined />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "12px" }}>
              {" "}
              Trending in Ajegunle
              <div>#Codelab </div>
              <div style={{ color: "#08a0e9" }}>2.15k Tweets</div>
            </div>
            <MoreOutlined />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "12px" }}>
              {" "}
              Trending in Ajegunle
              <div>#Codelab </div>
              <div style={{ color: "#08a0e9" }}>2.15k Tweets</div>
            </div>
            <MoreOutlined />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "12px" }}>
              {" "}
              Trending in Ajegunle
              <div>#Codelab </div>
              <div style={{ color: "#08a0e9" }}>2.15k Tweets</div>
            </div>
            <MoreOutlined />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "12px" }}>
              {" "}
              Trending in Ajegunle
              <div>#Codelab </div>
              <div style={{ color: "#08a0e9" }}>2.15k Tweets</div>
            </div>
            <MoreOutlined />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "12px" }}>
              {" "}
              Trending in Ajegunle
              <div>#Codelab </div>
              <div style={{ color: "#08a0e9" }}>2.15k Tweets</div>
            </div>
            <MoreOutlined />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          height: "400px",
          width: "400px",
          background: "white",
          marginTop: "20px",
          margin: "10px",
          borderRadius: "10px",
          boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",

            // margin: "10px",
            marginTop: "10px",

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              {" "}
              WHO TO FOLLOW
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "70px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  background: "silver",
                  borderRadius: "50px",
                }}
              >
                <img
                  src={pr1}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Malush developer
                <div style={{ fontSize: "10px", fontWeight: "lighter" }}>
                  frontend and backend
                </div>
              </div>
            </div>
            <Button
              style={{
                // background: "#08a0e9",
                backgroundColor: "white",
                color: "#08a0e9",
                border: "none",
                height: "50px",
                width: "100px",
                borderRadius: "10px",
                border: "2px solid #08a0e9",
                fontSize: "15px",
                margin: "10px",

                // justifyContent: "flex-end",
              }}
            >
              Follow
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "70px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  background: "silver",
                  borderRadius: "50px",
                }}
              >
                <img
                  src={pr1}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Malush developer
                <div style={{ fontSize: "10px", fontWeight: "lighter" }}>
                  frontend and backend
                </div>
              </div>
            </div>
            <Button
              style={{
                // background: "#08a0e9",
                backgroundColor: "white",
                color: "#08a0e9",
                border: "none",
                height: "50px",
                width: "100px",
                borderRadius: "10px",
                border: "2px solid #08a0e9",
                fontSize: "15px",
                margin: "10px",

                // justifyContent: "flex-end",
              }}
            >
              Follow
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "70px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  background: "silver",
                  borderRadius: "50px",
                }}
              >
                <img
                  src={pr1}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Malush developer
                <div style={{ fontSize: "10px", fontWeight: "lighter" }}>
                  frontend and backend
                </div>
              </div>
            </div>
            <Button
              style={{
                // background: "#08a0e9",
                backgroundColor: "white",
                color: "#08a0e9",
                border: "none",
                height: "50px",
                width: "100px",
                borderRadius: "10px",
                border: "2px solid #08a0e9",
                fontSize: "15px",
                margin: "10px",

                // justifyContent: "flex-end",
              }}
            >
              Follow
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              borderBottom: "1px solid silver",
              height: "70px",
              alignItems: "center",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  background: "silver",
                  borderRadius: "50px",
                }}
              >
                <img
                  src={pr1}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Malush developer
                <div style={{ fontSize: "10px", fontWeight: "lighter" }}>
                  frontend and backend
                </div>
              </div>
            </div>
            <Button
              style={{
                // background: "#08a0e9",
                backgroundColor: "white",
                color: "#08a0e9",
                border: "none",
                height: "50px",
                width: "100px",
                borderRadius: "10px",
                border: "2px solid #08a0e9",
                fontSize: "15px",
                margin: "10px",

                // justifyContent: "flex-end",
              }}
            >
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastBar;
