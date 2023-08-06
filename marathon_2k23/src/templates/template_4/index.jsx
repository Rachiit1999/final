import React, { useRef, useState } from "react";
import Wrapper from "./style";
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

export const Template_4 = () => {
  const [photoUrl, setPhotoUrl] = useState();
  const [name, setName] = useState();
  const [designation, setDesignation] = useState();

  const fileFeild = useRef();
  const bottomPhoto = useRef();

  const upload = (e) => {
    setPhotoUrl(URL.createObjectURL(e.target.files[0]));
    bottomPhoto.current.style.backgroundImage = `url(${URL.createObjectURL(
      e.target.files[0]
    )})`;
    fileFeild.current.classList.remove("placeholder");
  };

  return (
    <>
      <Wrapper>
        <div className="top">
          <div>
            <h1>{name}</h1>
            <p>{designation}</p>
          </div>
        </div>
        <div className="bottom" ref={bottomPhoto}>
          <input
            type="file"
            className="placeholder"
            onChange={upload}
            ref={fileFeild}
          />
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
      </Card>
    </>
  );
};
