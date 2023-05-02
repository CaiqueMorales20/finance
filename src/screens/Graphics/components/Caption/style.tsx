// Imports
import styled from 'styled-components/native';

// Types
type BulletProps = {
  color: string;
};

// Styled Components
export const CaptionS = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const CaptionText = styled.Text``;

export const CaptionBullet = styled.View<BulletProps>`
  width: 10px;
  height: 10px;
  background-color: ${props => props.color};
  border-radius: 50px;
`;
