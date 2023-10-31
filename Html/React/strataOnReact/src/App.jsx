import { Side } from './components/Side'
import Styles from './App.module.css'
import { Head } from './components/Head'
import { Forms } from './components/Forms'

export function App() {

  return (
    <div className={Styles.fullContainer}>
      <Side />
      <div className={Styles.content}>
      <Head />
      <Forms/>
      </div>
    </div>
  )
}

