import styled from "styled-components"

export interface ContainerProps {
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 7px 14px;
  border: solid ${props => props.isError ? 'red' : 'green' } 1px;
  border-radius: 6px;
`;

export const Label = styled.label``;

export const Field = styled.input`
  height: 20px;
`;

export const ErrorMessage = styled.span`
  margin-top: 5px;
  color: red;
`;
