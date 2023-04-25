// Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../../screens/Home';
import Profile from '../../screens/Home';

// Functional Component
export const Stack = () => {
  // Variables
  const {Navigator, Screen} = createNativeStackNavigator();

  // Rendering
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
