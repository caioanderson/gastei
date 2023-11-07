import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.BRAND_PRIMARY_LIGHT};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.BRAND_SECONDARY_MID
}))``;