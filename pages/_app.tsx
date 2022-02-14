import '../styles/globals.css'
import type { AppProps } from 'next/app'

import store from '../Services/store'
import {Provider} from "react-redux"

import axios from "axios"
axios.defaults.baseURL = "http://localhost:3333"
// axios.defaults.baseURL = "http://localhost:3333/api"

store.subscribe(()=>{
  console.log(store.getState());
})

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
    return (
    <>
    <Provider store={store}>

      <Component {...pageProps} />

    </Provider>
    </>
  )
}

export default MyApp
