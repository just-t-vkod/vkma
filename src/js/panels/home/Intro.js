import {React, useState} from 'react';
import {
    Button,
    Div,
    FormItem,
    Input,
    Placeholder,
    Panel
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {withRouter} from "@reyzitwo/react-router-vkminiapps";
import { store } from '../../../store';

function Intro({router}) {
    const [players, setPlayers] = useState('')
    const [status, setStatus] = useState('default')

    async function onChange(e) {
        const {name, value} = e.currentTarget

        if (name === 'players') {
            setPlayers(value)
        }

        setStatus('default')
    }

    async function sendPlayers() {
        if (players in [3, 4, 5, 6, 7, 8]) {
            bridge.send("VKWebAppStorageSet", {key: 'players', value: players})
            store.dispatch(router.toPanel('base'))
        }
        else {
            setStatus('error')
        }
    }


    return (
        <>
            <Panel>
                <Placeholder>
                    Привет! Это игра "Шпион". Пожалуйста, введите количество игроков ниже (от 3 до 8).
                </Placeholder>

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
            </Panel>
        </>
    );
}

export default withRouter(Intro);