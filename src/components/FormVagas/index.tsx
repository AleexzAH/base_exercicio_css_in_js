import { FormEvent, useState } from 'react'

import { FormularioC, BtnC, CampoC } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioC onSubmit={aoEnviarForm}>
      <CampoC
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnC type="submit">Pesquisar</BtnC>
    </FormularioC>
  )
}
export default FormVagas
