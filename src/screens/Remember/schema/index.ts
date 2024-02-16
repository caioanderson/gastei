import { z } from "zod"

export const rememberSchema = z.object({
  frequency: z.object({
    value: z.enum(['daily','monthly','weekly' ,'specific_day'],
      { 
        invalid_type_error: 'Selecione a frequência que deseja ser lembrado(a).',
        required_error: 'Selecione a frequência que deseja ser lembrado(a).'
      }),
    label: z.string(),
  }),
  quantity_months: z.string().optional(),
  day: z.string().optional(),
  hour: z.string({ required_error: 'Preciso saber o horário pra te lembrar.' }),
})
.refine(data => (data.frequency.value === 'monthly' && !data.quantity_months) === true ? false : true,
 { path: ['quantity_months'], message: 'Preciso saber a quantidade de meses.' })
.refine(data => 
  (data.frequency.value === 'monthly' && !data.day) === true ? false : true,
 { path: ['day'], message: 'Preciso saber o dia que quer ser lembrado(a)' })
.superRefine((fields, ctx) => {
  if(fields.quantity_months){
    const monthValue = fields.quantity_months?.includes(',') 
      ? parseFloat(fields.quantity_months.replace(',', '.'))
      : Number(fields.quantity_months)
  
    if(Number.isInteger(monthValue) === false){
      ctx.addIssue({
        path: ['quantity_months'],
        code: z.ZodIssueCode.custom,
        message: 'Digite um número sem ponto ou virgula.'
      })
    }
  }
})
.superRefine((fields, ctx) => {
  if(fields.day){
    const dayValue = fields.day?.includes(',') 
    ? parseFloat(fields.day.replace(',', '.'))
    : Number(fields.day)
  
    if(Number.isInteger(dayValue) === false){
      ctx.addIssue({
        path: ['day'],
        code: z.ZodIssueCode.custom,
        message: 'Digite um número sem ponto ou virgula.'
      })
    }
  }
})
.superRefine((fields, ctx) => {
  if(fields.day){
    if((Number(fields.day) < 1 && Number(fields.day) > 28 === false)){
      ctx.addIssue({
        path: ['day'],
        code: z.ZodIssueCode.custom,
        message: 'Digite um dia entre 1 e 28.'
      })
    }
  }
})
.transform(data => {
  if(data.frequency.value === 'monthly'){
    return {
      hour: data.hour,
      frequency: data.frequency,
      day: data.day,
      quantity_months: data.quantity_months
    }
  } else {
    return {
      hour: data.hour,
      frequency: data.frequency
    }
  }
})
