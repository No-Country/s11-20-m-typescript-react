import { Footer, Header } from '@/components'
import FAQsSection from './_components/Faqs'
import FormSection from './_components/Form'

const Help = () => (
  <>
    <Header />
    <article className='py-[100px] flex flex-col items-center gap-16'>
      <FAQsSection />
      <FormSection />
    </article>
    <Footer />
  </>
)

export default Help
