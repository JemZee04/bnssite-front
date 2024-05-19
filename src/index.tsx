import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Router from './routing/Router';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider, Spin } from 'antd';
import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider
    theme={{
      components: {
        Button: {
          borderRadius: 20,
          primaryColor: '#BDFF2E',
          defaultBg: '#BDFF2E',
          defaultBorderColor: '#BDFF2E',
          groupBorderColor: '#BDFF2E',
          defaultHoverColor: '#383838',
          defaultHoverBorderColor: '#aae62a',
          defaultHoverBg: '#aae62a',
          defaultActiveColor: '#383838',
          defaultActiveBorderColor: '#91c424',
          defaultActiveBg: '#91c424',
          paddingInline: 10,
          paddingBlock: 5,
          fontWeight: 700,
          defaultShadow: '0px 4px 4px 0px #0000000D',
          defaultColor: '#424242',
          fontFamily: 'Source Sans 3'
        }
      },
      token: {
        fontFamily: 'Source Sans 3',
        colorPrimaryBg: '#BDFF2E'
      }
    }}
  >
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Spin></Spin>}>
        <BrowserRouter>
          <YMaps query={{
            apikey: '29e64032-86a4-4346-97ad-7f1d1eec4ae2',
          }}>
            <Router />
          </YMaps>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ConfigProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
