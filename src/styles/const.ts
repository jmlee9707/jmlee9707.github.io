import {  Theme } from '@emotion/react';

export const contentMaxWidth = '720px';

export const MOBILE_MAX_WIDTH = 768;
export const MOBILE_MEDIA_QUERY = `screen and (max-width: ${MOBILE_MAX_WIDTH}px)`;

export const lightTheme: Theme = {
  color: {
    white: "#ffffff",
    black: "#303030",
  },
};
export const darkTheme: Theme = {
  color: {
    white: "#303030",
    black: "#ffffff",
  },
};

