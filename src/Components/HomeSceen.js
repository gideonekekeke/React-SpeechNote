import React from "react";
import Center from "./Center";
import LastBar from "./LastBar";
import SideBar from "./SideBar";

function HomeSceen() {
  return (
    <>
      <div
        style={{
          display: "flex",
          // backgroundColor: "red",
          width: "100%",
          justifyContent: "space-between",
          top: 0,
          position: "sticky",
        }}
      >
        <div style={{ top: 0, position: "sticky" }}>
          <SideBar style={{ top: 0, position: "sticky" }} />
        </div>
        <Center />
        <LastBar />
      </div>
    </>
  );
}

export default HomeSceen;
