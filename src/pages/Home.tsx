import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';

function Home() {
  const formSchema = z.object({
    test: z.object({
      value: z.string(),
      label: z.string()
    }),
  })
  const formTest = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
    }
  );

  return (
    <div className='w-full h-full'>
      <Input.Root variation='default'>
        <Input.Label variation='default'>Teste</Input.Label>
        <Controller
          control={formTest.control}
          name="test"
          render={({ field,field: { onChange, onBlur, value, ref } }) => (
            <Dropdown.Root
              register={field}
              variation='default'
            >
              <Dropdown.Menu >
                <Dropdown.Option onClick={onChange} value='12312' label='1234534534345' />
                <Dropdown.Option onClick={onChange} value='12312321' label='12345' />
              </Dropdown.Menu>
            </Dropdown.Root>
          )}
        />
      </Input.Root>
    </div>
  )
}

export default Home