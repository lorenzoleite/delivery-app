import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  background: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.white};
  
  font-family: ${props => props.theme.family.roboto};
  font-size: ${props => props.theme.size.buttonLg};
  font-weight: ${props => props.theme.weight.bold};
  
  line-height: ${props => props.theme.lineHeight.large};

  transition: 0.2s background;
  
  &:hover {
    background: ${props => props.theme.color.yellowDark};
  }
`;