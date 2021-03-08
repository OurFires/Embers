import theme from 'tokens/embers-last/theme'
import {createTheme} from 'libs/embers'

export const {EmbersThemeProvider, useTheme} = createTheme( {default: theme} );
