import '@emotion/react';
import '@emotion/styled';

import { ThemeOptions } from '@mui/material/styles';

declare module '@emotion/react' {
  export interface Theme extends ThemeOptions {}
}
