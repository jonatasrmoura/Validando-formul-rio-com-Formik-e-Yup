import type { NextPage } from 'next';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Input } from '../components/Input';
import { Container } from '../styles';

interface UserProps {
  name: string;
  email: string;
  password: string;
}

const initialValues: UserProps = {
  name: '',
  email: '',
  password: '',
} 

const SignupSchema = yup.object().shape({
  name: yup.string().min(4, 'Nome muito curto!').max(50, 'Nome muito longo!').required('Preencha com um nome'),
  email:  yup.string().email('E-mail inválido!').required('Preencha com um e-mail válido!'),
  password: yup.string().min(6, 'Senha muito curta!').required('Preencha com sua senha'),
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

      <button type='submit'>
        Cadastrar
      </button>
    </Container>
  )
}

export default Home;
