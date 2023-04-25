// Styled Components
import {ButtonS, ButtonText} from './style';

// Types
import {ButtonProps} from './types';

// Functional Component
export const Button = (button: ButtonProps) => {
  // Rendering
  return (
    <ButtonS outline={button.outline} onPress={button.onPress}>
      <ButtonText outline={button.outline}>{button.title}</ButtonText>
    </ButtonS>
  );
};
