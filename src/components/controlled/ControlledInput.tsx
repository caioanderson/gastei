import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';
import { Input, InputProps } from '../Input';

export function ControlledInput<FormType extends FieldValues>({
   control, name, rules, error, ...textInputProps
  }: UseControllerProps<FormType> & InputProps) {
  return (
    <Controller 
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur } }) => (
        <Input 
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error}
          {...textInputProps}
          />
      )}
    />
  );
}