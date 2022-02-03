import { createContext, FormEvent, ReactNode, useContext, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface CarProviderProps {
  children: ReactNode
}

interface CarList {
  id: string
  title: string
  isRare: string
  fullThumbnail: string
  amount: number
  hqPrice: number
}

interface CarContext {
  handleAddToCar: (item: CarList) => void
  getCarList: () => void
  car: CarList[]
}



const CarContext = createContext<CarContext>({} as CarContext)

export function CarProvider({ children }: CarProviderProps) {
  const [car, setCar] = useState<CarList[]>([])

  const notifyAddToCarSuccess = () => toast("Adicionado com sucesso!", {
    autoClose: 3000,
    type: 'success',
    closeButton: true,
    theme: 'colored'
  })

  const notifyAddToCarError = () => toast("Erro ao adicionar!", {
    autoClose: 3000,
    type: 'error',
    closeButton: true,
    theme: 'colored'
  })

  function handleAddToCar(item: CarList) {

    const parseData = localStorage.getItem('car')
    let carList: any = []
    let dataString = ''

    const carItem = {
      id: item.id,
      title: item.title,
      isRare: item.isRare,
      fullThumbnail: item.fullThumbnail,
      amount: 1,
      hqPrice: item.hqPrice
    }

    try {
      if (parseData) {
        carList = JSON.parse(parseData)
        dataString = JSON.stringify([...carList, carItem])

      } else {
        dataString = JSON.stringify([carItem])
      }

      localStorage.setItem('car', dataString)

      notifyAddToCarSuccess()

    } catch (error) {
      notifyAddToCarError()
      console.log(error)
    }
  }

  function getCarList() {
    const getList: any = localStorage.getItem('car')

    if (getList) {
      setCar(JSON.parse(getList))
    }

    // setCar(getList)
  }

  return (
    <CarContext.Provider value={{ handleAddToCar, getCarList, car }}>
      {children}
    </CarContext.Provider>
  )
}

export function useCar() {
  const context = useContext(CarContext)

  return context
}