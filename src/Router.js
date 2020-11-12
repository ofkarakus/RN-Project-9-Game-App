import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Intro, Questions, Result} from './pages';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './context/reducer'
import {initialState} from './context/store'

const Stack = createStackNavigator();
const store = createStore(reducer, initialState);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="IntroPage" component={Intro} />
          <Stack.Screen name="QuestionsPage" component={Questions} />
          <Stack.Screen name="ResultPage" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
