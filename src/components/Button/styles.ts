import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export type Types = 'primary' | 'secondary';

type TypeButton = {
  type: Types
}

export const Container = styled.TouchableOpacity<TypeButton>`
  ${({ theme, disabled, type }) => css`
    width: 100%;
    padding: 16px 24px;
    background-color: ${disabled ? theme.COLORS.GRAY_500 
    : type === 'primary' ? theme.COLORS.BRAND_PRIMARY_MID
    : 'transparent'
  };
    border-radius: 6px;
    border-width: ${type === 'primary' ? 0 : '1px' };
    border-color: ${type === 'primary' ? 0 : theme.COLORS.BRAND_PRIMARY_MID};
  `}
`;

export const Text = styled.Text<TypeButton>`
  ${({ theme, type }) => css`
    align-self: center;
    font-size: ${RFValue(theme.FONT_SIZE.MD)}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'primary' ? theme.COLORS.GRAY_100 : theme.COLORS.BRAND_PRIMARY_MID};
  `}
`;
