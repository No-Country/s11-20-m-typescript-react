import { Accordion, AccordionItem } from '@nextui-org/react'
import { questionsAnswer } from '../questionAnswer.lib'
import { TextElement } from '@/components'

const FAQsSection = () => (
  <section className='section-reduced flex flex-col gap-4'>
    <TextElement type='t2' as='h2' className='font-semibold'>
      Preguntas frecuentes
    </TextElement>
    <Accordion>
      {questionsAnswer.map((item, index) => (
        <AccordionItem key={index} title={item.question}>
          {item.answer}
        </AccordionItem>
      ))}
    </Accordion>
  </section>
)

export default FAQsSection
