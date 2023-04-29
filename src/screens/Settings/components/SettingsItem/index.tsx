// Imports
import {useNavigation} from '@react-navigation/native';

// Styled Components
import {Pressable} from 'react-native';
import {SettingsItemIcon, SettingsItemS, SettingsItemText} from './style';

// Types
import {SettingItemProps} from './type';

// Functional Component
export const SettingsItem = (props: SettingItemProps) => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <Pressable onPress={() => navigation.navigate(props.screen)}>
      <SettingsItemS>
        <SettingsItemIcon source={props.icon} />
        <SettingsItemText>{props.title}</SettingsItemText>
      </SettingsItemS>
    </Pressable>
  );
};
