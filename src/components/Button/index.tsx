import React from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <ButtonContainer>{children}</ButtonContainer>
  );
}