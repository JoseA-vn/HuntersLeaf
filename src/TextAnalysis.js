import React from 'react';
import { Button, Grid, Message, Image, GridColumn, Segment } from 'semantic-ui-react';
import logo from "./Images/BlackWood.jpg";
import Menu from "./MenuVer";
import log from "./Images/TextAnalysis.jpeg";
import lo from "./Images/TextAnalysis2.jpeg";
import { Title, Sub, Blocktext } from "./Styled_components/Letras";

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
                <Segment inverted tertiary color="purple" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment inverted color="purple">
                                    <Image src={log} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Title subrayar>
                                    Ejemplo sobre como usarlo
                                </Title>
                                <Blocktext >

                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>

        <Grid centered >
            <Grid.Column width={15}>
                <Segment inverted tertiary color="purple">

                </Segment>
            </Grid.Column>
        </Grid>
        <Grid centered>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="purple" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment inverted color="purple">
                                    <Image src = {lo}/>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Title subrayar >
                                    Informacion sobre la pagina
                                </Title>

                                <Blocktext >
                                Es un servicio el cual permite analizar textos, identificando idioma, opinión respecto al tema, frases clave y entidades mencionadas en el texto esta api es capaz de detectar 120 idiomas
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </section>










);