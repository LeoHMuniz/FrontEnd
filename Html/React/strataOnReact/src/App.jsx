import { Side } from './components/Side'
import Styles from './App.module.css'
import { Head } from './components/Head'

export function App() {

  return (
    <div className={Styles.fullContainer}>
      <Side />
      <div className={Styles.content}>
      <Head />
      </div>
    </div>
  )
}

