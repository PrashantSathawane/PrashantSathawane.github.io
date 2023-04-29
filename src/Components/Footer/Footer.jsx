import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaGofore } from 'react-icons/fa'
import style from './Footer.module.css'
import AOS from "aos";
import "aos/dist/aos.css"; 
// ..
AOS.init();
export default function Footer({ colorMode }) {
    return (
      <Box
        className="footer"
        id={style.footer_mainDiv}
        data-aos-mirror="true"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Box
          id={style.footer_mainDiv1}
          color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
        >
          <Heading fontFamily="Bree Serif, serif" id={style.footer_head}>
            Get In Touch
          </Heading>
          <Heading fontFamily="Bree Serif, serif" id={style.footer_head1}>
            You can reach out to me at
          </Heading>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <FaGofore />
            &nbsp; <p>prashantsathawane2099@gmail.com</p>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <FaPhone />
            &nbsp; <p>+919767599972</p>
          </Box>
        </Box>

        <Box
          id={style.footer_mainDiv2}
          backgroundColor={colorMode === "light" ? "#4C3575" : "#BFACE0"}
        >
          <Box id={style.footer_aDiv}>
            <a
              href="https://www.instagram.com/prashant_sathawane/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/prashant.sathawane.31/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-sathawane-b28411209/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/PrashantSathawane"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </Box>
        </Box>
        <Box
          id={style.footer_mainDiv3}
          backgroundColor={colorMode === "light" ? "#4C3575" : "#BFACE0"}
        >
          <p>Created By Prashant Sathawane | © 2023. All Rights Reserved</p>
        </Box>
      </Box>
    );
}
