import styled from "styled-components";

export default styled.button`
  height: ${props => (props.height ? props.height : "100%")};
  width: ${props => (props.width ? props.width : "50vw")};
  transform: translateX(
    ${props =>
      props.buttonInside
        ? props.transformDistance
          ? props.transformDistance
          : "100"
        : null}
  );
  background: rgba(255, 255, 255, 0.1);
  visibility: ${props => (props.isActive ? "visible" : "hidden")};
  border: 0;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
`;
