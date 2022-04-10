import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";

import {
    PanelHeader,
    PanelHeaderBack,
    Group,
    Placeholder,
    FormLayout,
    FormItem,
    Input,
    Button,
    Div,
    SimpleCell
} from "@vkontakte/vkui";
import {
    Icon28UserSquareOutline,
    Icon56AccessibilityOutline, Icon28LocationOutline
} from '@vkontakte/icons';
import { set, setNameMember } from '../../reducers/game';

function Start({ router }) {
    const isDesktop = useSelector((state => state.main.isDesktop))
    const gameStorage = useSelector((state) => state.game)
    const [isGot, setGot] = useState(false)
    const dispatch = useDispatch()

    return(
        <>
            <PanelHeader
                separator={isDesktop}
                left={<PanelHeaderBack onClick={() => router.toBack()}/>}
            >
                Начало игры
            </PanelHeader>

            {!isGot &&
            <Group>
                <Placeholder
                    icon={<Icon56AccessibilityOutline />}
                    header={`Привет, ${
                        gameStorage.members[gameStorage.activeMember].name.length === 0 ?
                            `Игрок ${gameStorage.activeMember + 1}` :
                            gameStorage.members[gameStorage.activeMember].name
                    }`}
                >
                    Введите свой ник, получите себе роль
                    и передайте устройство другим игрокам
                </Placeholder>

                <FormLayout>
                    <FormItem top={'Имя'}>
                        <Input
                            placeholder={'Введите ваш ник или имя'}
                            value={gameStorage.members[gameStorage.activeMember].name}
                            onChange={(e) =>
                                dispatch(setNameMember({ index: gameStorage.activeMember, value: e.currentTarget.value }))
                            }
                        />
                    </FormItem>

                    <FormItem>
                        <Button
                            size={'l'}
                            stretched
                            disabled={gameStorage.members[gameStorage.activeMember].name.length === 0}
                            onClick={() => setGot(true)}
                            type={'submit'}
                        >
                            Получить роль
                        </Button>
                    </FormItem>
                </FormLayout>
            </Group>
            }

            {isGot &&
            <Group>
                <SimpleCell
                    before={<Icon28UserSquareOutline/>}
                >
                    Ты - {gameStorage.members[gameStorage.activeMember].name}, <br/>
                    Твоя роль: {" "}
                    <b>{gameStorage.members[gameStorage.activeMember].isSpy ?
                        "Шпион" :
                        gameStorage.members[gameStorage.activeMember].job
                    }</b>
                </SimpleCell>

                {!gameStorage.members[gameStorage.activeMember].isSpy ?
                    <>
                        <SimpleCell
                            before={<Icon28LocationOutline/>}
                        >
                            Наша локация - <b>{gameStorage.location.name}</b>
                        </SimpleCell>

                        <Div>
                            <img
                                alt={gameStorage.location.name}
                                src={gameStorage.location.url}
                                className={'imgStartGame'}
                            />
                        </Div>
                    </> :
                    <div className={'div-center'}>
                        <img
                            src={'https://meme-police.ru/spyfall/spy.jpg'}
                            alt={'Шпион'}
                            className={'imgStartGame'}
                        />
                    </div>
                }

                <Div>
                    <Button
                        size={'l'}
                        stretched
                        onClick={() => {
                            if (gameStorage.members.length === gameStorage.activeMember + 1) {
                                router.toPanel('game')
                                return dispatch(set({ key: 'activeMember', value: 0 }))
                            }

                            dispatch(set({ key: 'activeMember', value: gameStorage.activeMember + 1 }))
                            setGot(false)
                        }}
                    >
                        {gameStorage.members.length === gameStorage.activeMember + 1 ? 'Начинаем!' : 'Следующий'}
                    </Button>
                </Div>
            </Group>
            }
        </>
    )
}
//var(--destructive)
export default withRouter(Start);