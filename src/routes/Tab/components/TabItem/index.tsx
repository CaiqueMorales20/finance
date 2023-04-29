// Imported Components
import {Pressable} from 'react-native';

// Styled Components
import {TabIcon, TabItemS} from './style';

// Types
import {TabItemProps} from './types';

// Functional Components
export const TabItem = (props: TabItemProps) => {
  // Rendering
  return (
    <Pressable onPress={props.onPress}>
      <TabItemS>
        <TabIcon source={props.icon} />
      </TabItemS>
    </Pressable>
  );
};
