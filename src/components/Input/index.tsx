// Styled Components
import {InputS} from './style';

// Types
import {InputProps} from './types';

// Functional Component
export const Input = (input: InputProps) => {
  // Rendering
  return (
    <InputS placeholder={input.placeholder} placeholderTextColor="#313131" />
  );
};
