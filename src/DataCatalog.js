import React from 'react';
import { Button, Grid, Message, Image, GridColumn } from 'semantic-ui-react';
import logo from "./Images/BlackWood.jpg"
import Menu from "./MenuVer";
import {Title, Sub, Blocktext} from "./Styled_components/Letras";

var sectionBackground = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${logo})`

}

export default () => (


    <section style={sectionBackground}>
        <Menu />
        <Grid >
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='https://images.akiraanalytics.com/insights/akira-analytics-what-is-data-catalog.png' />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Sub>
                        Informacion sobre la pagina
                    </Sub>
                    <Title>
                    
                    </Title>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='https://i.imgur.com/f3nK7gh.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Sub>
                    Aqui va la informacion del titulo
                    </Sub>
                    <Blocktext>
                        Este sera el bloque de texto
                        </Blocktext>
      </Grid.Column>
                <Grid.Column width={3}>
                    <Image />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </section>
);