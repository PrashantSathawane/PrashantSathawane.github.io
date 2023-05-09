import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./Project.module.css";
import { FaArrowRight, FaGithub } from "react-icons/fa";


export default function MajorProject({ colorMode }) {
    return (
         // 1st project
        <div id="projects" className={style.majorMain}>
            <div className="project-card" id={style.major_projectDiv}>
                <div
                    className={style.major_project_imgDiv}
                    >
                    <Image
                        className="project-skills-card-img"
                        src="Flexi Wheel.png"
                        alt="Flexi Wheel"
                    />
                </div>

                <div
                    className={style.major_project_detailsDiv}
                    >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        color={"white"}
                        size={["md", "md", "md", "lg"]}>
                        Flexi Wheel

                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        color={"white"}
                        size={["xs", "sm", "sm", "md"]}>
                        Aerowear is known for its trendy and affordable
                        clothing, with a focus on casual wear such as t-shirts,
                        hoodies, and jeans. The brand also offers a range of
                        accessories such as bags..
                    </Heading>
                    <Heading
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}
                        color={"white"}
                        size={["sm", "sm", "sm", "sm"]}>
                        Tech Stack: Html| CSS | Javascript | Chakra-UI 
                    </Heading>
                    <div
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            // id={style.btn_Prj}
                            className="project-card-btn"
                            color={"white"}
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/thinkable-slope-4107/tree/main/thinkable-slope"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub id={style.links} />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            color={"white"}
                            size={["xs", "sm", "sm", "sm"]}
                            // id={style.btn_Prj}
                        >
                            <a
                                id={style.links}
                                rel="noreferrer"
                                href="https://thinkable-slope-suhail3535.vercel.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight id={style.links} />
                        </Button>
                    </div>
                </div>
            </div>

        // 2nd project
            <div className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                    >
                    <Image
                        className="project-skills-card-img"
                        src="Unicorn.png"
                        alt="Unicorn"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "#4C3575" : "#371B58"}
                    >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["sm", "sm", "sm", "lg"]}>
                        Unicorn
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        TripHub is the clone of Makemytrip.com MakeMyTrip is a
                        travel company that provides online travel services.
                    </Heading>
                    <Heading
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}
                        size={["sm", "sm", "sm", "sm"]}>
                        Tech Stack: React | Redux | Chakra Ui | JavaScript|
                    </Heading>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/agreeable-transport-9100/tree/main/agreeable-transport-9100"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://elegant-custard-fc08fa.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>

            // 3rd project
            <div className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                   >
                    <Image
                        className="project-skills-card-img"
                        src="Best Deals.png"
                        alt="Best Deals"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    color={colorMode === "light" ? "#4C3575" : "#371B58"}
                   >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        Beast Deals
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Shopper Korner is the clone of Gearbest.com it is a
                        E-Commerce website.All the daily use products are
                        available here.
                    </Heading>
                    <Heading
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}
                        size={["sm", "sm", "sm", "sm"]}>
                        Tech Stack: HTML| CSS | JavaScript
                    </Heading>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/Indigo-railway-8753"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://vermillion-cendol-8a7209.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>

            // 4th project
            <div className="project-card" id={style.major_projectDiv}>
                <Box
                    className={style.major_project_imgDiv}
                   >
                    <Image
                        className="project-skills-card-img"
                        src="One Boutique.png"
                        alt="One Boutique"
                    />
                </Box>

                <Box
                    className={style.major_project_detailsDiv}
                    // color={colorMode === "light" ? "#4C3575" : "#371B58"}
                   >
                    <Heading
                        className="project-title"
                        id={style.major_project_detailsDiv_Heading}
                        size={["md", "md", "md", "lg"]}>
                        One Boutique
                    </Heading>
                    <Heading
                        className="project-description"
                        id={style.major_project_detailsDiv_detail}
                        fontWeight="500"
                        size={["xs", "sm", "sm", "md"]}>
                        Top Trip is the clone of Booking.com, it is a travel
                        company that provides online travel services and hotel
                        booking .
                    </Heading>
                    <Heading
                        className="project-tech-stack"
                        id={style.major_project_detailsDiv_tehcs}
                        size={["sm", "sm", "sm", "sm"]}>
                        Tech Stack: HTML| CSS |JavaScript
                    </Heading>
                    <Box
                        className="project-card-btn"
                        id={style.major_project_detailsDi_btnDiv}>
                        <Button
                            className="project-card-btn"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className="project-github-link"
                                id={style.links}
                                rel="noreferrer"
                                href="https://github.com/suhail3535/glad-airplane-61"
                                target="_blank">
                                Source Code
                            </a>
                            &nbsp;
                            <FaGithub />
                        </Button>
                        <Button
                            className="project-deployed-link"
                            size={["xs", "sm", "sm", "sm"]}>
                            <a
                                className={style.links}
                                rel="noreferrer"
                                href="https://top-tripcom.netlify.app/"
                                target="_blank">
                                Live
                            </a>
                            &nbsp;
                            <FaArrowRight />
                        </Button>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
