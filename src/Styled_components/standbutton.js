import styled, {css} from "styled-components";
export default styled.a`

  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  :hover {
   background: transparent;
   color : white;
   
  }

  ${props => props.cancelar&& css`
    background: red;
    color: white;
    border: 2px solid red;
  `}
  ${props => props.aceptar&& css`
  background: green;
  color: white;
  border: 2px solid green;
`}
  
`;