import { Menu, TopBar } from '@/components'

interface PanelProps {
  children: React.ReactNode | JSX.Element
  title: string
}

const PanelLayout = ({ children, title }: PanelProps) => (
  <section className='flex'>
    <Menu />
    <div className='flex w-full flex-col bg-[#e5e5e5] '>
      <TopBar title={title} />
      <div className='px-9 pb-10 w-full'>{children}</div>
    </div>
  </section>
)

export default PanelLayout
