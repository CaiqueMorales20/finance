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
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Button title="home" onPress={() => navigation.navigate('home')} />
    </ProfileS>
  );
};

// Export
export default Profile;
