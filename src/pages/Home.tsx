import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Dropdown from '../components/Dropdown'
import Input from '../components/Input';

function Home() {
  const formSchema = z.object({
    email: z.string().nonempty("Campo Obrigatório").email("E-mail Inválido"),
  })
  const { handleSubmit, formState: { errors }, register, setValue} = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
    }
  );

  return (
    <div className='w-full h-full'>
    </div>
  )
}

export default Home