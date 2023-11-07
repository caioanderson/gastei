import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 4px;
`;

export const Content = styled.View`
  width: 80%;
  flex-direction: row;
  gap: 12px;
  justify-content: space-evenly;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-size: ${({ theme }) => RFValue(theme.FONT_SIZE.MD)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;