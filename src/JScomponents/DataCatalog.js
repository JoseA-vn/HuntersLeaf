import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import Menu from "./MenuVer";
import { Title, Blocktext } from "../Styled_components/Letras";
import log from "../Images/DataCatalog.jpeg";
import lo from "../Images/DataCatalog2.jpeg";

export default () => (
    <section>
        <Menu />
        <Grid centered>
            <Grid.Row></Grid.Row>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="brown" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={7}>
                                <Segment inverted color="brown">
                                    <Image src={log} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Title verde>
                                    Data Catalog
                                </Title>
                                <Blocktext blanco >
                                    Es un servicio el cual permite a cualquier tipo de usuario un control sobre
                                    sus datos haciendo de esta forma que sea más sencillo la búsqueda de ellos
                                    en las bases de datos a nivel empresarial.
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>

        <Grid centered >
            <Grid.Column width={15}>
                <Segment inverted tertiary color="brown">

                </Segment>
            </Grid.Column>
        </Grid>
        <Grid centered>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="brown" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={7}>
                                <Segment inverted color="brown">
                                    <Image src={lo} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Blocktext blanco >
                                    El servicio es gratuito si se cuenta con una cuenta profesional, para más
                                    información <a target="_blank" href="https://azure.microsoft.com/es-es/services/data-catalog/">pulse aquí</a>
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
        <Grid centered >
            <Grid.Column width={15}>
                <Segment inverted tertiary color="brown">

                </Segment>
            </Grid.Column>
        </Grid>
    </section>


);