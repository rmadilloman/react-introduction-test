import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
`

const BackLink = styled.a`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.1rem;
`

const AlbumImage = styled.img`
  max-width: 400px;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  border-radius: 10px;
`

export {
    Container,
    BackLink,
    AlbumImage
}