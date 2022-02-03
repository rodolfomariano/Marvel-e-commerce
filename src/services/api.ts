import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
})

const publicKey = process.env.NEXT_PUBLIC_KEY
const md5 = process.env.NEXT_PUBLIC_MD5
const ts = '1643628283'

export const apiAuthenticate = `?ts=${ts}&apikey=${publicKey}&hash=${md5}`

export const cepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws'
})
