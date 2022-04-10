import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";

import {
    PanelHeader,
    Counter,
    Group,
    Placeholder,
    Button,
    MiniInfoCell,
    Div,
    FixedLayout,
    Separator,
    ButtonGroup,
    Header,
    HorizontalCell,
    Avatar,
    Headline,
} from "@vkontakte/vkui";
import {
    Icon20PlaceOutline,
    Icon20UserSquareOutline,
    Icon56BlockOutline,
    Icon56UserSquareOutline
} from '@vkontakte/icons';
import bridge from "@vkontakte/vk-bridge";
import { set } from '../../reducers/game';

function Game({ router }) {
    const isDesktop = useSelector((state => state.main.isDesktop))
    const locations = useSelector((state => state.locations.locations))
    const gameStorage = useSelector((state) => state.game)
    const [time, setTime] = useState(gameStorage.members.length * 60)
    const [isView, setView] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        let timerId = setTimeout(setTime, 1000, time - 1);
        if (time === 0) {
            clearTimeout(timerId)
            flashSet()
        }
    }, [time])

    useEffect(() => {
        return () => {
            setTime(1)
            bridge.send("VKWebAppFlashSetLevel", {"level": 0});
        }
    }, [])

    async function flashSet() {
        while(time === 0) {
            await bridge.send("VKWebAppFlashSetLevel", {"level": 1});
            await new Promise(resolve => setTimeout(resolve, 1000))

            await bridge.send("VKWebAppFlashSetLevel", {"level": 0});
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
    }

    return(
        <>
            <PanelHeader
                left={
                    <Counter className={'fixPaddingCount'}>
                        {/*eslint-disable-next-line*/}
                        Осталось времени: {Math.floor(time/60)}:{time % 60 < 10 && "0"}{time % 60}
                    </Counter>
                }
                separator={isDesktop}
            >
                Игра
            </PanelHeader>

            <Group>
                {time === 0 &&
                <Placeholder
                    icon={<Icon56BlockOutline/>}
                    header={'Упс...'}
                    action={
                        <Button
                            size="m"
                            onClick={() => {
                                router.toView('home/')
                                router.toModal('newGame')
                            }}
                        >
                            Еще раз!
                        </Button>
                    }
                >
                    Время вышло. Может, сыграем еще раз?)
                </Placeholder>
                }

                {time !== 0 && (!isView ?
                        <Placeholder
                            icon={<Icon56UserSquareOutline/>}
                            header={`${gameStorage.members[gameStorage.activeMember].name}, твой ход!`}
                            action={
                                <Button
                                    size="m"
                                    onClick={() => setView(true)}
                                >
                                    Посмотреть свою локацию
                                </Button>
                            }
                            stretched={!isDesktop}
                        /> :
                        <>
                            <MiniInfoCell
                                before={<Icon20UserSquareOutline/>}
                                textLevel={'primary'}
                                textWrap={'full'}
                            >
                                Ты - {gameStorage.members[gameStorage.activeMember].name} <br/>
                                Твоя роль: {" "}
                                <b>{gameStorage.members[gameStorage.activeMember].isSpy ?
                                    "Шпион" :
                                    gameStorage.members[gameStorage.activeMember].job
                                }</b>
                            </MiniInfoCell>
                            {!gameStorage.members[gameStorage.activeMember].isSpy ?
                                <>
                                    <MiniInfoCell
                                        before={<Icon20PlaceOutline />}
                                        textLevel={'primary'}
                                        textWrap={'full'}
                                    >
                                        Наша локация: <b>{gameStorage.location.name}</b>
                                    </MiniInfoCell>

                                    <Div>
                                        <img
                                            alt={gameStorage.location.name}
                                            src={gameStorage.location.url}
                                            className={'imgStartGame'}
                                        />
                                    </Div>
                                </> :
                                <>
                                    <Div className={'div-center'}>
                                        <img
                                            src={'https://meme-police.ru/spyfall/spy.jpg'}
                                            alt={'Шпион'}
                                            className={'imgStartGame'}
                                        />
                                    </Div>

                                    <Header>
                                        Локации
                                    </Header>

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
                                </>
                            }

                            <FixedLayout filled vertical="bottom" className={isDesktop && 'fixedMarginFixedLayout'}>
                                <Separator wide />
                                <Div>
                                    <ButtonGroup mode="horizontal" gap="m" stretched>
                                        <Button
                                            size="l"
                                            mode='secondary'
                                            stretched
                                            onClick={() => setView(false)}
                                        >
                                            Убрать мою роль
                                        </Button>

                                        <Button
                                            size="l"
                                            mode='primary'
                                            stretched
                                            onClick={() => {
                                                setView(false)
                                                if (gameStorage.activeMember + 1 === gameStorage.members.length) {
                                                    dispatch(set({ key: 'activeMember', value: 0 }))
                                                } else {
                                                    dispatch(set({ key: 'activeMember', value: gameStorage.activeMember + 1 }))
                                                }
                                            }}
                                        >
                                            Далее
                                        </Button>
                                    </ButtonGroup>
                                </Div>
                            </FixedLayout>
                        </>
                )}
            </Group>
        </>
    )
}

export default withRouter(Game);