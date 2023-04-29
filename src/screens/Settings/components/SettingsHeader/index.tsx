// Imports
import {useNavigation} from '@react-navigation/native';

// Imported Components
import {Pressable} from 'react-native';

// Styled Components
import {GoBackIcon, SettingsHeaderS} from './style';

// Functional Component
export const SettingsHeader = () => {
  // Variables
  const navigation = useNavigation();

  // Rendering
  return (
    <SettingsHeaderS>
      <Pressable onPress={() => navigation.goBack()}>
        <GoBackIcon source={require('../../../../assets/icons/return.png')} />
      </Pressable>
    </SettingsHeaderS>
  );
};
