import styled from "styled-components";

export default styled.div`
  height: ${props => (props.carHeight ? props.carHeight : "70vh")};
  width: ${props => (props.carWidth ? props.carWidth : "90vw")};
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
