import styled from "styled-components";


const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: #0a0b10;
  color:#efe6d5;
`;



const Footer = () => {
  return (
    <FOOTER>
        © 2025 Built by DigitalAgency
    </FOOTER>
  );
};

export default Footer;


