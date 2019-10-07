import React from 'react';
import Butto from "./Styled_components/standbutton";
import Menu from "./MenuVer";
import Fut from "./Fut";
import Box from "./Styled_components/box";
import {Title, Sub} from "./Letras";
import Modal from "./modal";

export default () => (
    <div>
    <Menu/>
    <Fut/>
    <Modal/>
    <Box>
      <Sub>
  Esto es una prueba para ver los atributos
  </Sub>
</Box>

    <Butto aceptar href="https://animeyt2.tv" >Si, soy mayor de 18 años</Butto>
    <Butto cancelar>Soy menor de 18 años</Butto>
    
    </div>);
