import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'
import createHistory   from 'history/createBrowserHistory';
import { configureStore } from './store';
import Routes from './Routes';
import './styles/styles.less'

const initStore = {};
const history = createHistory();
class Root extends React.Component {

  render() {
    return (
      <AppContainer>
        <Provider store={configureStore(initStore)}>
          <Routes history={history}/>
        </Provider>
      </AppContainer>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('app-container'));
