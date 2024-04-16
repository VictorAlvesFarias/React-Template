import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Input} from '../components/Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupService } from './../services/SignupService';
import {Button} from '../components/Button'

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

        </section>

    )
}

export default Signup