// Imports
import styled from 'styled-components/native';

// Types
type ButtonSProps = {
  outline?: boolean;
};

// Styled Components
export const ButtonS = styled.Pressable<ButtonSProps>`
  height: 30px;
  width: 100px;
  background-color: ${props => (props.outline ? '#efefef' : '#212121')};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const ButtonText = styled.Text<ButtonSProps>`
  font-size: 12px;
  color: ${props => (props.outline ? '#212121' : '#efefef')};
`;
