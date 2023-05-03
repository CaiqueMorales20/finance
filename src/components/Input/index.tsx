// Styled Components
import {InputS} from './style';

// Types
import {InputProps} from './types';

// Functional Component
export const Input = (input: InputProps) => {
  // Rendering
  return (
    <InputS
      placeholder={input.placeholder}
      value={input.value}
      onChange={input.onChange}
      secureTextEntry={input.hide}
      placeholderTextColor="#313131"
      underlineColorAndroid="transparent"
    />
  );
};
