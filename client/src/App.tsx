
import './App.css'
import './index.css'
import { AppRouter } from './routes/Routes'
import { Providers } from './providers/Providers'
function App() {

  return (
    <Providers>
      <AppRouter/>  
    </Providers>
  )
}

export default App
