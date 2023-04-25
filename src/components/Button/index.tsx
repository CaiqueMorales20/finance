// Styled Components
import {ButtonS, ButtonText} from './style';

// Types
import {ButtonProps} from './types';

// Functional Component
export const Button = (button: ButtonProps) => {
  // Rendering
  return (
    <ButtonS onPress={button.onPress}>
      <ButtonText>{button.title}</ButtonText>
    </ButtonS>
  );
};
