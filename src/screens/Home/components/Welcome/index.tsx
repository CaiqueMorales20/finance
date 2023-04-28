// Styled Components
import {WelcomeS, WelcomeText} from './style';

// Functional Component
export const Welcome = () => {
  // Rendering
  return (
    <WelcomeS>
      <WelcomeText>Olá, Senhorita Morales!</WelcomeText>
      <WelcomeText>Vamos organizar suas finanças?</WelcomeText>
    </WelcomeS>
  );
};
