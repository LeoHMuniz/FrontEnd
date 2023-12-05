import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('O nome é necessário para continuarmos')
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string().nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
    .refine(email => {
      return email.endsWith('@hotmail.com')
    }, 'O e-mail precisa ser hotmail'),
  password: z.string().
    min(6, 'A senha precisa de no mínimo 6 caracteres'),
  techs: z.array(z.object({
    title: z.string()
      .nonempty('O título é obrigatório'),
    knowledge: z.coerce.number()
      .min(1).max(100)
  })).min(2, 'Insira ao menos 2 (duas) tecnologias'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>

export function App() {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs',
  })

  function createUser(data: createUserFormData) {
    setOutput(JSON.stringify(data, null, 2))
  }

  function addNewTech() {
    append({ title: '', knowledge: 0 })
  }

  return (
    <main className="h-screen bg-zinc-900 flex flex-col gap-10 items-center justify-center text-zinc-50">
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="">Nome</label>
          <input
            type="name"
            className="border  border-zinc-500 shadow-sm rounded h-10 px-3 bg-zinc-700"
            {...register('name')}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="">E-mail</label>
          <input
            type="email"
            className="border  border-zinc-500 shadow-sm rounded h-10 px-3 bg-zinc-700"
            {...register('email')}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="">Senha</label>
          <input
            type="password"
            className="border  border-zinc-500 shadow-sm rounded h-10 px-3 bg-zinc-700"
            {...register('password')}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="flex justify-between items-center"
            htmlFor="">
            Tecnologias
            <button
              type="button"
              className='text-emerald-500 text-sm '
              onClick={addNewTech}
            >Adicionar</button></label>
          {errors.techs && <span className="text-red-500">{errors.techs.message}</span>}
          {fields.map((field, index) => {
            return (
              <div
                className="flex gap-4"
                key={field.id}>
                <div className="flex flex-1 flex-col gap-1">
                  <input
                    type="text"
                    className="border  border-zinc-500 shadow-sm rounded h-10 px-3 bg-zinc-700"
                    {...register(`techs.${index}.title`)}
                  />

                  {errors.techs?.[index]?.title && <span className="text-red-500">{errors.techs?.[index]?.title?.message}</span>}
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <input
                    type="number"
                    className="border w-24 border-zinc-500 shadow-sm rounded h-10 px-3 bg-zinc-700"
                    {...register(`techs.${index}.knowledge`)}
                  />
                  {errors.techs?.[index]?.knowledge && <span className="text-red-500">{errors.techs?.[index]?.knowledge?.message}</span>}
                </div>
              </div>
            )
          })}
        </div>

        <button
          type="submit"
          className="bg-emerald-500 rounded font-semibold  h10 hover:bg-emerald-700"
        >
          Salvar
        </button>
      </form>
      <pre>
        {output}
      </pre>

    </main>
  )

}

export default App
