import React from 'react'
import Input from '../components/input'
import { useContext, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/auth-context'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '../components/button'
import { Form } from '../components/form'
import { Span } from '../components/span'
import { Link } from 'react-router-dom'
import { LucideCheck } from 'lucide-react'

interface LoginSchema {
  email: string
  password: string
}

function Login() {
  const [rememberMe, setRemeberMe] = useState(localStorage.getItem("remember-me") == "true")
  const context = useContext(AuthContext)

  const [loading, setLoading] = useState({
    login: false
  })

  const loginSchema = z.object({
    email: z.string().nonempty("Campo Obrigatório").email("E-Mail Inválido"),
    password: z.string().nonempty("Campo Obrigatório"),
  })

  const { register, control, formState, handleSubmit } = useForm<LoginSchema>(
    {
      resolver: zodResolver(loginSchema),
    }
  );

  function handleSingIn(data: any) {
    setLoading({ ...loading, login: true })
    context.signIn(data)
      .then(() => {
        setLoading({ ...loading, login: false })
      })
  }

  function handleSetRememberMe() {
    setRemeberMe(!rememberMe)
    localStorage.setItem("remember-me", String(!rememberMe))
  }

  return (
    <section className="min-h-screen flex-col w-full flex items-center justify-center gap-6 bg-zinc-100 p-3">
      <h1 className='font-semibold text-2xl'>Bem vindo</h1>
      <div className='gap-3 flex flex-col bg-white shadow-sm rounded sm:px-12 px-6 py-12  sm:w-fit w-full   '>
        <Form onSubmit={handleSubmit(handleSingIn)}>
          <Input.Root>
            <Input.Label>E-Mail</Input.Label>
            <Input.Text placeholder='E-Mail' config={register('email')} />
            <Span variation='error'>{formState.errors.email?.message}</Span>
          </Input.Root>
          <Input.Root>
            <Input.Label >Senha</Input.Label>
            <Input.Text placeholder='Senha' config={register('password')} />
            <Span variation='error'>{formState.errors.password?.message}</Span>
          </Input.Root>
          <Button loading={loading.login}>
            Entrar
          </Button>
        </Form>
        <Input.Root variation='row'>
          <Input.Checkbox config={{ value: rememberMe, onChange: handleSetRememberMe, }}>
            <LucideCheck className='w-3 h-3' />
          </Input.Checkbox>
          <Input.Label variation='row'>Manter Conectado</Input.Label>
        </Input.Root>
      </div>
      <div className='flex gap-1 text-sm flex-wrap'>
        <p>Não possui uma conta?</p>
        <Link className='text-indigo-700 font-semibold' to={"/signup"}>Clique aqui</Link>
      </div>
    </section>
  )
}

export default Login

export {
  LoginSchema
}
