import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import Menu from "./MenuVer";
import Background from "./Images/BlackWood.jpg";

var sectionBackground = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
}
export default () => (
    <section style={sectionBackground}>
        <Menu />
        <Grid >
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='https://www.ontotext.com/wp-content/uploads/2016/01/multitudes-of-content-illustration.jpg' bordered />
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
    </section>









);