import styled from "styled-components";

export const StyledHeroSection = styled.div`
  background: url("https://asmpa.selise.cloud/1685211364_65fa174ccb454ac304b8446f026dc1_daily_recipe_bg_desktop.png") no-repeat;
  background-size: cover;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    background: url("https://asmpa.selise.cloud/1685211364_65fa174ccb454ac304b8446f026dc1_daily_recipe_bg_desktop.png") no-repeat;
    background-size: cover;
    height: 80vh;
  }

  @media (max-width: 576px) {
    background: url("https://asmpa.selise.cloud/1685211364_e23c6c72d0662ea75913ce46268956_daily_recipe_bg_mobile.png") no-repeat;
    background-size: cover;
    height: 50vh;
  }
  
  .hero {}
`