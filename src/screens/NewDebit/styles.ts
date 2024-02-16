import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const PADDING_BOX = 20;
const dimensions = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 0 20px 20px 20px;
  position: relative;

`;

export const ContainerSteps = styled.View`
  margin-top: 20px;
  padding: 0 10px;
  flex-direction: row;
  gap: 20px;
`;

export const ContainerForm = styled.View`
  margin-top: 20px;
`;

export const ContainerButton= styled.View`
  margin-top: 37px;
  flex: 1;
   justify-content: flex-end;
`;

export const ButtonAddAlly  = styled.TouchableOpacity`
  ${({ theme, disabled }) => css`
    margin-top: 22px;
    padding: 14px;
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: ${disabled ? theme.COLORS.GRAY_500 : theme.COLORS.BRAND_SECONDARY_MID};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `}
`;

export const TextButtonAddAlly  = styled.Text`
  ${({ theme, disabled }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${disabled ? theme.COLORS.GRAY_500 : theme.COLORS.BRAND_SECONDARY_MID};
    line-height: 24px;
 `}
`;

export const ContainerBottomSheet = styled.View`
  width: ${dimensions.width}px;
  height: 100%;
  position: absolute;
  bottom: 0;
  z-index: 999;
  left: 0;
`;

export const BottomSheetContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;


export const BottomSheetTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.LG)}px;
    color: ${theme.COLORS.GRAY_800};
    align-self: center;
    text-align: center;
  `}
`;

export const BackdropIcon = styled.View`
  padding: 20px;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY_LIGHT};
  align-items: center;
  justify-content: center;
`;

export const WrapperMessage = styled.View`
  gap: 10px;
`;

export const WrapperButtons = styled.View`
  gap: 10px;
  width: 100%;
`;

export const BottomSheetSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
    color: ${theme.COLORS.BRAND_SECONDARY_MID};
    align-self: center;
    text-align: center;
  `}
`;

