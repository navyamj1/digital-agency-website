import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cone from "../../assets/3dtriangle.png";


import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";


const ServiceSection = styled.section`
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: #efe6d5;
  display: inline-block;
  font-size: 2rem;
  
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    
    border-bottom: 2px solid #e73213;
  }
`;

const Line = styled.span`
  border-left: 4px solid #e73213;
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid #e73213;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 70%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),

        start: "top top+=180",

        end: "bottom bottom",

        pin: element,
        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),

      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      
      if (mq.matches) {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true,
              
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } else {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
           
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
               
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      }
    });
  }, []);


  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  
  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">What We Do</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Web Design"
          title={<h1>We build attractive designs</h1>}
          subText={
            <h5>
              We help clients to build great design which attract more customers
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="webdesign.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Web Development"
          title={<h1>We Develop high quality Web & App</h1>}
          subText={
            <h5>
              We build appropriate solution to develop your website & app with
              best tools available
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develop.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="SEO & Marketing"
          title={<h1>We provide support for your digital presence</h1>}
          subText={
            <h5>
              Once your system is online, we will stay on hand to help you use
              it and provide technical support and maintenance 
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
