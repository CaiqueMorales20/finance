// Imports
import {useNavigation} from '@react-navigation/native';

// Imported Components
import {Button} from '../../components/Button';

// Styled Components
import {LoginS, LoginText} from './style';

// Functional Component
const Login = () => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <LoginS>
      <LoginText>Login</LoginText>
      <Button title="Entrar" onPress={() => navigation.navigate('home')} />
    </LoginS>
  );
};

// Export
export default Login;
