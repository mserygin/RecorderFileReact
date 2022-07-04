import { Align } from '@shared/types'
import styled from 'styled-components'

export const TitleWrapper = styled.div<{align: Align; bottomGap: boolean | string; topGap: boolean | string; iconColor?: string}>`
  width: 100%;
  text-align: ${({ align }) => align};
  margin-bottom: ${({ bottomGap }) => (typeof bottomGap === 'string' ? bottomGap : bottomGap ? '1px' : '0')};
  margin-top: ${({ topGap }) => (typeof topGap === 'string' ? topGap : topGap ? '15px' : '0')};
  display: inline-flex;
  align-items: center;
  justify-content: ${({ align }) =>
          align ? (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : align) : 'center'};

  svg {
    min-width: 16px;
    margin-right: 4px;
    color: ${({ iconColor }) => !!iconColor && iconColor};
  }
`

export const RedStar = styled.span`
  color: var(--red);
  margin-right: 5px;
`

export const ChildrenWrapper = styled.div<{width?: string, colorText: string;}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ width }) => width};
  color: ${({ colorText }) => !!colorText && colorText};
`
