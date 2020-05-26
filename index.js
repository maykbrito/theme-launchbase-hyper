'use strict';

const backgroundColor = '#130f0d';
const foregroundColor = '#fcfcf2';
const borderColor = '#fd951f8e';
const cursorColor = '#FD951F';
const colors = {
  black: '#000000',
  red: '#d10000',
  green: '#4cd137',
  yellow: '#8c7ae6',
  blue: '#00638a',
  magenta: '#8c7ae6', // old: #dc3091
  cyan: '#FD951F',
  white: '#bfbfbf',
  lightBlack: '#000000aa',
  lightRed: '#d10000',
  lightGreen: '#4cd137',
  lightYellow: '#8c7ae6',
  lightBlue: '#00638a',
  lightMagenta: '#8c7ae6',
  lightCyan: '#FD951F',
  lightWhite: '#bfbfbf'
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}

			.tab_active:before {
				border-color: ${borderColor};
			}
		`
  });
};
