import styled, {css} from "styled-components"

const Title = styled.h1`
  font-family: Courier New;
  font-size: 5em;
  text-align: left;
  color: #ff3333;
  text-shadow: 3px 2px black;

  ${props => props.subrayar&& css`
  text-decoration: underline;
`}
`;
const Sub = styled.h2`
font-family: Arial;
font-size: 3em;
text-align: left;
color: blue;
`;
const Blocktext = styled.h4`
font-family: Verdana,sans-serif;
font-size: 15px;
line-height: 1.5;
`;
export {Sub,Title,Blocktext}
