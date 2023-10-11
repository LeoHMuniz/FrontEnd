import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import styles from './components/App.module.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post name="Leo" content="Nothing" />
          <Post name="Julia" content="Nothing1" />
          <Post name="Rebeca" content="Nothing2" />
        </main>
      </div>

    </div>
  )
}

export default App
