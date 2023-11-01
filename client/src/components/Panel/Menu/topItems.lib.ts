import panel_light from '@/assets/botones/panel_light.png'
import panel_dark from '@/assets/botones/panel_dark.png'
import logros_light from '@/assets/botones/logros_light.png'
import logros_dark from '@/assets/botones/logros_dark.png'
import eventos_light from '@/assets/botones/eventos_light.png'
import eventos_dark from '@/assets/botones/eventos_dark.png'
import beneficios_light from '@/assets/botones/beneficios_light.png'
import beneficios_dark from '@/assets/botones/beneficios_dark.png'
import { UtilRoutes } from '@/utils/routes.utils'

export interface TopProps {
  ruta: string
  texto: string
  iconlight: string
  icondark: string
}

export const topItems: TopProps[] = [
  {
    ruta: UtilRoutes.PANEL,
    texto: 'Panel',
    iconlight: panel_light,
    icondark: panel_dark
  },
  {
    ruta: UtilRoutes.ACHIEVEMENTS,
    texto: 'Logros',
    iconlight: logros_light,
    icondark: logros_dark
  },
  {
    ruta: UtilRoutes.EVENTS,
    texto: 'Eventos',
    iconlight: eventos_light,
    icondark: eventos_dark
  },
  {
    ruta: UtilRoutes.BENEFITS,
    texto: 'Beneficios',
    iconlight: beneficios_light,
    icondark: beneficios_dark
  }
]
