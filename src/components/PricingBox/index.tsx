import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  installmentsNumber,
  installmentPrice,
  benefits,
  button
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{installmentsNumber}x de</span> R${installmentPrice}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      {benefits.map((item) => (
        <S.BenefitsItem
          key={item.title}
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
      ))}
    </S.BenefitsList>

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.text}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${installmentsNumber * installmentPrice}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
