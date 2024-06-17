import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from 'react-router-dom';

function Home() {
  const { register, control, formState } = useForm(
    {
      resolver: zodResolver(
        z.object({
          test: z.object({
            value: z.string(),
            label: z.string()
          }),
        })),
    }
  );

  return (
    <div className='w-full h-full'>
      <Link to="teste"> Ir</Link>
    </div>
  )
}

export default Home