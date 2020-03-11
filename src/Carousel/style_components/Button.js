import styled from "styled-components";

export default styled.button`
height: ${props => props.height}?${props => props.height}:100%;
width: ${props => props.width}?${props => props.width}:50vw;
transform: ${props => props.buttonInside} ? (${props =>
  props.transformDistance}? translateX(${props =>
  props.transformDistance}):100%): null;
background: rgba(255, 255, 255, 0.1);
visibility: ${props => props.isActive} ? visible : hidden;
disabled: ${props => props.isActive} ? true:false;
`;
