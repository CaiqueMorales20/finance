// Imported Components
import {Pressable} from 'react-native';

// Styled Components
import {TabIcon, TabItemS, TabItemText} from './style';

// Types
import {TabItemProps} from './types';

// Functional Components
export const TabItem = (props: TabItemProps) => {
  // Rendering
  return (
    <Pressable onPress={props.onPress}>
      <TabItemS>
        {/* <TabIcon source={require('../../../../assets/icons/user.png')} /> */}
        <TabItemText>{props.name}</TabItemText>
      </TabItemS>
    </Pressable>
  );
};
