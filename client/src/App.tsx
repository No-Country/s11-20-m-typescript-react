import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from '@/Components/Panel/Menu/Menu'
import TopBar from '@/Components/Panel/TopBar/TopBar'
import Landing from '@/Components/Landing/Landing'
import Donate from '@/pages/donate/page'
import Help from '@/Components/Help/Help'
import NotFound from './Components/NotFound/NotFound'
import './index.css'
import { NextUIProvider } from '@nextui-org/system'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/utils'

const App = () => (
  <ApolloProvider client={client}>
    <NextUIProvider>
      <BrowserRouter>
        <main style={{ display: 'flex', flexDirection: 'column' }}>
          <section style={{ display: 'flex', flexDirection: 'row' }}>
            <Menu />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#E5E5E5',
                width: '100%'
              }}
            >
              <TopBar />
              <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/help' element={<Help />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </section>
        </main>
      </BrowserRouter>
    </NextUIProvider>
  </ApolloProvider>
)

export default App
