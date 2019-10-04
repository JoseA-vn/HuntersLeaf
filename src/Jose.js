import React from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import AnimatedBg from "react-animated-bg";
import BackgroundSlider from 'react-background-slider'
import image1 from "./Images/redwoods.png"
import Menu from "./Menu";
export default () => (

    <div>
        <BackgroundSlider images={[image1]} duration={2} transition={3} />
        <Menu />
        <Grid centered columns={2}>

            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>

            <Grid.Column>
                <Grid centered columns={2}>
                    <AnimatedBg colors={["#EFF166", "#D68C11 ", "#FF0000 "]} duration={3} delay={0} timingFunction="ease-out" className="section-styles">
                        Página de José
                </AnimatedBg>

                    <Grid.Row>
                    </Grid.Row>

                </Grid>
                <Grid>
                    <Button href="https://animeyt2.tv" target="_blank" fluid>
                        Anime
                    </Button>
                    <Button href="https://diep.io" target="_blank" color="olive" fluid>
                        Juego Casual
                    </Button>
                    <Grid.Row>
                    </Grid.Row>

                    <Grid centered>
                        <Button color='instagram' href="https://www.instagram.com/josevn_/?hl=es-la" target="_blank" size="mini">
                            <Icon name='instagram' /> Instagram
                    </Button>
                        <Button color='facebook' href="https://www.facebook.com/joseantonio.veranahuelcoy" target="_blank" size="mini">
                            <Icon name='facebook' /> Facebook
                    </Button>
                    </Grid>
                </Grid>
            </Grid.Column>
        </Grid>
    </div>
);