import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const ContainerHours = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const BackdropIcon = styled.View`
  padding: 20px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY_MID};
  align-items: center;
  justify-content: center;
`;

type HourProps = {
  isHourSelected: boolean;
}

export const WrapperHour = styled.TouchableOpacity<HourProps>`
  padding: 8px 18px;
  background-color: ${({ theme, isHourSelected }) => 
                        isHourSelected 
                        ? theme.COLORS.BRAND_SECONDARY_LIGHT 
                        : theme.COLORS.GRAY_300
                    };
  border-radius: 12px;
`;

export const HourName = styled.Text<HourProps>`
  ${({ theme, isHourSelected }) => css`
    font-family: ${isHourSelected ? theme.FONT_FAMILY.SEMI_BOLD : theme.FONT_FAMILY.REGULAR};         
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
    color: ${isHourSelected ? theme.COLORS.BRAND_SECONDARY_MID : theme.COLORS.GRAY_900 };
  `}
`;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    margin-top: 10px;
    margin-left: 5px;
    color: ${theme.COLORS.ATTENCION};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size:  ${theme.FONT_SIZE.XS}px;
  `}
`;