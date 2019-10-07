import React from 'react';
import { Button, Grid, Message, Image, GridColumn } from 'semantic-ui-react';
import logo from "./Images/redwoods.png";
import Menu from "./MenuVer";
import BackgroundSlider from 'react-background-slider'
export default () => (

    <div>
        <BackgroundSlider images={[logo]} duration={2} transition={3} />
        <Menu />
        





    </div>




);