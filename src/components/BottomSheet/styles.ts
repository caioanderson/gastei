import styled, { css } from 'styled-components/native' 

type BottomSheetType = { 
  bottomSheetType: 'warning'| 'info'
}

export const Container = styled.View<BottomSheetType>`
  ${({ theme, bottomSheetType }) => css`
      flex: 1;
      background-color: ${theme.COLORS.WHITE};
      border-top-right-radius: ${bottomSheetType === 'info' ? 0 : '38px'};
      border-top-left-radius: ${bottomSheetType === 'info' ? 0 : '38px'};
  `}
`

export const Backdrop = styled.View`
  flex: 1;
  background-color: 'rgba(0,0,0,0.1)';
`;

export const Center = styled.View`
  align-items: center;
  margin: 12px 0;
`;

export const Line = styled.View`
  height: 1px;
  width: 43px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;