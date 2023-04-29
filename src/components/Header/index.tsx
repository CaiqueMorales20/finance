// Imported Components
import {SettingIcon} from './components/SettingIcon';

// Styled Components
import {HeaderS, UserImg} from './style';

// Functional Component
export const Header = () => {
  // Rendering
  return (
    <HeaderS>
      <UserImg source={require('../../assets/img/nicolli.png')} />
      <SettingIcon />
    </HeaderS>
  );
};
