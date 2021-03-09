export {emb} from 'tokens/embers-last/index';

export const theme = {
  //design tokens
  breakpoints: ['480', '1024', '1440'],
  colors: {
    // brand colors
    ink: '#17172B',
    dark_blue: '#20293E',
    grays: ['#221F25', '#4E4E5D', '#737383', '#BEBEC3', '#E2E2E5', '#F9F8F8'],
    primary: '#3DA8AB',
    primary_ink: '#248E91',
    yellow: '#FFEF3A',
    orange: '#F25327',
    crimson: '#EC1B4B',
    purple: '#A8216B',
    paper: '#F8F5F5',
    // system colors
    error: '#F12D2D',
    error_ink: '#C70303',
    success: '#14DC94',
    success_ink: '#07AA6F',
    warning: '#FEB120',
    warning_ink: '#F99500',
    info: '#14BBE0',
    info_ink: '#00A2C6',
    //
    white: '#FFFFFF',
    black: '#000000',
  },
  space: [
    0, // 0
    4, // 1
    8, // 2
    12, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
    40, // 8
    48, // 9
    56, // 10
    64, // 11
    80, // 12
    96, // 13
    104, // 14
    128, // 15
    168, // 16
    256, // 17
  ],
  radii: {
    button: '16px',
    button_big: '28px',
  },
  fonts: {base: 'Roboto'},
  fontSizes: [10, 12, 14, 16, 18, 22, 28, 35, 44, 68],
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 800,
  },
};

// case 'canon':
//   return `
//   font-size: ${sizes[9]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'trafalgar':
//   return `
//   font-size: ${sizes[8]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'paragon':
//   return `
//   font-size: ${sizes[7]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'double_pica':
//   return `
//   font-size: ${sizes[6]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'great_primer':
//   return `
//   font-size: ${sizes[5]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'body_copy':
//   return `
//   font-size: ${sizes[4]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'pica':
//   return `
//   font-size: ${sizes[3]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'long_primer':
//   return `
//   font-size: ${sizes[2]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'brevier':
//   return `
//   font-size: ${sizes[1]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;

// case 'minion':
//   return `
//   font-size: ${sizes[0]};
//   color:${theme.colors.ink};
//   font-weight: ${theme.fontWeights.regular};
//   `;
