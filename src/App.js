import React, {lazy, Suspense, useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from '@reyzitwo/react-router-vkminiapps';

import {
  ConfigProvider,
  AppRoot,
  SplitLayout,
  PanelHeader,
  SplitCol,
  Epic,
  View,
  Panel,
  ModalRoot,
  ScreenSpinner,
  usePlatform,
  VKCOM,
  withAdaptivity, platform,
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import { set } from './js/reducers/mainReducer';

import NewGame from './js/components/modals/newGame';

const HomePanelBase = lazy(() => import('./js/panels/home/base'));
const Intro = lazy(() => import('./js/panels/home/Intro'))
const Start = lazy(() => import('./js/panels/home/start'))
const Game = lazy(() => import('./js/panels/home/game'))

const App = withAdaptivity(({ viewWidth, router }) => {
  const mainStorage = useSelector((state) => state.main)
  const dispatch = useDispatch()
  const [scheme, setScheme] = useState('light')

  dispatch(set({ key: 'isDesktop', value: viewWidth >= 3 }))
  dispatch(set({ key: 'platform', value: mainStorage.isDesktop ? VKCOM : usePlatform() }))
  dispatch(set({ key: 'hasHeader', value: mainStorage.isDesktop !== true }))

  async function getAppScheme(platform) {
    if (platform === 'vkcom') {
      setScheme('vkcom_light')
    } else {
      bridge.subscribe((e) => {
        if (e.detail.type === 'VKWebAppUpdateConfig') {
          let data = e.detail.data.scheme
          setScheme(data)
        }
      })
      let appScheme = await bridge.send("VKWebAppGetConfig")
      setScheme(appScheme.scheme)
    }
  }

  useEffect(() => {
    getAppScheme(platform())
  }, [])

  const modals = (
    <ModalRoot activeModal={router.modal} onClose={() => router.toBack()}>
      <NewGame nav="newGame"/>
    </ModalRoot>
  );

  return(
    <ConfigProvider platform={mainStorage.platform} scheme={scheme} isWebView>
      <AppRoot>
        <SplitLayout
          header={mainStorage.hasHeader && <PanelHeader separator={false} />}
          style={{ justifyContent: "center" }}
        >
          <SplitCol
            animate={!mainStorage.isDesktop}
            spaced={mainStorage.isDesktop}
            width={mainStorage.isDesktop ? '700px' : '100%'}
            maxWidth={mainStorage.isDesktop ? '700px' : '100%'}
          >   
            <Epic 
              activeStory={router.activeView}
            >
              <View 
                id='home'
                activePanel={router.activePanel === 'route_modal' ? 'base' : router.activePanel}
                popout={router.popout}
                modal={modals}
              >
                <Panel id='base'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <HomePanelBase/>
                  </Suspense>
                </Panel>

                <Panel id='intro'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <Intro/>
                  </Suspense>
                </Panel>

                <Panel id='start'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <Start/>
                  </Suspense>
                </Panel>

                <Panel id='game'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <Game/>
                  </Suspense>
                </Panel>
              </View>
            </Epic>
          </SplitCol>

        </SplitLayout>
      </AppRoot>
    </ConfigProvider>
  )
}, { viewWidth: true })

export default withRouter(App);