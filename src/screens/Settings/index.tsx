// Imported Components
import {SettingsHeader} from './components/SettingsHeader';
import {SettingsItem} from './components/SettingsItem';

// Data
import {SettingsData} from './data';

// Styled Components
import {SettingsContent, SettingsS} from './style';

// Functional Component
const Settings = () => {
  // Rendering
  return (
    <SettingsS>
      <SettingsHeader />
      <SettingsContent>
        {SettingsData.map((item, index) => {
          // Rendering
          return (
            <SettingsItem
              screen={item.screen}
              icon={item.icon}
              title={item.title}
              key={index}
            />
          );
        })}
      </SettingsContent>
    </SettingsS>
  );
};

// Export
export default Settings;
