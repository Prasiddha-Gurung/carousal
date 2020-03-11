import styled from "styled-components";

const Wrapper = styled.div`
  height: inherit;
  width: ${props => props.width + "%"};
  position: absolute;
  left: ${props => props.left + "%"};
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
export default Wrapper;
