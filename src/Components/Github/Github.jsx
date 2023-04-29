import { Box, color, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import style from './Github.module.css'
import AOS from "aos";
import "aos/dist/aos.css"; 

AOS.init();
const GitHub = ({ colorMode }) => {
  const github = {
    margin: "auto",
    width:"80%",
    padding: "20px",
    borderRadius: "10px",
    border:"1px solid #6f5a93",
  
  };

  const selectLast12Months = (contributions) => {
    const today = new Date();
    const startTimestamp = new Date(
      today.getFullYear(),
      today.getMonth() - 11,
      1
    ).getTime();
    const endTimestamp =
      new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

    return contributions.filter((day) => {
      const contributionTimestamp = new Date(day.date).getTime();

      return (
        contributionTimestamp >= startTimestamp &&
        contributionTimestamp <= endTimestamp
     );
    });
  };

  return (
    <div
      className="github-main"
      data-aos-mirror="true"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <Heading
        textAlign="center"
        size={["2xl", "xl", "xl", "xl"]}
        color={colorMode === "light" ? "#4C3575" : "#BFACE0"}
        mb="50px"
        fontFamily="Bree Serif, serif"
      >
        Github Calender
      </Heading>

      <Box w="100%" style={github}>
        <GitHubCalendar
          class="react-activity-calendar"
          fontFamily="Bree Serif, serif"
          style={{ margin: "auto", color: "#4C3575" }}
          username="PrashantSathawane"
          blockSize={20}
          transformData={selectLast12Months}
        >
          <ReactTooltip delayShow={20} HTML />
        </GitHubCalendar>
      </Box>

      <div className="github-stats" id={style.stat}>
        <div
          className={style.one}
          fontFamily="Bree Serif, serif"
          data-aos-mirror="true"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=PrashantSathawane&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D&background=#a084ca"
            alt="prashant-stats"
          />
        </div>

        <div
          className={style.two}
          data-aos-mirror="true"
          data-aos="fade-up"
          fontFamily="Bree Serif, serif"
          data-aos-duration="3000"
        >
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=PrashantSathawane&show_icons=true&title_color=#4c3575&text_color=#4c3575&icon_color=#4c3575&bg_color=red&border_radius=10&border_color=#4c3575"
            alt="prashant-status"
          />
        </div>

        <div
          className={style.three}
          data-aos-mirror="true"
          data-aos="fade-right"
          fontFamily="Bree Serif, serif"
          data-aos-duration="3000"
        >
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=PrashantSathawane&title_color=4C3575&icon_color=#4c3575&text_color=#4c3575&bg_color=#a084ca&show_icons=true"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHub;
