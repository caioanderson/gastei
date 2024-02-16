import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
`;


export const Wrapper = styled.View`
  flex: 1;
  margin: 24px 30px; 
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  align-items: center;
  width: 100%;
  gap: 17px;
`;
export const HeaderMain = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.XL)}px;
    color: ${theme.COLORS.GRAY_800};
    align-self: center;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.XXS)}px;
    color: ${theme.COLORS.BRAND_SECONDARY_MID};
    align-self: center;
  `}
`;

export const Footer = styled.View`
  align-self: center;
`;

export const ContainerFlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TextDayAndValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const DeleteExpenseButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const DeleteExpenseTextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    color: ${theme.COLORS.ATTENCION};
  `}
`;

export const Main = styled.View`
  padding: 10px 0; 
  flex: 1;
  align-items: center;
  justify-content: space-around;

`;

export const MainInfo = styled.View`
  
`;

export const TextInfoPercents = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
    color: ${theme.COLORS.GRAY_900};
    align-self: center;
  `}
`

export const TextInfoValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    color: ${theme.COLORS.GRAY_900};
    align-self: center;
  `}
`; 

export const Question = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    color: ${theme.COLORS.GRAY_900};
    align-self: center;
  `}
`;

export const ContainerButtons = styled.View`
  /* width: 100%; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  padding: 20px 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_PRIMARY_LIGHT};
`;

export const ConfirmTextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const NotYetButton = styled.TouchableOpacity`
  padding: 20px 50px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const NotYetTextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;






