import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LeftSideBarItemWrapper = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 100%;
  justify-content: flex-start;
  padding: 10px 0;
  margin: 10px 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  border-radius: var(--brLight);

  strong {
    width: 190px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  &:focus {
    outline: 4px solid var(--almostTransparentOpposite);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &::before {
    content: '';
    width: ${props => props.$isCurrent ? '3px' : '0'};
    height: 20px;
    display: block;
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    background: var(--blue);
    border-radius: 10px;
    transition: 0.2s width;
  }

  &:hover::before {
    width: 5px;
    background: var(--red);
  }

  svg,
  strong {
    color: ${props => props.$isCurrent ? 'var(--blue)' : 'var(--text)'};
  }

  @media (max-width: 1000px) {
    strong {
      width: 100%;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`

export default LeftSideBarItemWrapper
