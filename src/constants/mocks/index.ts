

export type TypeDebits = {
  id: number;
  name: string;
  group: string;
  value: number;
  isShared?: boolean;
  maturityDate?: string;
  myPercents?: string;
  remainingValue?: number;
}
export const debits: TypeDebits[] = [
  { id: 1, name: 'Aluguel', group: 'Familia', value: 1000, isShared: true },
  { id: 2, name: 'Condominio + gás', group: 'Familia', value: 416.90},
  { id: 3, name: 'Energia', group: 'Individual', value: 64},
  { id: 4, name: 'Internet', group: 'Familia', value: 130},
  { id: 5, name: 'Aleatório', group: 'Familia', value: 14},
]

export type CategoryType = {
  label: string;
  value: string;
}

export const categories: CategoryType[] = [
  { label: 'Casa', value:  '1' },
  { label: 'Alimentação', value:  '2' },
  { label: 'Entretenimento', value:  '3' },
]