import React from 'react';
import { Button, Icon, Grid, Message, Image } from 'semantic-ui-react';
import logo from "./trifenix.png" ;

export default () => (

<Grid centered columns={3}>
        
    <Grid centered columns = {2}>
        <Button size = "large" color= "black" href = "https://www.trifenix.io/" >
            Mejor pagina
        </Button>
        <Button size = "large" color= "blue" href = "https://es.reactjs.org/" >
            React
        </Button>
        <Button size = "large" color= "pink" href = "https://azure.microsoft.com/es-es/services/devops/" >
            AzureDevops
        </Button>
        <Button size = "large" color= "brown" href = "https://products.office.com/es-mx/microsoft-teams/group-chat-software" >
            MicrosoftTeams
        </Button>
        <Message color= "purple" size ="small">
                
        </Message>
        </Grid>


        <Grid centered columns = {1} >

            <Image src = {logo} className="App-logo" alt="logo" size = "small" >

            </Image>
            
     </Grid>
</Grid >
                
    
     

















);