// Imported Components
import {PageContainer} from '../../components/PageContainer';
import {Welcome} from './components/Welcome';

// Styled Components
import {HomeS} from './style';

// Functional Component
const Home = () => {
  // Rendering
  return (
    <PageContainer>
      <HomeS>
        <Welcome />
      </HomeS>
    </PageContainer>
  );
};

// Export
export default Home;
