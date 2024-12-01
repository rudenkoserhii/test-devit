import { Provider } from 'react-redux';
import { ConfigProvider, Divider, App as AntApp } from 'antd';
import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo';
import Main from 'components/Main/Main';
import { store } from './redux/store';
import FloatButtonTop from 'components/FloatButtonTop/FloatButtonTop';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <AntApp>
        <Provider store={store}>
            <div>
              <Logo />
              <Divider orientation="right">Type Number</Divider>
              <Input />
            </div>
            <Main />
            <FloatButtonTop />
        </Provider>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
