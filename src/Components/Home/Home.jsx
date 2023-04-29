import { Flex, VStack, Image, Box, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import style from "./Home.module.css"

export default function Home({ colorMode }) {

    const [isSmallScreen] = useMediaQuery('(min-width: 680px)')
    const [isMediumScreen] = useMediaQuery('(min-width: 1180px)')

    return (
      <div id="home">
        <div
          id={style.home}
          style={{ color:  "white" }}
          // EBC7E8
        >
          <div className={style.img_txt_wrapper}
            
          >
            {/* <img
              id={style.myImg}
              src="https://cdnl.iconscout.com/lottie/premium/thumb/web-development-4099445-3420711.mp4"
              alt="logo"
            /> */}
            <div id={style.myDetailsDiv}>
              <h1 id={style.myName}>
                <span>
                  Hey,
                  {/* <img
                    style={{ width: "15%", display: "inline" }}
                    src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                    alt=""
                  /> */}
                </span>
                <br /> I am Prashant Sathawane
              </h1>
              <h3 id={style.title}>Full Stack Web Developer</h3>
            </div>
          </div>
          <div className={style.quote} style={{ marginTop: "20px",fontFamily: 'Bree Serif, serif' }}>
            <img  
              src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=light"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}
