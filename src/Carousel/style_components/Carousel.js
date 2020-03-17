import styled from "styled-components";

export default styled.div`
  height: ${props => (props.height ? props.height : "65vh")};
  width: ${props => (props.width ? props.width : "90vw")};
  margin: auto;
  display: flex;
  flex-direction: row;
  margin: 5%;
  @media only screen and (max-width: 768px) {
    height: ${props => (props.isResponsive ? "40vh" : null)};
  }
  @media only screen and (min-height: 900px) {
    height: ${props => (props.isResponsive ? "600px" : null)};
  }
`;
