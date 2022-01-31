import '../styles/globals.css'
import type { AppProps } from 'next/app'

import store from '../Services/store'
import {Provider} from "react-redux"

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
