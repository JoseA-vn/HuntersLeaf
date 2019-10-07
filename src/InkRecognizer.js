import React from 'react';
import { Image, Icon, Grid, Message, GridColumn, Segment } from 'semantic-ui-react';
import logo from "./Images/BlackWood.jpg";
import log from "./Images/Ink_Recognizer.jpeg";
import Menu from "./MenuVer";
import { Title, Sub } from "./Styled_components/Letras";
var sectionBackground = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${logo})`

}
export default () => (

    <section style={sectionBackground}>
        <Menu />
        <Grid centered>
            <Grid.Column width={15}>
                <Segment  inverted tertiary color = "olive" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment inverted color = "olive">
                                <Image src={log} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Sub>
                                    Informacion sobre la pagina
                </Sub>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Title>
                                    Holita
                </Title>
                            </Grid.Column>
                            <Grid.Column width={6}>
                            <Segment inverted color = "olive">
                                <Image src='https://i.imgur.com/f3nK7gh.png' />
                            </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </section>
);