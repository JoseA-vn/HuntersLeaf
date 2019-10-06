import React from 'react';
import Butto from "./standbutton";
import Menu from "./Menu";
import Fut from "./Fut";
import Box from "./box";


export default () => (
    <div>
    <Menu/>
    <Fut/>
    <Box
  fontSize={3}
  fontWeight='bold'
  p={3}
  mb={[ 4, 5 ]}
  color='black'
  bg='red'>
  Hello
</Box>

    <Butto aceptar href="https://animeyt2.tv" >Si, soy mayor de 18 años</Butto>
    <Butto cancelar>Soy menor de 18 años</Butto>
    
    </div>);
