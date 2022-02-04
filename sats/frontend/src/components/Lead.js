import styled from 'styled-components/macro'

const StyledLead = styled.p`
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 2rem;
`

export default function Lead({ lead }) {
  return <StyledLead>{lead}</StyledLead>
}
