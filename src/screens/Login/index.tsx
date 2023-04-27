// Imports
import {useNavigation} from '@react-navigation/native';

// Imported Components
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

// Styled Components
import {LoginContent, LoginS} from './style';

// Functional Component
const Login = () => {
  // Variables
  const navigation = useNavigation<any>();

  // Rendering
  return (
    <LoginS>
      <LoginContent>
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" />
        <Button title="Entrar" onPress={() => navigation.navigate('home')} />
      </LoginContent>
    </LoginS>
  );
};

// Export
export default Login;
