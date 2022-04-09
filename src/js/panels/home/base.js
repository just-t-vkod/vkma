import React, {useEffect, useState} from 'react';
import { withRouter } from '@reyzitwo/react-router-vkminiapps';

import {
    Card,
    FormItem,
    Group, Header,
    PanelHeader,
    Div, CardGrid
} from '@vkontakte/vkui'

import names from '../../../names'
import bridge from "@vkontakte/vk-bridge";

function HomePanelBase({ router }) {
    const [snackbar, setSnackbar] = useState(null)
    const [locations, setLocations] = useState([])
    
    async function getLocations() {
        var locations = []

        for (var i = 0; i <= 29; i++) {
            let loc = `https://meme-police.ru/spyfall//location/spyfall1/${i}.jpg`
            locations.push(loc)
        }

        setLocations(locations)
    }

    async function getUserRole() {
        
    }
    
    useEffect(
        () => {getLocations();}, []
    )

    return (
        <>
            <PanelHeader separator>Шпион</PanelHeader>
            <Group>
                <Div>
                    <Card className='location' mode='outline'>
                        <FormItem top='Ваша роль'>
                            
                        </FormItem>
                    </Card>
                </Div>

            </Group>
            <Group header={<Header mode='secondary'>Локации</Header> }>
                <CardGrid size='s'>
                    {locations.map((el, index) => {
                        return(
                            <FormItem top={names[index]}>
                                <img src={el} width={145} alt='location' height={120}></img>
                            </FormItem>
                        )
                    })}
                </CardGrid>
            </Group>
            {snackbar}
        </>
    );
}

export default withRouter(HomePanelBase);