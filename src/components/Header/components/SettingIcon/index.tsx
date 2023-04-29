// Imports
import {useNavigation} from '@react-navigation/native';

// Styled Components
import {SettingIconPressable, SettingIconS} from './style';

// Functional Component
export const SettingIcon = () => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <SettingIconPressable onPress={() => navigation.navigate('settings')}>
      <SettingIconS source={require('../../../../assets/icons/setting.png')} />
    </SettingIconPressable>
  );
};
