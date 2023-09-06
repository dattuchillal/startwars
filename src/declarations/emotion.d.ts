import '@emotion/react';
import { CreateMUIStyled, Theme as MaterialUITheme } from '@mui/material';

declare module '@emotion/react' {
  export interface Theme extends MaterialUITheme {}
}

declare const styled: CreateMUIStyled<MaterialUITheme>;
