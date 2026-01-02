import { scrollUpInfinity } from '@/styles/animations';
import { flex, fontText } from '@/styles/mixins';
import styled from 'styled-components';

export const SFrontEndBar = styled.span`
  ${flex({ direction: 'column', justify: 'space-around', align: 'center' })}
  gap: 30px;
  width: 100%;
  height: 100vh;
  animation: ${scrollUpInfinity} 20s linear infinite;

  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    font-style: italic;
    transform: rotate(-90deg);
    white-space: nowrap;
    ${fontText({ size: 'small' })}
  }
`;
