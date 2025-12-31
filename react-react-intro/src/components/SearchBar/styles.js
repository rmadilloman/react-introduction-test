import styled from 'styled-components';

const Form = styled.form`
  margin: ${({ theme }) => theme.spacing.xl} auto;
  max-width: 600px;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: 1.1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: #aaa;
  }
`

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`

export {
    Form,
    Input,
    Button
}