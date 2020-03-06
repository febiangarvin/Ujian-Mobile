import React from 'react'; // //import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';

import reducers from './src/redux/reducers';
import Main from './src/components/main';

class App extends React.Component {
  render() {
    return ( // //return component main navigation
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;