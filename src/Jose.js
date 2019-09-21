import React from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import AnimatedBg from "react-animated-bg";

export default () => (
  
    <Grid centered columns={2}>
        
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>

        <Grid.Column>
            <Grid centered columns={2}>
                <AnimatedBg colors={["#EFF166" , "#D68C11 ","#FF0000 "]} duration={3} delay={0} timingFunction="ease-out" className="section-styles">
                    Página de José
                </AnimatedBg>
        
                <Grid.Row>
                </Grid.Row>  
        
            </Grid>
            <Grid>
                <Button.Group size="mini">
                    <Button href="https://animeyt2.tv" target="_blank" color="green" fluid>
                        Anime
                    </Button>
                    <Button href="https://diep.io" target="_blank" color="olive" fluid>
                        Juego Casual
                    </Button>          
                </Button.Group>
        
                <Grid.Row>
                </Grid.Row>  
        
                <Grid centered>
                <Button.Group>
                    <Button color='instagram' href="https://www.instagram.com/josevn_/?hl=es-la" target="_blank" size="mini">
                        <Icon name='instagram' /> Instagram
                    </Button>
                    <Button color='facebook'  href="https://www.facebook.com/joseantonio.veranahuelcoy" target="_blank" size="mini">
                        <Icon name='facebook' /> Facebook
                    </Button>
                </Button.Group>
                </Grid>
            </Grid>
        </Grid.Column>
    </Grid>
);