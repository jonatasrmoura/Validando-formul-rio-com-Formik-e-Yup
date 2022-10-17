import type { NextPage } from 'next';
import { useFormik } from 'formik';
import { string, SchemaOf, object, ref } from 'yup';

import { Input } from '../components/Input';
import { Container } from '../styles';

interface UserProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: UserProps = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignupSchema: SchemaOf<UserProps> = object({
  name: string().min(4, 'Nome muito curto!').max(50, 'Nome muito longo!').required('Preencha com um nome'),
  email:  string().email('E-mail inválido!').required('Preencha com um e-mail válido!'),
  password: string().min(6, 'Senha muito curta!').required('Preencha com sua senha'),
  confirmPassword: string().oneOf([
    null, ref<string>('password')
  ], 'As senhas precisam ser iguais!').required('Confirme sua senha!')
});

const onSubmit = (values: UserProps) => {
  console.log(values);
}

const Home: NextPage = () => {
  const formik = useFormik<UserProps>({
    initialValues,
    validationSchema: () => SignupSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <h1>Formulário para testar erro</h1>

      <Input 
        id="name" 
        name='name'
        label='Nome' 
        placeholder='Digite seu nome' 
        value={formik.values.name} 
        onChange={formik.handleChange}
        messageError={formik.errors.name}
      />
      <Input 
        id="email" 
        name='email'
        type="email" 
        label='E-mail' 
        placeholder='Digite seu e-mail'
        value={formik.values.email} 
        onChange={formik.handleChange}
        messageError={formik.errors.email}
      />
      <Input
        id="password"
        name='password'
        type="password" 
        label='Senha' 
        placeholder='Digite sua senha'
        value={formik.values.password} 
        onChange={formik.handleChange}
        messageError={formik.errors.password}
      />
      <Input
        id="confirmPassword"
        name='confirmPassword'
        type="password" 
        label='Confirmar senha' 
        placeholder='Digite sua senha'
        value={formik.values.confirmPassword} 
        onChange={formik.handleChange}
        messageError={formik.errors.confirmPassword}
      />

      <button type='submit'>
        Cadastrar
      </button>
    </Container>
  )
}

export default Home;
