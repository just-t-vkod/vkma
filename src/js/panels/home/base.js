import React from 'react';
import { withRouter } from '@reyzitwo/react-router-vkminiapps';

import {
    Group,
    Header,
    PanelHeader,
    Div,
    HorizontalCell,
    Avatar,
    Headline,
    Button,
    SimpleCell
} from '@vkontakte/vkui'

import locations from "../../../names";
import {Icon28HelpOutline} from "@vkontakte/icons";

function HomePanelBase({ router }) {
    return (
        <>
            <PanelHeader separator>Шпион</PanelHeader>
            <Group header={<Header mode='secondary'>Игра</Header> }>
                <Div>
                    <Button
                        stretched
                        size='l'
                        mode={'secondary'}
                        onClick={() => router.toModal('newGame')}
                    >
                        Начать игру!
                    </Button>
                </Div>
            </Group>

            <Group header={<Header mode='secondary'>Инфо</Header> }>
                <SimpleCell
                    href='https://tesera.ru/images/items/447919/SPY_rules_web.pdf'
                    target='_blank'
                    before={<Icon28HelpOutline/>}
                >
                    Как играть?
                </SimpleCell>
            </Group>

            <Group header={<Header mode='secondary'>Локации</Header> }>
                <div className={'locations'}>
                    {locations.map((el) => {
                        return(
                            <HorizontalCell
                                size="l"
                                disabled

                            >
                                <Avatar
                                    size={128}
                                    mode="image"
                                    src={el.url}
                                    className={'location'}
                                >
                                    <Headline weight="semibold" className='locName'>
                                        {el.name}
                                    </Headline>
                                </Avatar>
                            </HorizontalCell>
                        )
                    })}
                </div>
            </Group>
        </>
    );
}

export default withRouter(HomePanelBase);