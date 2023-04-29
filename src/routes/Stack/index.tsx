// Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Login from '../../screens/Login';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';

// Functional Component
export const Stack = () => {
  // Variables
  const {Navigator, Screen} = createNativeStackNavigator();

  // Rendering
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 10000,
      }}
      initialRouteName="login">
      <Screen name="login" component={Login} />
      <Screen
        name="settings"
        component={Settings}
        options={{animation: 'slide_from_right'}}
      />
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
};
