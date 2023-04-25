// Imports
import {useNavigation} from '@react-navigation/native';

// Imported Components
import {Button} from '../../components/Button';

// Styled Components
import {HomeS, HomeText} from './style';

// Functional Component
const Home = () => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <HomeS>
      <HomeText>Home</HomeText>
      <Button title="profile" onPress={() => navigation.navigate('profile')} />
    </HomeS>
  );
};

// Export
export default Home;
