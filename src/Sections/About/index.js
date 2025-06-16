import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";



import greenBlob from "../../assets/green blob.svg";
import redBlob from "../../assets/red blob.svg";


const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efe6d5;
  overflow: hidden;
`;

const float = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-30px) translateX(20px); }
  100% { transform: translateY(0px) translateX(0px); }
`;
const Blob = styled.img`
  position: absolute;
  width: ${(props) => props.size || '300px'};
  top: ${(props) => props.top || '0'};
  left: ${(props) => props.left || '0'};
  z-index: -1;
  opacity: 0.3;
  animation: ${float} 8s ease-in-out infinite;
  pointer-events: none;
`;

const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: flex;
  padding-bottom:2.5rem;
  justify-content: center;
`;



const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:10rem;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;


const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
  text-align:center;
`;

const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Blob src={greenBlob} size="400px" top="5%" left="10%" />
  <Blob src={redBlob} size="300px" top="40%" left="70%" />
  <Blob src={redBlob} size="350px" top="75%" left="20%" />
      <Waves src={wave} alt="" />
      <Main>
        <div>
          <Title>About Us</Title>
  
        </div>
        <Content>
          <AboutText>
            <Text>
              We help our customers to tell about themselves, to grow and stand
              out in an increasingly competitive digital world, through creative
              projects that are able to attract and involve, creating strategic
              value.
            </Text>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
