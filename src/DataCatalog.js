import React from 'react';
import { Button, Grid, Message, Image, GridColumn , Segment } from 'semantic-ui-react';
import logo from "./Images/BlackWood.jpg"
import Menu from "./MenuVer";
import {Title, Sub, Blocktext} from "./Styled_components/Letras";
import log from "./Images/DataCatalog.jpeg";
import lo from "./Images/DataCatalog2.jpeg";


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
                <Segment inverted tertiary color="brown" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment inverted color="brown">
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
                <Segment inverted tertiary color="brown">

                </Segment>
            </Grid.Column>
        </Grid>
        <Grid centered>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="brown" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment inverted color="brown">
                                    <Image src = {lo}/>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Title subrayar >
                                    Informacion sobre la pagina
                                </Title>

                                <Blocktext >
                                Es un servicio el cual permite a cualquier tipo de usuario un control sobre sus datos haciendo de esta forma que sea más sencillo la búsqueda de ellos en las bases de datos a nivel empresarial.
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </section>

    
);