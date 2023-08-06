import styled from "styled-components";

const Wrapper = styled.div`
  width: 360px;
  display: flex;
  margin: 40px auto;
  height: 400px;
  border: 2px solid black;
  box-shadow: 2px 2px 5px #ccc;
  flex-direction: column;
  .top {
    // background-color: aquamarine;
    flex: 1;
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
      background: no-repeat center center/cover url(".assets/temp_2.png");
      //   filter: blur(3px);
    }
  }

  .bottom {
    flex: 2;
    background: url(.assets/person_placeholder.png);
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
  .input-fields {
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
  }
`;
export default Wrapper;
