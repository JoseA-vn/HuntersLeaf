import React from 'react';
import { Image, Grid, Segment } from 'semantic-ui-react';
import logo from "../Images/BlackWood.jpg";
import log from "../Images/Ink_Recognizer.jpeg";
import Images from "../Images/Ink_recognizer2.jpeg"
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
                <Segment inverted tertiary color="olive" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={7}>
                                <Segment inverted color="olive">
                                    <Image src={log} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Title morado>
                                    Ink Recognizer
                                </Title>
                                <Blocktext >
                                    Ink Recognizer es un servicio el cual utiliza la inteligencia artificial
                                    para reconocer patrones realizados por un lápiz digital, estos sean
                                    escritura manual, objetos, formas, diseños, etc
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>

        <Grid centered >
            <Grid.Column width={15}>
                <Segment inverted tertiary color="olive">

                </Segment>
            </Grid.Column>
        </Grid>
        <Grid centered>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="olive" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={7}>
                                <Segment inverted color="olive">
                                    <Image src={Images} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Blocktext >
                                    Ink Recognizer cobra USD $2 cada 1000 transacciones
                                    las transacciones son equivalentes a 1 bloque de 200 trazos del lapiz
                                    para más información <a href="https://azure.microsoft.com/es-es/services/cognitive-services/ink-recognizer/" target="_blank"> pulse aquí</a>
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
        <Grid centered >
            <Grid.Column width={15}>
                <Segment inverted tertiary color="olive">

                </Segment>
            </Grid.Column>
        </Grid>

    </section>
);