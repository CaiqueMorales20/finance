// Imports
import {useNavigation} from '@react-navigation/native';

// Imported Components
import {Pressable} from 'react-native';

// Styled Components
import {TabItemS, TabItemText} from './style';

// Functional Components
export const TabItem = () => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <Pressable onPress={() => navigation.navigate('profile')}>
      <TabItemS>
        <TabItemText>Profile</TabItemText>
      </TabItemS>
    </Pressable>
  );
};
