import styled from 'styled-components/macro'

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`

export default function Cards({ children }) {
  return <StyledCards>{children}</StyledCards>
}
