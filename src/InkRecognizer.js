import React from 'react';
import { Image, Icon, Grid, Message, GridColumn, Segment } from 'semantic-ui-react';
import logo from "./Images/BlackWood.jpg";
import log from "./Images/Ink_Recognizer.jpeg";
import Images from "./Images/Ink_recognizer2.jpeg"
import Menu from "./MenuVer";
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
                <Segment inverted tertiary color="olive" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment inverted color="olive">
                                    <Image src={log} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Title morado>
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
        <Segment inverted tertiary color = "olive">
        
        </Segment>
        </Grid.Column>
        </Grid>
        <Grid centered>
            <Grid.Column width={15}>
                <Segment inverted tertiary color="olive" >
                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment inverted color="olive">
                                    <Image src={Images} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Title morado>
                                    Informacion sobre la pagina
                                </Title>
                                
                                <Blocktext>
                                Ink Recognizer es un servicio que utiliza la inteligencia artificial para reconocer patrones realizados por un lápiz digital estos ya sean escritura manual, objetos, formas, diseños, etc
                                </Blocktext>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </section>
);