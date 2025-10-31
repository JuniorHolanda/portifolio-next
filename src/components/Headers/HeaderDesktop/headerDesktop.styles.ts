import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all ease-in-out 0.3s;
`;
