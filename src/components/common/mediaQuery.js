import { css } from "styled-components";

const MediaQuery = {
  mobile: (cls) =>
    css`
      @media (max-width: 785px) {
        ${cls};
      }
    `,
  tablet: (cls) =>
    css`
      @media (min-width: 786px) and (max-width: 1079px) {
        ${cls};
      }
    `,
  desktop: (cls) =>
    css`
      @media (min-width: 1080px) and (max-width: 1343px) {
        ${cls};
      }
    `,
  fullHD: (cls) =>
    css`
      @media (min-width: 1344px) {
        ${cls};
      }
    `,
};

export default MediaQuery;
