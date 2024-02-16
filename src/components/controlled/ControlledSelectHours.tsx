import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';
import { SelectHours, SelectHoursRoot } from '../SelectHours';

export function ControlledSelectHours<FormType extends FieldValues>({
  control, name, rules, label, hide, error
}: UseControllerProps<FormType> & SelectHoursRoot)  {
  return (
    <Controller 
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <SelectHours
          label={label}
          value={value}
          onChange={onChange}
          hide={hide}
          error={error}
        />
      )}
    />
  );
}