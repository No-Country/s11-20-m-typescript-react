import { Menu, TopBar } from '@/components'

interface PanelProps {
  children: React.ReactNode | JSX.Element
}

const PanelLayout = ({ children }: PanelProps) => (
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
      {children}
    </div>
  </section>
)

export default PanelLayout
