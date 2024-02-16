import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';
import { Calendar, CalendarRoot } from '../Calendar';

export function ControlledCalendar<FormType extends FieldValues>({
   control, name, rules, boxProps, label, error, placeholder, isActive, forceActive
  }: UseControllerProps<FormType> & CalendarRoot) {
  return (
    <Controller 
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange } }) => (
          <Calendar 
            boxProps={boxProps}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            isActive={(active) => isActive(active)}
            error={error}
            forceActive={forceActive}
          />
      )}
    />
  );
}