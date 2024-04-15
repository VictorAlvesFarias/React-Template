import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupService } from './../services/SignupService';
import Button from '../components/Button'

function Signup() {
    const [loginLoading, setLoginLoding] = useState(false)
    const [signUpSuccefull, setSignUpSuccefull] = useState(false)
    const signupService = new SignupService()
    const formSchema = z.object({
        email: z.string().nonempty("Campo Obrigatório").email("E-mail Inválido"),
        password: z.string().nonempty("Campo Obrigatório"),
        passwordConfirm: z.string().nonempty("Campo Obrigatório")
    })
    const { handleSubmit, formState: { errors }, register } = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
        }
    );

    function handleSingup(data) {
        setLoginLoding(true)
        signupService.signupPost(data)
            .then(() => {
                setLoginLoding(false)
                setSignUpSuccefull(true)
            })
            .catch(() => {
                setLoginLoding(false)
            })
    }

    return (
        <section className=" min-h-screen flex items-center ">
            <div className="flex flex-col items-center h-full w-full justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Enfermagem
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Cadastre-se
                        </h1>
                        {!signUpSuccefull ?
                            <form onSubmit={handleSubmit(handleSingup)} className="space-y-4 md:space-y-6" action="#">
                                <Input register={register('email')} placeholder='Teste' variation='default' />
                                <Input register={register('password')} variation='default' />
                                <Input register={register('passwordConfirm')} variation='default' />
                                <Button variation='green' loading={loginLoading} >Teste</Button>
                            </form> :
                            <div className='text-white'>
                                <p>Conta criada com sucesso</p>
                            </div>
                        }
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Entrar</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Signup