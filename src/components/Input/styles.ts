import styled from "styled-components"

export interface ContainerProps {
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 10px 14px;
  border: solid ${props => props.isError ? 'red' : 'black' } 1px;
  border-radius: 6px;
`;

export const Label = styled.label``;

export const Field = styled.input<ContainerProps>`
  height: 24px;
  border: solid ${props => props.isError ? 'red' : 'black' } 1px;
`;

export const ErrorMessage = styled.span`
  margin-top: 6px;
  color: red;
`;
