import React from 'react';
import { Button, Grid, Message, Image, GridColumn } from 'semantic-ui-react';
import logo from "./Images/BlackWood.jpg";
import Menu from "./MenuVer";

var sectionBackground = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${logo})`

}

export default () => (

    <section style={sectionBackground}>
        
        <Menu />
        <Grid   >
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
                    
                </Grid.Column>
            </Grid.Row>
        </Grid>



        </section>









);