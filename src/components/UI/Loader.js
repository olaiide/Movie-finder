import { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const CircleAnimation = keyframes`
  to{
        transform: rotate(360deg);
    }
`;
const Spin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0b0b0f;
  height: 100%;
  width: 100%;
`;
const Spinner = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid red;
  border-radius: 50%;
  border-top: 1px solid rgba(255, 127, 80, 0.507);
  animation-name: ${CircleAnimation};
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin: auto;
  margin-top: 250px;
`;

const Loader = () => {
  return (
    <Fragment>
      <Spin>
        <Spinner></Spinner>
      </Spin>
    </Fragment>
  );
};

export default Loader;
