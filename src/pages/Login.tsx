import React, { useContext, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'
import { zodResolver } from "@hookform/resolvers/zod"
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'

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
      <Input.Root variation='default'>
        <Input.Label variation='default'>Teste</Input.Label>
        <Dropdown.Root
          register={register("email")}
          setValue={setValue}
          variation='default'
        >
          <Dropdown.Menu>
            <Dropdown.Option variation={'default'}value='' label='12345'/>
          </Dropdown.Menu>
        </Dropdown.Root>
      </Input.Root>

    </section>
  )
}

export default Login
