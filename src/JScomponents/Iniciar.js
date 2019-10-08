import React from 'react';
import { Image, Grid, Segment } from 'semantic-ui-react';
import logo from "../Images/BlackWood.jpg";
import log from "../Images/Trifenix.png";
import Images from "../Images/Uv.jpg"
import Menu from "./MenuVer";
import { Title, Blocktext } from "../Styled_components/Letras";



var sectionBackground = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${logo})`

}
export default () => (

    <section style={sectionBackground}>
        <Menu />
        <Grid centered>
            <Grid.Row></Grid.Row>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="teal" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment inverted color="teal">
                                    <Image src={Images} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Title morado>
                                    Pagina De Inicio
                                </Title>
                                <Blocktext negro>
                                    En esta pagina se presentara información acerca de algunos servicios de
                                    Microsoft Azure con una breve descripción de estas.
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>

        <Grid centered >
            <Grid.Column width={15}>
                <Segment inverted tertiary color="teal">

                </Segment>
            </Grid.Column>
        </Grid>
        <Grid centered>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="teal" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment inverted color="teal">
                                    <Image src={log} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Blocktext negro >
                                    <br></br>
                                    Esta pagina fue desarrollada basada en componentes react, la cual es una librería de
                                    javascript para el desarrollo de interfaces para usuarios, han sido utilizados diversos
                                    módulos react, para más información sobre React <a target="_blank" href="https://reactjs.org">pulse aquí.</a>
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
        <Grid centered >
            <Grid.Column width={15}>
                <Segment inverted tertiary color="teal">

                </Segment>
            </Grid.Column>
        </Grid>

    </section>
);