import moment from "moment";
import { z } from "zod";

export const debitFormSchema = z.object({
  name: z.string({ 
      required_error: 'Preciso saber do nome do gasto.',
      invalid_type_error: 'Preciso que use palavras.'
    }).nonempty({
      message: 'Utilize pelo menos um caractere.'
  }),
  value: z.string({ 
      required_error: 'Preciso saber do valor do gasto.',
    }).nonempty({ message: 'Digite um valor pro gasto.' })
      .transform(item => Number(item)),
  day_payment: z.string({ required_error: 'Preciso saber da data do gasto.' })
    .nonempty({ message: 'Preciso saber da data do gasto.' })
    .transform(item => moment(item, 'DD-MM-YYYY')),
  category: z.object({ label: z.string().nullable(), value: z.string().nullable()
  }, { 
    invalid_type_error: 'Selecione uma categoria.', 
    required_error: 'Selecione uma categoria.' 
  })
    .refine(value => value.value !== null, { message: 'Selecione uma categoria.' }),
})