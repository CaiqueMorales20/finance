// Styled Components
import {ProfileInput, ProfileItemS, ProfileLabel, ProfileText} from './style';

// Type
import {ProfileItemProps} from './types';

// Functional Component
export const ProfileItem = (props: ProfileItemProps) => {
  // Rendering
  return (
    <ProfileItemS>
      <ProfileLabel>{props.title}</ProfileLabel>
      <ProfileInput>
        <ProfileText>{props.description}</ProfileText>
      </ProfileInput>
    </ProfileItemS>
  );
};
