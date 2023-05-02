// Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Login from '../../screens/Login';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';
import Graphics from '../../screens/Graphics';

// Functional Component
export const Stack = () => {
  // Variables
  const {Navigator, Screen} = createNativeStackNavigator();

  // Rendering
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="login">
      <Screen
        name="login"
        component={Login}
        options={{animation: 'slide_from_left'}}
      />
      <Screen
        name="settings"
        component={Settings}
        options={{animation: 'slide_from_right'}}
      />
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
      <Screen name="graphics" component={Graphics} />
    </Navigator>
  );
};
