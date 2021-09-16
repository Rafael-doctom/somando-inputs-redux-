import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import store from './store/store'
import {Provider} from 'react-redux'
import SomarInputs from './components/sum/sum'
export default function Home() {
  return (
    <Provider store ={store}>
      <div>
        <SomarInputs />
      </div>
    </Provider>
  )
}
