import React, { useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

const RenderScreen = () => {
  const [text, setText] = useState("");
  const [note, setNote] = useState([
    {
      id: 1,
      title: "first title",
      msg: "this is a message am writing",
    },
    {
      id: 2,
      title: "second title",
      msg: "now am writing a second messgae",
    },
  ]);
  return (
    <>
      {note.map(({ id, title, msg }) => (
        <Container>
          <ContainerTitle>
            {msg.split(" ")[0] + "" + msg.slice(" ")[1]}
          </ContainerTitle>
          <ContainerDescription>Content goes here</ContainerDescription>
          <DeleteIcon style={{ marginTop: "170px", color: "red" }} />
        </Container>
      ))}
    </>
  );
};

export default RenderScreen;
const ContainerDescription = styled.div``;

const ContainerTitle = styled.div`
  border-bottom: 1px solid silver;
  width: 100%;
  margin: 10px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 270px;
  width: 220px;
  background-color: #25262a;
  margin-top: 200px;
  border-radius: 5px;
  display: flex;
  color: white;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;
