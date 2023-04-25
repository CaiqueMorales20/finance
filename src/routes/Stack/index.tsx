// Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

// Functional Component
export const Stack = () => {
  // Variables
  const {Navigator, Screen} = createNativeStackNavigator();

  // Rendering
  return (
    <Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
};
