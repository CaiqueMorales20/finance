// Imports
import {useNavigation} from '@react-navigation/native';

// Imported Components
import {TabItem} from './components/TabItem';

// Styled Components
import {TabS} from './style';

// Functional Component
export const Tab = () => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <TabS>
      <TabItem
        icon={require('../../assets/icons/home.png')}
        onPress={() => navigation.navigate('home')}
      />
      <TabItem
        icon={require('../../assets/icons/profile.png')}
        onPress={() => navigation.navigate('profile')}
      />
      <TabItem
        icon={require('../../assets/icons/logout.png')}
        onPress={() => navigation.navigate('login')}
      />
    </TabS>
  );
};
