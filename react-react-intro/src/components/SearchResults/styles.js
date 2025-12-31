import styled from 'styled-components';

const Section = styled.section`
  margin: ${({ theme }) => theme.spacing.xl} 0;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`

const AlbumImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`

const StyledButton = styled.button`
  padding: 10px 20px;
  background: ${({ theme, variant }) =>
    variant === 'add' ? theme.colors.primary : '#444'};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'add' ? theme.colors.primaryHover : '#666'};
  }
`

const Message = styled.p`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  font-size: 1.2rem;
`

export {
    Section,
    Title,
    Grid,
    Card,
    AlbumImage,
    ButtonGroup,
    StyledButton,
    Message
}