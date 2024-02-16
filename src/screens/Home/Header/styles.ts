import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
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
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({ theme }) =>  RFValue(theme.FONT_SIZE.XL)}px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) =>  RFValue(theme.FONT_SIZE.SM)}px;
`;

export const WrapperImage = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
`

export const ContainerCards = styled.ScrollView`

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

export const Separator = styled.View`
  height: 32px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextCard = styled.Text`
  font-size: ${({ theme }) =>  RFValue(theme.FONT_SIZE.MD)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
