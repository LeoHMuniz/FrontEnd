import { Header } from './components/Header'
import { Post } from './components/Post'


function App() {
  return (
    <div>
      <Header />
      <Post name="Leo" content="Nothing" />
      <Post name="Julia" content="Nothing1" />
      <Post name="Rebeca" content="Nothing2" />
    </div>
  )
}

export default App
