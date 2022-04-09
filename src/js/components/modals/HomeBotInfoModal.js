import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { withRouter } from '@reyzitwo/react-router-vkminiapps';
import {
    ModalPage,
    ModalPageHeader,
    PanelHeaderButton,
    IOS, Text, FormItem, Input, Div, Button
} from "@vkontakte/vkui";
import { Icon24Dismiss, Icon24Cancel } from '@vkontakte/icons'
import bridge from "@vkontakte/vk-bridge";

function BotsListModal({ nav, router }) {
    const platform = useSelector((state) => state.main.platform)
    const [players, setPlayers] = useState('')
    const [status, setStatus] = useState('default')

    async function onChange(e) {
        const {name, value} = e.currentTarget

        if (name === 'players') {
            setPlayers(value)
        }

        setStatus('default')
    }

    useEffect(() =>
        {bridge.send("VKWebAppStorageSet", {key: 'players', value: ''})}, []
    )

    async function sendPlayers() {
        if (players in [3, 4, 5, 6, 7, 8]) {
            bridge.send("VKWebAppStorageSet", {key: 'players', value: players})
            router.toBack()
        }
        else {
            setStatus('error')
        }
    }

    return (
        <ModalPage
            nav={nav}
            header={
                <ModalPageHeader
                    left={platform !== IOS && 
                        <PanelHeaderButton onClick={() => router.toBack()}>
                            <Icon24Cancel/>
                        </PanelHeaderButton>
                    }

                    right={platform === IOS && 
                        <PanelHeaderButton onClick={() => router.toBack()}>
                            <Icon24Dismiss/>
                        </PanelHeaderButton>
                    }
                >
                    Информация
                </ModalPageHeader>
            }
            onClose={() => router.toBack()}
            settlingHeight={100}
        >
            <Div>
                <Text weight={5}>
                    Привет! Это игра "Шпион". Пожалуйста, введите количество игроков ниже (от 3 до 8).
                </Text>
            </Div>

            <FormItem status={status} bottom={status === 'error' && 'Введите число от 3 до 8.'}>
                <Input
                    value={players}
                    type='number'
                    placeholder='Введите число...'
                    onChange={(e) => onChange(e)}
                    name='players'
                />
            </FormItem>
            <Div>
                <Button
                    stretched
                    size='l'
                    onClick={() => sendPlayers()}
                >
                    Готово
                </Button>
            </Div>
        </ModalPage>
    );
}

export default withRouter(BotsListModal);