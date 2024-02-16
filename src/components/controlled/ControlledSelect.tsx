import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';
import { Select, SelectRoot } from '../Select';

export function ControlledSelect<FormType extends FieldValues>({
  control, name, rules, data, label, hide, error, placeholder
}: UseControllerProps<FormType> & SelectRoot)  {
  return (
    <Controller 
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Select 
          data={data}
          label={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          hide={hide}
          error={error}
        />
      )}
    />
  );
}