import styled from 'styled-components';

const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const AlbumCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme, isNew }) => isNew ? '#4a5568' : theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ isNew, theme }) => isNew ? theme.colors.primary : 'transparent'};
  transition: all 0.3s;
`

const NoImage = styled.div`
  width: 150px;
  height: 150px;
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-style: italic;
  border-radius: 8px;
  margin: 0 auto 10px;
`

const RemoveButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #cc0000;
  }
`
export {
    Section,
    Title,
    Grid,
    AlbumCard,
    NoImage,
    RemoveButton
}