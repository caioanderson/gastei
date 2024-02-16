import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components';

import { Container, ErrorMessage, Label, TextInput } from './styles';

export type InputProps = TextInputProps & {
  label: string;
  placeholder: string;
  hide: boolean;
  error?: string | undefined;
}

export function Input({ label, placeholder, hide, error, ...textInputProps } : InputProps) {
 
  const { COLORS } = useTheme();
 
  if(!hide) {
    return (
      <Container>
        <Label>{label}</Label>
        <TextInput 
          placeholder={placeholder}
          placeholderTextColor={COLORS.GRAY_900}
          {...textInputProps}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }

  return null;

}