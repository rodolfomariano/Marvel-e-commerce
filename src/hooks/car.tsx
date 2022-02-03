import { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useCep } from './cep'

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
  subTotalCalc: () => void
  setCar: (item: CarList[]) => void
  removeItem: (id: string) => void
  setCoupon: (coupon: string) => void
  car: CarList[]
  subTotal: number
  total: number
  coupon: 'rare' | 'common' | string
}



const CarContext = createContext<CarContext>({} as CarContext)

export function CarProvider({ children }: CarProviderProps) {
  const [car, setCar] = useState<CarList[]>([])
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [coupon, setCoupon] = useState('')

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

        setCar([...carList, carItem])

      } else {
        dataString = JSON.stringify([carItem])
        setCar([carItem])
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

  }

  function removeItem(id: string) {
    const withoutTheItem = car.filter(item => item.id !== id && item)

    localStorage.setItem('car', JSON.stringify(withoutTheItem))
    setCar(withoutTheItem)
  }

  function subTotalCalc() {

    const calc = car.reduce((sumTotal, product) => {
      return sumTotal += product.hqPrice * product.amount
    }, 0)

    setSubTotal(calc)

    return calc
  }

  function totalCalc() {

    const calc = car.reduce((sumTotal, product) => {
      return sumTotal += (product.isRare === 'true'
        ? coupon === 'rare' ? product.hqPrice - (product.hqPrice * 0.1) : product.hqPrice
        : coupon === 'common' ? product.hqPrice - (product.hqPrice * 0.2) : product.hqPrice
      ) * product.amount
    }, 0)

    setTotal(calc)

    return calc

  }

  useEffect(() => {

  }, [])

  console.log(total)

  useEffect(() => {
    totalCalc()
  }, [coupon, subTotal])



  return (
    <CarContext.Provider value={{
      handleAddToCar,
      getCarList,
      car,
      subTotal,
      subTotalCalc,
      setCar,
      removeItem,
      total,
      coupon,
      setCoupon
    }}>
      {children}
    </CarContext.Provider>
  )
}

export function useCar() {
  const context = useContext(CarContext)

  return context
}