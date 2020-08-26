import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { TechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, icons }: TechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {icons.map(({ name, icon }) => (
          <S.Icon key={name}>
            <S.Icons src={getImageUrl(icon.url)} alt={name} loading="lazy" />
            <S.IconsName>{name}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
