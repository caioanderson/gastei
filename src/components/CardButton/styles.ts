import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BRAND_PRIMARY_MID};
  border-radius: 5px;
`;

export const WrapperContent = styled.View`
  width: 100%
  flex-direction: row;
  gap: 22px;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
`;

export const TextCard = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    color: ${theme.COLORS.GRAY_100};
  `}
`;