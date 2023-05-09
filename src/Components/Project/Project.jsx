import { Heading } from '@chakra-ui/react'
import React from 'react'
import MajorProject from './MajorProject'

import style from './Project.module.css'
import AOS from "aos";
import "aos/dist/aos.css"; 
// ..
AOS.init();
export default function Project({ colorMode }) {
    return (
      <div
        id="projects"
    
      >
        <div id="Projects" style={{ height: "100px" }}></div>
        <div className="projects-projects" id={style.projects}>
          <Heading
            size={"xl"}
            textAlign="center"
            color={"white"}
             fontFamily= "Bree Serif, serif"

          >
            Projects
          </Heading>
          <MajorProject colorMode={colorMode} />
        </div>
      </div>
    );
}
