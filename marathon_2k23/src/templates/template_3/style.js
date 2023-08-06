import styled from "styled-components";

const Wrapper = styled.div`
  width: 320px;
  display: flex;
  margin: 40px auto;
  height: 550px;
  border: 2px solid black;
  box-shadow: 2px 2px 5px #ccc;
  flex-direction: column;
  .top {
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
      background: no-repeat center center/cover url("./temp_2.png");
      //   filter: blur(3px);
    }
  }

  .name {
    height: 5rem;
    text-align: center;
    background-color: #800000;
    color: #fff;
    padding: 8px 10px;
    box-sizing: border-box;
    font-size: 20px;
  }

  .bottom {
    flex: 2;
    background: url(./person_placeholder.png);
    // display: inline;
    background-position: top;
    background-size: cover;
    height: 100px;
    input {
      width: 100%;
      height: 230px;
      position: relative;

      &.placeholder:before {
        content: "Upload Your Image Here.";
        color: rgba(0, 0, 0, 0.2);
        font-size: 2rem;
        padding: 10px;
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
`;

export default Wrapper;
