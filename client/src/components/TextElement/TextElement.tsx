import { classesBuilder } from './classesBuilder'

interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  type: 't1' | 't2' | 't3' | 'subtitle' | 'base' | 'small'
  children: React.ReactNode
  className?: string
}

// This is not an abstraction
const TextElement = ({ as = 'h1', children = '', className = '', type }: Props) => {
  const TagName = as
  const classNames = classesBuilder(type, className)
  return <TagName draggable="false" style={{userSelect: "none"}} className={classNames}>{children}</TagName>
}

export default TextElement