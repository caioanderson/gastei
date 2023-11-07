import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: .7;
  background-color: ${({ theme }) => theme.COLORS.BRAND_PRIMARY_LIGHT};

  align-items: center;
  justify-content: space-around;
  padding: 0 32px;
`;

export const WrapperLogo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LabelLogo = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
`

export const WrapperMessage = styled.View`
  height: 137px; 
  align-items: center; 
  justify-content: space-between;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => RFValue(theme.FONT_SIZE.XXL)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  text-align: center;
  line-height: 40px;
  align-items: flex-end;
`;

export const Footer = styled.View`
  flex: .3;
  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY_MID};

  position: relative;
  `;

export const WrapperButtonSignIn = styled.View`
  position: absolute;
  
  top: -30px;
  width: 100%;

  padding: 0 28px 28px 0:

`;