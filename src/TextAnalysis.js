import React from 'react';
import { Button, Grid, Message, Image, GridColumn } from 'semantic-ui-react';
import logo from "./Images/redwoods.png";
import Menu from "./MenuVer";
import BackgroundSlider from 'react-background-slider'


export default () => (

    <div>
        <BackgroundSlider images={[logo]} duration={2} transition={3} />
        <Menu />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='https://www.ontotext.com/wp-content/uploads/2016/01/multitudes-of-content-illustration.jpg' />
                </Grid.Column>
                <Grid.Column width={13}>
                    Informacion sobre la pagina
      </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='https://www.questionpro.com/userimages/site_media/text-analysis.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                    Holita
      </Grid.Column>
                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
            </Grid.Row>
        </Grid>



    </div>









);