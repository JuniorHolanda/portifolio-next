import { keyframes, css } from 'styled-components';

export const scrollUpInfinity = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
`;

export const slidToLeft = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;
