import styled from "styled-components/macro";

export const FaqContainer = styled.div`
  height: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: #010606; */
  align-items: center;
  background: #fff;

  @media screen and(max-width: 768px) {
    height: 1100px;
  }
  @media screen and(max-width: 480px) {
    height: 1300px;
  }
`;

export const FaqWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FaqCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 420px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    /* cursor: pointer; */
  }
`;

export const FaqIcon = styled.img`
  /* margin-bottom: 2rem;
  margin-top: -2rem; */
  height: 160px;
  width: 160px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: -10px;
`;

export const FaqH1 = styled.h1`
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FaqH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 2.8rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
`;
export const FaqP = styled.p`
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5rem;
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: black;
  }
`;

export const FaqBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FaqBtn = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 70%;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }

  a:link {
    font-size: 1rem;
    text-decoration: none;
    color: black;
    width: 70%;
  }

  a:visited {
    font-size: 1rem;
    text-decoration: none;
    color: black;
    width: 70%;
  }
`;
