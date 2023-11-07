import { Side } from './components/Side'
import Styles from './App.module.css'
import { Head } from './components/Head'
import { Forms } from './components/Forms'
import { Tables } from './components/tables'
import { Rodape } from './components/Rodape'

export function App() {

  return (
    <div className={Styles.fullContainer}>
      <aside>
      <Side />
      </aside>
      <div className={Styles.content}>
        <Head />
        <Forms />
        <Tables />
        <Rodape />
      </div>
    </div>
  )
}

