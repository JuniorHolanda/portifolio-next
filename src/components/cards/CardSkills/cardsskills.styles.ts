'use client';

import IconTypeScript from '@/components/shared/icons/SvgTypeScript';
import SymbolGear from '@/components/shared/symbols/SvgGear';
import { flex, fontSmallText, fontSubTitle } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.div`
  position: relative;
  overflow: hidden;
  ${flex({ direction: 'column' })}
  width: 100%;
  height: 100%;
  border: ${({ theme }) => theme.colors.border} solid 1px;
  padding: ${({ theme }) => theme.spaces.medium};
  gap: ${({ theme }) => theme.spaces.medium};
  border-radius: ${({ theme }) => theme.borderRadios.medium};

  h2 {
    z-index: 1;
    ${fontSubTitle};
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    z-index: 1;
    ${fontSmallText}
  }
`;
export const SContainerAction = styled.div`
  ${flex({ justify: 'flex-start' })}
  z-index: 1;
  width: 100%;

  div {
    ${flex({})}
    width: 60%;
    ${flex({ justify: 'flex-start' })}
    height: 100%;
  }

  button {
    ${flex({})}
    width: 40%;
    ${flex({ justify: 'space-between' })}
    justify-content: space-between;
    height: 100%;

    .icon {
      font-size: 2em;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ScontainerIcon = styled.span`
  ${flex({})}
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
