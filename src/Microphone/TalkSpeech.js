import React, { useState } from "react";
import styled from "styled-components";
import MicIcon from "@material-ui/icons/Mic";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicOffIcon from "@material-ui/icons/MicOff";

const TalkSpeech = () => {
  const [text, setText] = useState("");
  const [note, setNote] = useState([]);
  const addNote = () => {
    const SavingText = {
      id: note.length + 1,
      // msg: text,
      msg: transcript,
    };
    setNote([...note, SavingText]);
  };

  const deleteNote = (id) => {
    const res = note.filter((el) => el.id !== id);
    setNote(res);
  };

  useEffect(() => {
    addNote();
  }, []);

  useEffect(() => {
    const allNote = JSON.parse(localStorage.getItem("note"));

    setNote(allNote);
  }, []);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  const commands = [
    {
      command: "destroy",
      callback: () => {
        handleReset();
      },
    },
    {
      command: "save notes",
      callback: () => {
        addNote();
      },
    },
    {
      command: "change background colour to *",
      callback: (bgr) => {
        document.body.style.background = bgr;
      },
    },
    {
      command: "change font colour to *",
      callback: (bgr) => {
        document.body.style.color = bgr;
      },
    },
    {
      command: "go to *",
      callback: (site) => {
        window.open(`http://${site}`);
      },
    },
  ];

  const handleReset = () => {
    resetTranscript();
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  return (
    <>
      <Container>
        <ContentBox>
          <TalkText>{transcript}</TalkText>
          <BothHolder>
            <Saving>
              <SaveIcon onClick={addNote} />
            </Saving>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Enter content..."
            />
            {/* <MicIcon
              style={{ cursor: "pointer" }}
              onClick={SpeechRecognition.startListening({ continuous: true })}
            /> */}

            {listening ? (
              <MicIcon
                style={{ cursor: "pointer" }}
                onClick={SpeechRecognition.stopListening}
              />
            ) : (
              <MicOffIcon
                style={{ color: "red", cursor: "pointer" }}
                onClick={SpeechRecognition.startListening({ continuous: true })}
              />
            )}
          </BothHolder>
        </ContentBox>
        {note.map(({ id, title, msg }) => (
          <Containing>
            <ContainerTitle>{msg.split(" ")[0]}</ContainerTitle>
            <ContainerDescription>{msg}</ContainerDescription>
            <DeleteIcon
              onClick={() => {
                deleteNote(id);
              }}
              style={{ marginTop: "170px", color: "red", cursor: "pointer" }}
            />
          </Containing>
        ))}
      </Container>
    </>
  );
};

export default TalkSpeech;
const Saving = styled.div``;
const BothHolder = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  width: 270px;
`;
const TalkText = styled.div`
  margin: 10px;
  font-size: 15px;
  width: 270px;
`;

const Mic = styled.img`
  height: 30px;
  width: 30px;
  background: red;
`;

const ContentBox = styled.div`
  /* height: 200px; */
  width: 300px;
  background-color: #25262a;
  margin-top: 30px;
  border-radius: 5px;
  display: flex;
  color: white;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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

const Containing = styled.div`
  /* height: 270px; */
  width: 220px;
  background-color: #25262a;
  margin-top: 50px;
  border-radius: 5px;
  display: flex;
  color: white;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;
