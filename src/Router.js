import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IntroPage" component={Intro} />
        <Stack.Screen name="QuestionsPage" component={Questions} />
        <Stack.Screen name="ResultPage" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
