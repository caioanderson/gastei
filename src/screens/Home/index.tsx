import { LinearGradient } from 'expo-linear-gradient';

import { Container, Header, Text } from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <LinearGradient
          // Background Linear Gradient
          colors={['#F8A836','rgba(248, 169, 54, 0.5)', 'transparent']}
          style={{ height: 100, width: '100%' }}
        />
      </Header>
    </Container>
  );
}