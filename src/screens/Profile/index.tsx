// Imported Components
import {PageContainer} from '../../components/PageContainer';
import {ProfileItem} from './ProfileItem';

// Styled Components
import {ProfileContainer} from './style';

// Functional Component
const Profile = () => {
  // Rendering
  return (
    <PageContainer>
      <ProfileContainer>
        <ProfileItem
          title="Nome"
          description="Nicolli Frizzatti Morales Martin"
        />
        <ProfileItem title="Idade" description="19" />
        <ProfileItem title="Profissão" description="Gostosa" />
        <ProfileItem title="Estado civil" description="União estável" />
      </ProfileContainer>
    </PageContainer>
  );
};

// Export
export default Profile;
