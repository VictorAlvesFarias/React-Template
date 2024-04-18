import React, { useContext } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'
import { zodResolver } from "@hookform/resolvers/zod"
import Input from '../components/Input'
import { Button } from '../components/Button'
import { Form } from '../components/Form'
import { Span } from '../components/Span'
import { Section } from '../components/Section'
import { useNavigate } from 'react-router-dom'

function Login() {
  const formSchema = z.object({
    email: z.string().nonempty("Campo Obrigatório").email("E-Mail Inválido"),
    password: z.string().nonempty("Campo Obrigatório")
  })
  const { handleSubmit, formState: { errors }, register } = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
    }
  );
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleSingIn(data: any) {
    navigate("/home")
    // setLoginLoding(true)
    // await signIn(data)
    //   .then(() => {
    //     setLoginLoding(false)
    //   })
    //   .catch(() => {
    //     setLoginLoding(false)
    //   })
  }

  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <Section>
        <Form onSubmit={handleSubmit(handleSingIn)}>
          <Input.Root>
            <Input.Label >E-Mail</Input.Label>
            <Input.Text register={register('email')} />
            <Span variation='error'>{errors.email?.message}</Span>
          </Input.Root>
          <Input.Root>
            <Input.Label >Senha</Input.Label>
            <Input.Text mask={[/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3']} register={register('password')} />
            <Span variation='error'>{errors.password?.message}</Span>
          </Input.Root>
          <Button>
            Teste
          </Button>
        </Form>
      </Section>
    </section>
  )
}

export default Login
