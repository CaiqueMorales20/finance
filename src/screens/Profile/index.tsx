// Imported Components
import {PageContainer} from '../../components/PageContainer';
import {ProfileItem} from './components/ProfileItem';

// Styled Components
import {ProfileContainer} from './style';

// Data
import {ProfileDataNicolli} from './data';
import {ProfileDataCaique} from './data';

// Functional Component
const Profile = () => {
  // Rendering
  return (
    <PageContainer>
      <ProfileContainer>
        {ProfileDataNicolli.map((item, index) => {
          // Rendering
          return (
            <ProfileItem
              title={item.title}
              description={item.description}
              key={index}
            />
          );
        })}
      </ProfileContainer>
    </PageContainer>
  );
};

// Export
export default Profile;
