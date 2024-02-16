import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const ResetValueButton = styled.TouchableOpacity``;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    margin-left: 5px;
    color: ${theme.COLORS.ATTENCION};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size:  ${theme.FONT_SIZE.XS}px;
  `}
`;