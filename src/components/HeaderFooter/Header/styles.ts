import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4fr 4fr 1fr;

  padding: 1rem 10%;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.img`
  content: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/2560px-SpaceX_logo_black.svg.png");
  filter: ${({ theme }) => theme.imageFilter};

  width: 15rem;
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  padding: 0rem 1rem;
`;

export const Link = styled.a`
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
