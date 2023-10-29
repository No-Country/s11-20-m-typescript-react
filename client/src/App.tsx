import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HelpPage,
  DonatePage,
  NotFoundPage,
  LandingPage,
  LoginPage,
  RegisterPage,
  AuthLayout,
  EventsPage,
  AchievementsPage,
  BenefitsPage,
  HomePanelPage,
  ConfigurationPage,
  EventPage

} from '@/pages'
import { NextUIProvider } from '@nextui-org/system'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/services/api.service'
import { UtilRoutes } from '@/utils/routes.utils'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/context/providers/auth.provider'

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthProvider>
        <NextUIProvider>
          <main style={{ display: 'flex', flexDirection: 'column' }}>
            <Toaster richColors />
            <Routes>
              <Route path={UtilRoutes.HOME} element={<LandingPage />} />
              <Route path={UtilRoutes.DONATE} element={<DonatePage />} />
              <Route path={UtilRoutes.PANEL} element={<HomePanelPage />} />
              <Route
                path={UtilRoutes.CONFIGURATION}
                element={<ConfigurationPage />}
              />
              <Route path={UtilRoutes.HELP} element={<HelpPage />} />
              <Route
                path={UtilRoutes.ACHIEVEMENTS}
                element={<AchievementsPage />}
              />
              <Route path={UtilRoutes.EVENTS} element={<EventsPage />} />
              <Route path={`${UtilRoutes.EVENTS}/:id`} element={<EventPage />} />
              <Route path={UtilRoutes.BENEFITS} element={<BenefitsPage />} />
              <Route path='*' element={<NotFoundPage />} />
              <Route
                path={UtilRoutes.LOGIN}
                element={
                  <AuthLayout>
                    <LoginPage />
                  </AuthLayout>
                }
              />
              <Route
                path={UtilRoutes.REGISTER}
                element={
                  <AuthLayout>
                    <RegisterPage />
                  </AuthLayout>
                }
              />
            </Routes>
          </main>
        </NextUIProvider>
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>
)

export default App
