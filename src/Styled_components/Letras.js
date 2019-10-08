import styled, { css } from "styled-components"

const Title = styled.h1`
  font-family: Courier New;
  text-decoration: underline;
  font-size: 3em;
  text-align: left;
  color: #6da4fc;
  text-shadow: 3px 2px black;

  ${props => props.morado && css`
  text-decoration: underline;
  color : #ff4dff;
`}
${props => props.verde && css`
text-decoration: underline;
color : #66ffb3;
`}


`;
const Sub = styled.h2`
font-family: Arial;
font-size: 2em;
text-align: left;
color: blue;
`;
const Blocktext = styled.h3`
font-family: Verdana,sans-serif;
text-align: justify;
font-size: 20px;
line-height: 1.5;
color: #26b54c;
${props => props.blanco && css`
  color: whitesmoke;
`}
${props => props.naranja && css`
  color: #ffd280;
`}
`;
export { Sub, Title, Blocktext }
