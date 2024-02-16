import { Bar, Container } from './styles';

type MarkerStopProps = {
  active: boolean;
}

export function MarkerStep({ active }: MarkerStopProps) {
  return (
    <Container>
      <Bar active={active}/>
    </Container>
  );
}