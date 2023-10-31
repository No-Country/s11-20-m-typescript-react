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
  EventPage,
  PrivacyPage,
  TermsPage
} from '@/pages'
import { NextUIProvider } from '@nextui-org/system'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/services/api.service'
import { UtilRoutes } from '@/utils/routes.utils'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/context/providers/auth.provider'
import { RouterGuard } from './context/providers/router-guard.provider'

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
              <Route
                path={UtilRoutes.PANEL}
                element={
                  <RouterGuard>
                    <HomePanelPage />
                  </RouterGuard>
                }
              />
              <Route
                path={UtilRoutes.CONFIGURATION}
                element={
                  <RouterGuard>
                    <ConfigurationPage />
                  </RouterGuard>
                }
              />
              <Route path={UtilRoutes.HELP} element={<HelpPage />} />
              <Route
                path={UtilRoutes.ACHIEVEMENTS}
                element={
                  <RouterGuard>
                    <AchievementsPage />
                  </RouterGuard>
                }
              />
              <Route
                path={UtilRoutes.EVENTS}
                element={
                  <RouterGuard>
                    <EventsPage />
                  </RouterGuard>
                }
              />
              <Route
                path={`${UtilRoutes.EVENTS}/:id`}
                element={
                  <RouterGuard>
                    <EventPage />
                  </RouterGuard>
                }
              />
              <Route path={UtilRoutes.BENEFITS} element={<BenefitsPage />} />
              <Route
                path={UtilRoutes.EVENTS}
                element={
                  <RouterGuard>
                    <EventsPage />
                  </RouterGuard>
                }
              />
              <Route path={UtilRoutes.BENEFITS} element={<BenefitsPage />} />
              <Route path={UtilRoutes.PRIVACY} element={<PrivacyPage />} />
              <Route path={UtilRoutes.TERMS} element={<TermsPage />} />
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
