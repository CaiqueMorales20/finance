// Imports
import {useNavigation} from '@react-navigation/native';

// Imported Components
import {PageContainer} from '../../components/PageContainer';
import {Button} from '../../components/Button';

// Styled Components
import {HomeText} from './style';

// Functional Component
const Home = () => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <PageContainer>
      <HomeText>Home</HomeText>
      <Button title="profile" onPress={() => navigation.navigate('profile')} />
    </PageContainer>
  );
};

// Export
export default Home;
