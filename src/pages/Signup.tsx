import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupService } from '../services/signup-service';
import { Form } from '../components/form';
import Input from '../components/input';
import { Span } from '../components/span';
import { Button } from '../components/button';
import { LucideCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../components/section';

interface SignupSchema {
    password: string
    passwordConfirm: string
    email: string
    name: string
    phone: string
}

function Signup() {
    const signupService = new SignupService()

    const [loading, setLoading] = useState({
        signup: false
    })

    const loginSchema = z.object({
        email: z.string().nonempty("Campo Obrigatório").email("E-mail Inválido"),
        password: z.string().nonempty("Campo Obrigatório"),
        passwordConfirm: z.string().nonempty("Campo Obrigatório"),
        name: z.string().nonempty("Campo Obrigatório"),
        phone: z.string().nonempty("Campo Obrigatório"),
    })

    const { handleSubmit, formState: { errors }, register } = useForm<SignupSchema>(
        {
            resolver: zodResolver(loginSchema)
        }
    );

    function handleSingup(data) {
        setLoading({ ...loading, signup: true })
        signupService.signupPost(data)
            .then(() => {
                setLoading({ ...loading, signup: false })
            })
    }

    return (
        <section className="min-h-screen flex-col w-full flex items-center justify-center gap-6 bg-zinc-100 p-3">
            <Section>
                <div className='flex items-center justify-center gap-6 flex-col'>
                    <h1 className='font-semibold text-2xl'>Criar Conta</h1>
                    <div className='gap-3 flex flex-col bg-white shadow-sm rounded sm:px-12 px-6 py-12  sm:w-fit w-full   '>
                        <Form onSubmit={handleSubmit(handleSingup)}>
                            <Input.Root>
                                <Input.Label>Name</Input.Label>
                                <Input.Text placeholder='E-Mail' config={register('name')} />
                                <Span variation='error'>{errors.name?.message}</Span>
                            </Input.Root>
                            <Input.Root>
                                <Input.Label>E-Mail</Input.Label>
                                <Input.Text placeholder='E-Mail' config={register('email')} />
                                <Span variation='error'>{errors.email?.message}</Span>
                            </Input.Root>
                            <Input.Root>
                                <Input.Label >Phone</Input.Label>
                                <Input.Text placeholder='Senha' config={register('passwordConfirm')} />
                                <Span variation='error'>{errors.password?.message}</Span>
                            </Input.Root>
                            <Input.Root>
                                <Input.Label >Password</Input.Label>
                                <Input.Text placeholder='Senha' config={register('password')} />
                                <Span variation='error'>{errors.password?.message}</Span>
                            </Input.Root>
                            <Input.Root>
                                <Input.Label >Confirm Password</Input.Label>
                                <Input.Text placeholder='Senha' config={register('passwordConfirm')} />
                                <Span variation='error'>{errors.password?.message}</Span>
                            </Input.Root>
                            <Button loading={loading.signup}>
                                Criar
                            </Button>
                        </Form>
                    </div>
                    <div className='flex gap-1 text-sm flex-wrap'>
                        <p>Já possui uma conta?</p>
                        <Link className='text-indigo-700 font-semibold' to={"/login"}>Clique aqui</Link>
                    </div>
                </div>
            </Section>
        </section>

    )
}

export default Signup

export {
    SignupSchema
}