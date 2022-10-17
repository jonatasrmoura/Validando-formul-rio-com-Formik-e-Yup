import { InputHTMLAttributes } from "react";

import { Container, Label, Field, ErrorMessage } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  label: string;
  messageError?: string;
}

export function Input({ label, id, messageError, ...rest }: InputProps) {
  return (
    <Container isError={!!messageError}>
      <Label htmlFor={id}>{label}</Label>
      <Field id={id} { ...rest } />
      {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
    </Container>
  )
}
