import React from 'react'
import { useContext, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from 'react-router-dom'
import { LucideCheck } from 'lucide-react'
import { AuthContext } from 'react-toolkit'
import Form from '../../../components/form';
import Button from '../../../components/button';
import InputRoot from '../../../components/input-root'
import Span from '../../../components/span'
import Label from '../../../components/label'
import InputText from '../../../components/input-text'
import Section from '../../../components/section'
import Checkbox from '../../../components/checkbox'
import { signupService } from '../../../services/signup-service'

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
    signupService.signupPost(data)
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
      <Section>
        <div className='flex items-center justify-center gap-6 flex-col'>
          <div className='gap-3 flex flex-col bg-white shadow-sm rounded sm:px-12 px-6 py-12  sm:w-fit w-full   '>
            <Form onSubmit={handleSubmit(handleSingIn)}>
              <h1 className='font-semibold text-2xl'>Criar conta</h1>
              <InputRoot>
                <Label>Nome</Label>
                <InputText placeholder='Nome' {...register('email')} />
                <Span variation='error'>{formState.errors.email?.message}</Span>
              </InputRoot>
              <InputRoot>
                <Label>Sobrenome</Label>
                <InputText placeholder='Sobrenome' {...register('email')} />
                <Span variation='error'>{formState.errors.email?.message}</Span>
              </InputRoot>
              <InputRoot>
                <Label>E-Mail</Label>
                <InputText placeholder='E-Mail' {...register('email')} />
                <Span variation='error'>{formState.errors.email?.message}</Span>
              </InputRoot>
              <InputRoot>
                <Label>Telefone</Label>
                <InputText placeholder='Telefone' {...register('email')} />
                <Span variation='error'>{formState.errors.email?.message}</Span>
              </InputRoot>
              <InputRoot>
                <Label >Senha</Label>
                <InputText placeholder='Senha' {...register('password')} />
                <Span variation='error'>{formState.errors.password?.message}</Span>
              </InputRoot>
              <InputRoot>
                <Label >Confirmar senha</Label>
                <InputText placeholder='Confimar senha' {...register('password')} />
                <Span variation='error'>{formState.errors.password?.message}</Span>
              </InputRoot>
              <Button loading={loading.login}>
                Entrar
              </Button>
            </Form>
          </div>
          <div className='flex gap-1 text-sm flex-wrap'>
            <p>Já possui uma conta?</p>
            <Link className='text-indigo-700 font-semibold' to={"/login"}>Fazer login</Link>
          </div>
        </div>
      </Section>
    </section>
  )
}

export default Login

export {
  LoginSchema
}
