import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const dimensions = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;
  `;

export const HeaderContent = styled.View`
  width: 100%;
  padding: 15px ${RFValue(30)}px;
`;

export const WrapperWelcomeUserContainer = styled.View`
  width: '100%';
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WelcomeUserContainer = styled.View`
  flex-direction: column;
` 

export const HiUser = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.XL)}px;
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
  `}

`;

export const ContainerCards = styled.ScrollView`

`;

export const WrapperImage = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
`

export const Text = styled.Text`
`;

export const Card = styled.TouchableOpacity`
  padding: 24px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 5px;
  gap: 22px;
  /* gap: 22px; */

  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY_MID};

`;

export const TextCard = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Separator = styled.View`
  height: 32px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Center = styled.View`
  align-items: center;
  margin: 28px 0;
`;

export const Line = styled.View`
  height: 1px;
  width: ${dimensions.width * 0.8}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
export const Main = styled.View`
  flex: 1;
`

export const ContainerCategories = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-left: 20px;
    font-size: ${RFValue(theme.FONT_SIZE.LG)}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    color: ${theme.COLORS.GRAY_800};
  `
}

`;

interface CategorieProps {
  isCategorieSelected: boolean;
}

export const WrapperCategorie = styled.TouchableOpacity<CategorieProps>`
  margin: 28px 4px;
  padding: 8px 18px;
  background-color: ${({ theme, isCategorieSelected }) => 
                        isCategorieSelected 
                        ? theme.COLORS.BRAND_SECONDARY_LIGHT 
                        : theme.COLORS.GRAY_300
                        };
  border-radius: 12px;
`;

export const CategorieName = styled.Text<CategorieProps>`
  ${({ theme, isCategorieSelected }) => css`
    font-family: ${isCategorieSelected ? theme.FONT_FAMILY.SEMI_BOLD : theme.FONT_FAMILY.REGULAR};         
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
    color: ${isCategorieSelected ? theme.COLORS.BRAND_SECONDARY_MID : theme.COLORS.GRAY_900 };
  `}
`;

export const ContainerDebits = styled.View`
  flex: 1;
`;

export const ContainerItemDebit = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  margin-bottom: 28px;
  width: 100%;
  `;

export const WrapperInfoDebits= styled.View`
  gap: 3px;
`;

export const Debit = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.LG)}px;
    color: ${theme.COLORS.GRAY_800};            
  `}
`;

export const Group = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.SM)}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const DebitValue = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${RFValue(theme.FONT_SIZE.LG)}px;
    color: ${theme.COLORS.GRAY_600};
    line-height: ${RFValue(24)}px;
  `}
`;