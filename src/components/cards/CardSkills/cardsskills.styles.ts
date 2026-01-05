'use client';

import SymbolGear from '@/components/shared/symbols/SvgGear';
import { flex, fontText, fontTitle, gap, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.div`
  position: relative;
  overflow: hidden;
  ${flex({ direction: 'column', justify: 'space-between' })}
  width: 100%;
  height: 100%;
  ${padding({ space: 'medium' })}
  ${gap({ space: 'small' })}
  border: ${({ theme }) => theme.colors.border} solid 2px;
  border-radius: ${({ theme }) => theme.borderRadios.medium};

  h3 {
    z-index: 1;
    ${fontTitle({ size: 'microSmall', transform: 'lowercase', sub: true })};
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    ${fontText({ size: 'microSmall' })}
    z-index: 1;
  }
`;
export const SContainerAction = styled.div`
  ${flex({ justify: 'flex-start' })}
  ${gap({space:'small'})};
  z-index: 1;
  width: 100%;
  height: fit-content;

  div {
    ${flex({ justify: 'flex-start' })}
    ${gap({space:'small'})};
    width: 100%;
    height: 100%;

    p {
      ${fontText({ size: 'microSmall', weight: '600', style: 'italic' })}
    }
  }

  button {
    ${flex({ justify: 'space-between' })}
    width: auto;
    height: 100%;
    ${gap({space:'small'})};
    ${fontText({ size: 'microSmall', weight: '800' })}
    color: ${({ theme }) => theme.colors.secondary};

    .icon {
      font-size: ${({ theme }) => theme.textFont.medium};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ScontainerIcon = styled.span`
  ${flex({ align: 'flex-start' })}
  z-index: 1;
  width: 100%;
  height: fit-content;

  .iconSkill {
    fill: ${({ theme }) => theme.colors.secondary};
    z-index: 1;
  }
`;

export const SContent = styled.span`
  ${flex({ direction: 'column' })}
  z-index: 1;
  height: 100%;
`;

export const SSymbolGear = styled(SymbolGear)`
  transform: translate(-50%, -50%);
  top: 30%;
  left: 20%;
  z-index: 0;
  position: absolute;
  fill: ${({ theme }) => theme.colors.backgroundMedium};
`;
