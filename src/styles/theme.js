const BASE_SPACING = 8;
const BASE_SPACING_UNIT = 'px';

const theme = {
  background: 'black',
  color: '#dbdbdb',
  spacing: {
    base: BASE_SPACING,
    unit: BASE_SPACING_UNIT,
    xs: BASE_SPACING + BASE_SPACING_UNIT,
    sm: BASE_SPACING * 2 + BASE_SPACING_UNIT,
    md: BASE_SPACING * 3 + BASE_SPACING_UNIT,
    lg: BASE_SPACING * 4 + BASE_SPACING_UNIT,
  },
  fontFamily: '"Roboto Mono", Menlo, monospace',
  bodyFont: '12px',
  mainWidth: 768 + BASE_SPACING + BASE_SPACING_UNIT,
};

export default theme;
