import React from 'react';
import Butto from "./Styled_components/standbutton";
import Menu from "./MenuVer";
import Fut from "./Fut";
import Box from "./Styled_components/box";
import {Title, Sub} from "./Letras";
import Modal from "./modal";
const menuItems = [
  { id: 1,
    label: 'Item 1',
    icon: 'fas fa-battery-half',
    items: [
      { id: 11,
        label: 'Item 1.1',
        icon: 'fas fa-car',
        link: '/item11',
      },
      { id: 12,
        label: 'Item 1.2',
        icon: 'fas fa-bullhorn',
        link: '/item12',
      },
    ],
  },
];
const NavLink = props => (<a href={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</a>);

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
