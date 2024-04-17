import React, { useContext, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'
import { zodResolver } from "@hookform/resolvers/zod"
import Input from '../components/Input'
import { Button } from '../components/Button'
import { Form } from '../components/Form'
import { Span } from '../components/Span'

function Login() {
  const [loginLoading, setLoginLoding] = useState(false)
  const formSchema = z.object({
    email: z.string().nonempty("Campo Obrigatório").email("E-Mail Inválido"),
    password: z.string().nonempty("Campo Obrigatório")
  })
  const { handleSubmit, formState: { errors }, register, setValue } = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
    }
  );
  const { signIn } = useContext(AuthContext)

  async function handleSingIn(data: any) {
    setLoginLoding(true)
    await signIn(data)
      .then(() => {
        setLoginLoding(false)
      })
      .catch(() => {
        setLoginLoding(false)
      })
  }

  return (
    <section className=" h-screen w-96 item">
      <Form onSubmit={handleSubmit(handleSingIn)}>
        <Input.Root>
          <Input.Label >Teste</Input.Label>
          <Input.Text mask={[/(\d{2})(\d{4,5})(\d{4})/,'($1) $2-$3']} register={register('email')} />
          <Span variation='error'>{errors.email?.message}</Span>
        </Input.Root>
        <Button>
          Teste
        </Button>
      </Form>

    </section>
  )
}

export default Login
