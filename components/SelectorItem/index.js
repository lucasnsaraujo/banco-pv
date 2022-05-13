import * as React from 'react';

import { Container, Title } from './styles'

export default function SelectorItem({title, selected, children, ...props}) {
    return (
      <>
        <Container selected={selected} {...props}>
          {children}
          <Title>{title}</Title>
        </Container>
      </>
    )
}