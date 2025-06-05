import 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}
