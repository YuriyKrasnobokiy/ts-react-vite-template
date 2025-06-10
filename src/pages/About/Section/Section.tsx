import React from 'react'
import { SectionWrapper } from './Section.styled';

interface sectionProps {
  id: string,
  count: number,
}

const Section: React.FC<sectionProps> = ({count, id}) => {
  return (
    <SectionWrapper id={id}>
      <h2>Section {count}</h2>
    </SectionWrapper>
  )
}

export default Section;