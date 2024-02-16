import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center; 
  justify-content: space-between;
  gap: 20px; 
`;

export const OnBackButton = styled.TouchableOpacity``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.FONT_SIZE.LG)}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.GRAY_800};
    align-self: center;
  `}
`;