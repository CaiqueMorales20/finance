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
      <TabItem name="Home" onPress={() => navigation.navigate('home')} />
      <TabItem name="Perfil" onPress={() => navigation.navigate('profile')} />
      <TabItem name="Sair" onPress={() => navigation.navigate('login')} />
    </TabS>
  );
};
