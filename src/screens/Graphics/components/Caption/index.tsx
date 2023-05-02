// Styled Components
import {CaptionBullet, CaptionS, CaptionText} from './style';

// Type
import {CaptionProps} from './types';

// Functional Component
export const Caption = (caption: CaptionProps) => {
  // Rendering
  return (
    <CaptionS>
      <CaptionBullet color={caption.color} />
      <CaptionText>{caption.text}</CaptionText>
    </CaptionS>
  );
};
