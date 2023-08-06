import styled from "styled-components";

const Wrapper = styled.div`
  width: 360px;
  display: flex;
  margin: 40px auto;
  height: 400px;
  border: 2px solid black;
  box-shadow: 2px 2px 5px #ccc;

  .left {
    // background-color: teal;
    flex: 1;
    background-size: cover;
    background-position: center;
    background-image: url(./person_placeholder.png);
    input {
      width: 100%;
      height: 400px;
      position: relative;

      &.placeholder:before {
        content: "Upload Your Image Here.";
        color: rgba(0, 0, 0, 0.2);
        font-size: 2rem;
        /* padding: 10px; */
        width: 100%;
        position: absolute;
        width: 100%;
        // height: 500px;
        white-space: break-spaces;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
      }
    }
  }
  .right {
    // background-color: aquamarine;
    flex: 2;
    position: relative;
    > div {
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: 50px;
      input {
        width: 90%;
        padding: 10px;
        margin: 5px 10px;
        border: none;
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: no-repeat center center/cover url(.assets/right.png);
      //   filter: blur(3px);
    }
  }
`;
export default Wrapper;
