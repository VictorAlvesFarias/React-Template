import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupService } from '../services/signup-service';

interface SignupSchema {
    password: string
    passwordConfirm: string
    email: string
}

function Signup() {
    const signupService = new SignupService()

    const [loading, setLoading] = useState({
        signup: false
    })

    const loginSchema = z.object({
        email: z.string().nonempty("Campo Obrigatório").email("E-mail Inválido"),
        password: z.string().nonempty("Campo Obrigatório"),
        passwordConfirm: z.string().nonempty("Campo Obrigatório")
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
        <section className=" min-h-screen flex items-center ">

        </section>
    )
}

export default Signup

export {
    SignupSchema
}