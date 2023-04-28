// Styled Components
import {HeaderS, HeaderText, SettingIcon, UserImg} from './style';

// Functional Component
export const Header = () => {
  // Rendering
  return (
    <HeaderS>
      <UserImg source={require('../../assets/img/nicolli.png')} />
      <SettingIcon source={require('../../assets/icons/setting.png')} />
    </HeaderS>
  );
};
