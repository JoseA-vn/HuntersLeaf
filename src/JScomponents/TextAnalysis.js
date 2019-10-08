import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import Menu from "./MenuVer";
import log from "../Images/TextAnalysis.jpeg";
import lo from "../Images/TextAnalysis2.jpeg";
import { Title, Blocktext } from "../Styled_components/Letras";



export default () => (
    <section>
        <Menu />
        <Grid centered>
            <Grid.Row></Grid.Row>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="purple" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={7}>
                                <Segment inverted color="purple">
                                    <Image src={log} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Title subrayar >
                                    Text Analysis
                                </Title>

                                <Blocktext >
                                    Es un servicio el cual permite analizar textos, identificando idioma,
                                    opinión respecto al tema, frases clave y entidades mencionadas en el
                                    texto esta api es capaz de detectar 120 idiomas
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
                            <Grid.Column width={6}>
                                <Segment inverted color="purple">
                                    <Image src={lo} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Blocktext >
                                    Es un servicio completamente gratis incluído dentro de la cuenta de azure
                                    para más información <a href="https://azure.microsoft.com/es-es/services/cognitive-services/text-analytics/">pulse aquí</a>
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </section>
);