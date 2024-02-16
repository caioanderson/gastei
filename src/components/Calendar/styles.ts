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


export const InputCalendar = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_100};
    width: 100%;
    padding: 14px;
    border-radius: 6px;
    border: 1px solid ${theme.COLORS.GRAY_400};
  `}
`;

export const ResetValueButton = styled.TouchableOpacity``;

export const ContainerContentSelect = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Placeholder = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_900}
    font-family: ${theme.FONT_FAMILY.REGULAR};
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