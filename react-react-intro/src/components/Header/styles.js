import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};
`


export {
    HeaderWrapper,
    Title,
    Subtitle
}