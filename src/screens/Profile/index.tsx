// Imports
import {useNavigation} from '@react-navigation/native';

// Imported Components
import {Button} from '../../components/Button';

// Styled Components
import {ProfileS, ProfileText} from './style';

// Functional Component
const Profile = () => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <ProfileS>
      <ProfileText>Profile</ProfileText>
      <Button
        outline
        title="go home"
        onPress={() => navigation.navigate('home')}
      />
    </ProfileS>
  );
};

// Export
export default Profile;
