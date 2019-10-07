import React from 'react';
import { Button, Icon, Grid, Message, GridColumn } from 'semantic-ui-react';

import BackgroundSlider from 'react-background-slider'
import image1 from "./Images/redwoods.png"
import Menu from "./MenuVer";
export default () => (

    <div>
        <BackgroundSlider images={[image1]} duration={2} transition={3} />
        <Menu />
        <Grid columns={3}>
            <GridColumn>
                <Message>
                    hola
            </Message>
            </GridColumn>
            <GridColumn>
                <Message>
                    hola
            </Message>
            </GridColumn>
            <GridColumn>
                <Message>
                    hola
            </Message>
            </GridColumn>
        </Grid>
    </div>
);