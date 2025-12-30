import { keyframes } from 'styled-components';

export const scrollUpInfinity = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
`;
