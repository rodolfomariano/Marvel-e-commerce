import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { cepAPI } from '../services/api'

import { ToastContainer, toast } from 'react-toastify'

interface CepProviderProps {
  children: ReactNode
}

interface CEP {
  bairro: string
  localidade: string
  logradouro: string
  uf: string
}

interface CepContextData {
  inputCEP: string
  foundCEP: CEP
  searchingCEP: boolean
  freightValue: number
  setInputCEP: (cep: string) => void
  handleFindCEP: (cep: string) => void
}


const CepContext = createContext<CepContextData>({} as CepContextData)

export function CepProvider({ children }: CepProviderProps) {
  const [inputCEP, setInputCEP] = useState('')
  const [foundCEP, setFoundCEP] = useState<CEP>({} as CEP)
  const [searchingCEP, setSearchingCEP] = useState(false)
  const [freightValue, setFreightValue] = useState(0)

  const notifyCepError = () => toast("Digite um CEP valido!", {
    autoClose: 3000,
    type: 'error',
    closeButton: true,
    theme: 'colored'
  })

  function handleFindCEP(cep: string) {

    setSearchingCEP(true)

    if (cep === '') {
      setSearchingCEP(false)
      return
    }

    cepAPI.get(`${cep ? cep : '00000000'}/json/`)
      .then(response => {
        const { bairro, localidade, logradouro, uf } = response.data as CEP

        setTimeout(() => {
          setFoundCEP({
            bairro,
            localidade,
            logradouro,
            uf
          })
          localStorage.setItem('cep', cep)

          setFreightValue(8.00)
          setSearchingCEP(false)

        }, 3000)

      }).catch(error => {
        console.log(error)
        setSearchingCEP(false)

        notifyCepError()
      })

    setInputCEP('')
  }

  useEffect(() => {
    const findCEP = localStorage.getItem('cep')

    findCEP && handleFindCEP(findCEP)

  }, [])

  return (
    <CepContext.Provider value={{ inputCEP, setInputCEP, handleFindCEP, foundCEP, searchingCEP, freightValue }}>
      {children}
    </CepContext.Provider>
  )
}

export function useCep() {
  const context = useContext(CepContext)

  return context
}