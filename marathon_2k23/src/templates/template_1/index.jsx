import React, { useRef, useState } from "react";

// import "./style.js";
import Wrapper from "./style.js";
import { styled } from "styled-components";

const Card = styled.div`
  width: 350px;
  box-shadow: 2px 3px 5px #ccc;
  margin: 10px;
  padding: 40px 20px;
  margin: 10px auto;
  input {
    width: 100%;
    padding: 8px;
    margin: 5px;
    input[type="button"] {
      width: 50px;
      font-size: 30px;
    }
  }
`;

export const Template_1 = () => {
  const [photoUrl, setPhotoUrl] = useState();
  const [name, setName] = useState();
  const [designation, setDesignation] = useState();

  const fileField = useRef();
  const leftPhoto = useRef();

  const upload = (e) => {
    setPhotoUrl(URL.createObjectURL(e.target.files[0]));
    leftPhoto.current.style.backgroundImage = `url(${URL.createObjectURL(
      e.target.files[0]
    )})`;
    fileField.current.classList.remove("placeholder");
  };

  const switchImage = (e) => {
    window.document.querySelector(".main").style.flexDirection =
      e.target.value === "->" ? "row-reverse" : "row";
    e.target.value = e.target.value === "->" ? "<-" : "->";
  };

  return (
    <>
      <Wrapper className="main">
        <div className="left" ref={leftPhoto}>
          {/* <h1>Upload Your Image Here.</h1> */}
          <input
            className="placeholder"
            ref={fileField}
            type="file"
            onChange={upload}
          />
        </div>
        <div className="right">
          <h1>{name}</h1>
          <p>{designation}</p>
        </div>
      </Wrapper>

      <Card>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <input type="button" value="->" onClick={switchImage} />
      </Card>
    </>
  );
};
