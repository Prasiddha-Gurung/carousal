import styled from "styled-components";

export default styled.button`
  border: 0;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: rgba(0, 0, 0, 0.3);
  margin: 3px;
  cursor: pointer;
  button:focus {
    outline: 0;
  }
  visibility: ${props => (props.visibility ? "visible" : "hidden")};
`;
