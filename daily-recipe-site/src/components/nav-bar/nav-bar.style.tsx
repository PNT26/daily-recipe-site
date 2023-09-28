import styled from "styled-components";

export const StyledNavBar = styled.div`
  .nav {
    &__dropdown {
      &-container {
        width: 206px;
        right: 0;
        top: 30px;
      }
      //&--button:hover + .nav__dropdown-container {
      //  display: block;
      //}
      &-container--list {
        transition: 0.2s ease-in;
        &:hover {
          background-color: var(--primary-100);
        }
      }
    }
  }
`;
