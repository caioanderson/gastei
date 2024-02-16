import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

type BarProps = {
  active: boolean;
}
export const Bar = styled.View<BarProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 3px;
    background-color: ${active ? theme.COLORS.BRAND_SECONDARY_MID : theme.COLORS.GRAY_400};
  `}
`;