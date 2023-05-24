import styled from "styled-components";

export const StyledHeroSection = styled.div`
  background: url("https://asmpa.selise.cloud/1684410778_fef7a7212e0e242a39e59ea483dfca_cooking.jpeg") no-repeat;
  background-size: cover;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    background: url("https://asmpa.selise.cloud/1684410778_fef7a7212e0e242a39e59ea483dfca_cooking.jpeg") no-repeat;
    background-size: cover;
    height: 80vh;
  }

  @media (max-width: 576px) {
    background: url("https://asmpa.selise.cloud/1684410778_fef7a7212e0e242a39e59ea483dfca_cooking.jpeg") no-repeat;
    background-size: cover;
    height: 50vh;
  }
  
  .hero {}
`