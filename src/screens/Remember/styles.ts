import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

const dimensions = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 0 20px 20px 20px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const ContainerSteps = styled.View`
  margin-top: 20px;
  padding: 0 10px;
  flex-direction: row;
  gap: 20px;
`;

export const Footer = styled.View`
  gap: 10px;
`;


export const WrapperMain = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const FormContainer = styled.View`
  margin-top: 20px;
  gap: 20px;
`;

type FrequencyProps = {
  isFrequencySelected: boolean;
}

export const Frequency = styled.TouchableOpacity<FrequencyProps>`
  padding: 20px;
  background-color: ${({ theme, isFrequencySelected }) => isFrequencySelected ? theme.COLORS.BRAND_SECONDARY_LIGHT : theme.COLORS.GRAY_300};
  border-radius: 8px;
`;

export const FrequencyName = styled.Text<FrequencyProps>`
  ${({ theme, isFrequencySelected }) => css`
    font-family: ${isFrequencySelected ? theme.FONT_FAMILY.SEMI_BOLD : theme.FONT_FAMILY.REGULAR};         
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
    color: ${isFrequencySelected ? theme.COLORS.BRAND_SECONDARY_MID : theme.COLORS.GRAY_900 };
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

export const WrapperButtons = styled.View`
  gap: 10px;
  width: 100%;
`;

export const Badge = styled.View`
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY_MID};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BadgeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;