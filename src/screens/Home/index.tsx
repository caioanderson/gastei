import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from './Header';

import { 
  Container, 
  Line,
  Center,
  Main,
  ContainerCategories,
  Title,
  WrapperCategorie,
  CategorieName,
  ContainerDebits,
  ContainerItemDebit,
  WrapperInfoDebits,
  Debit,
  Group,
  DebitValue
} from './styles';


import { TypeDebits, debits } from '../../constants/mocks';

type Category = {
  id: number;
  name: string;
}

type RenderCategoriesProps = {
  item: Category;
}

type RenderDebitsProps = {
  item: TypeDebits;
}

export function Home() {

  const categories: Category[] = [
    { id: 1, name: 'Todos'},
    { id: 2, name: 'Casa' },
    { id: 3, name: 'Alimentação' },
    { id: 4, name: 'Entretenimento' },
  ]

  const navigation = useNavigation()

  const [categorieSelected, setCategorieSelected] = useState(categories[0])
  
  function renderCategories({ item }: RenderCategoriesProps) {
    return(
      <WrapperCategorie 
        key={item.id}
        isCategorieSelected={item.name === categorieSelected.name ? true : false}
        onPress={() => setCategorieSelected(item)}            
        >
        <CategorieName 
          isCategorieSelected={item.name === categorieSelected.name ? true : false}>
            {item.name}
          </CategorieName>
      </WrapperCategorie>
    )
  }

  function renderDebits({ item }: RenderDebitsProps) {

    function formmatNumber(value : number) {
      return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
      }).format(value)
    }

    return(
      <ContainerItemDebit 
        key={item.id}  
        onPress={() => navigation.navigate('debitdetail', { debit: item })}
        >
          <WrapperInfoDebits>
            <Debit>{item.name}</Debit>
            <Group>{item.group}</Group>
          </WrapperInfoDebits>

          <DebitValue>{formmatNumber(item.value)}</DebitValue>
      </ContainerItemDebit>
    )
  }

  return (
    <Container>
      <Header />

      <Center>
        <Line />
      </Center>

      <Main>
        <ContainerCategories>
          <Title>Meus gastos ainda não pagos 🥺</Title>

          <FlatList 
            data={categories}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderCategories}
            horizontal
            contentContainerStyle={{ paddingVertical: 10 }}
            showsHorizontalScrollIndicator={false}
          />

        </ContainerCategories>

        <ContainerDebits>
          <FlatList 
            data={debits}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 100 }}
            renderItem={renderDebits}
          />
        </ContainerDebits>

      </Main>

    </Container>
  );
}