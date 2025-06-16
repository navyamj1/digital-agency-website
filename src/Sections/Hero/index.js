// This is HeroSection component, Main top section of website

import styled, { keyframes } from "styled-components";

import greenBlob from "../../assets/green blob.svg";
import redBlob from "../../assets/red blob.svg";
import beigeBlob from "../../assets/beige blob.svg";
import arrow from "../../assets/Arrow Right.svg";
import webBuilding from "../../assets/building-icon.svg";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const GreenBlob = styled.div`
  width: calc(50% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const RedBlob = styled.div`
  width: calc(60% + 10vw);
  position: absolute;
  left:30%;
`;
const BeigeBlob = styled.div`
  width: calc(30% + 30vw);
  position: absolute;
  left:55%;
  top: calc(2rem + 2vw);
  z-index: 5;
`;
//right: calc(3.5rem + 3.5vw);
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const WebBuildingsvg = styled.img`
  max-width: 100%;
  width: calc(20% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--beige);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
 
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--red);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  color: #efe6d5;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color:#9dbeb7 ;
`;

const CTA = styled.button`
  background-color:  #efe6d5;
  color:rgb(0, 0, 0);
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const HeroSection = () => {
  return (
    <HomeSection id="home">
      <Blobs>
        <GreenBlob>
          <img src={greenBlob} alt="" width="400" height="400" />{" "}
        </GreenBlob>
        <BeigeBlob>
          <img src={beigeBlob} alt="" width="400" height="400" />
        </BeigeBlob>
        <RedBlob>
          <img src={redBlob} alt="" width="400" height="400" />
        </RedBlob>
      </Blobs>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Title>Bulid Your Digital Future Today</Title>
          <SubText>
            Turning your ideas into powerful online experiences
          </SubText>
          <CTA>
            Get in touch &nbsp;
            <img src={arrow} alt="cta" width="100" height="100" />
          </CTA>
        </Lb>

        <WebBuildingsvg
          src={webBuilding}
          alt="webBuilding Svg"
          srcSet=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
