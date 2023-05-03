// Imports
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

// Imported Components
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

// Styled Components
import {LoginContent, LoginS, LoginTitle} from './style';

// Functional Component
const Login = () => {
  // Variables
  const navigation = useNavigation<any>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Functions
  const onChangeUsername = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    setUsername(value);
  };

  const onChangePassowrd = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    setPassword(value);
  };

  useEffect(() => {
    console.log('username', username);
    console.log('password', password);
  }, [username, password]);

  const submit = () => {
    if (
      (username === 'Nicolli Morales' && password === 'muitogostosa') ||
      (username === 'Caique' && password === 'meuamor')
    ) {
      navigation.navigate('home');
    }
  };

  // Rendering
  return (
    <LoginS>
      <LoginContent>
        <LoginTitle>Finanças</LoginTitle>
        <Input
          onChange={onChangeUsername}
          value={username}
          placeholder="Usuário"
        />
        <Input
          onChange={onChangePassowrd}
          value={password}
          hide={true}
          placeholder="Senha"
        />
        <Button title="Entrar" onPress={submit} />
      </LoginContent>
    </LoginS>
  );
};

// Export
export default Login;
