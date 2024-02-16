import { useMemo, ReactNode } from 'react';
import { View } from 'react-native';
import BottomSheet, { useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet';
import { Backdrop, Center, Container, Line } from './styles';

type SheetType = {
  children?: ReactNode;
  onClose?: () => void;
  type?: 'warning'| 'info'
}

export function Sheet({ children, onClose, type = 'info' }: SheetType){

  const snapPoints = useMemo(() => ['25%', '50%', '60%'], []);
  
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 20,
    stiffness: 100,
    mass: 1,
    overshootClamping: false,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1
  })

  return (
    <BottomSheet
      index={2}
      snapPoints={snapPoints}
      style={{ flex: 1 }}
      backgroundStyle={{ backgroundColor: 'transparent' }}
      animationConfigs={animationConfigs}
      onClose={onClose}
      backdropComponent={() => <Backdrop />
      }
      handleIndicatorStyle={{ display: 'none' }}
      >
      <Container bottomSheetType={type}>
        <Center>
          <Line />
        </Center>

        {children}
      </Container>
    </BottomSheet>
  )
}