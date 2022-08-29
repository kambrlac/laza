import { css }  from "styled-components";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 450px) {
      ${props}
    }
  `;
};

const mobtel = (props) => {
  return css`
    @media only screen and (max-width: 620px) {
      ${props}
    }
  `;
};

const tablet = (props) => {
    return css`
      @media only screen and (max-width: 900px) {
        ${props}
      }
    `;
  };

const laptop = (props) => {
return css`
    @media only screen and (max-width: 1400px) {
        ${props}
    }
    `;
};

const midsize = (props) => {
return css`
    @media only screen and (max-width: 1200px) {
        ${props}
    }
    `;
};



export{
    mobile,
    tablet,
    laptop,
    midsize,
    mobtel,
    
}