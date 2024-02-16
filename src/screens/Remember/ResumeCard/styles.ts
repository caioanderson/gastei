import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: relative;
  overflow: hidden;
`;

export const WrapperInfo = styled.View`
  justify-content: space-between;
  gap: 10px; 
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_900};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_800};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONT_SIZE.X}px;
  `}
`;

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackdropCategory = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY_LIGHT}; 
  padding: 5px 5px; 
  align-self: center;
  border-radius: 10px;
  align-items: center;
`;

export const Category = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BRAND_SECONDARY_MID};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BRAND_SECONDARY_MID};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;


export const BackdropContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: -100px;
  z-index: -1;
`;

export const BackdropContainerColor = styled.View`
  width: 300px;
  height: 200px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY_LIGHT};
`;
