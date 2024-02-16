import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  gap: 4px;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => css`
    padding: 14px;
    border-radius: 6px;
    border: 1px solid ${theme.COLORS.GRAY_400};
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
  `}
`;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    margin-left: 5px;
    color: ${theme.COLORS.ATTENCION};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size:  ${theme.FONT_SIZE.XS}px;
  `}
`;