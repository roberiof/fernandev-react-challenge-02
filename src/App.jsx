import { login } from './utils';
import './index.css';
import { useEffect, useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equantovocê  está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorDiv , setErrorDiv] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect( () => {
    setErrorDiv('')
  }, [password, email])
  
  const handleLogin = () =>{
    setIsLoading(true)
    login({email, password})
    .then( () => alert('The login was successful!'))
    .catch(er => setErrorDiv(<div className='errorMessage'> {er.message} </div>))
    .finally( () => setIsLoading(false))
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {errorDiv}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={(e) =>  setEmail(e.target.value)}/>
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='button'>
          <button disabled={email === '' || password.length < 6 || isLoading} onClick={handleLogin}> Login </button>
        </div>
      </div>
    </div>
  );
}
