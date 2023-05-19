import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
// import ProjectSet from "./ProjectSet";
// import data from "../../db.json";


function Projects() {
    const openLink = (url) => {
        window.open(url);
    };
    return (
        <div className="projects-projects" id="projects">
            <div class="text-divider-project"></div>
            <h1

                className="projects-heading">
                My Projects
            </h1>
            <div className="projects-container">
                {/* {data.projects.map((elm) => {
          return <ProjectSet key={elm.id} {...elm} />;
        })} */}

                {/* 1st project */}
                <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src="Unicorn.png"
                                alt=""
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">Unicorn</h1>
                            <p className="project-description">
                                Unicorn is a American ecommerce website where 
                                we can buy different categories of products, the 
                                principle that clothing should be designed to protect 
                                people from the British weather.
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        React Js
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://lh5.googleusercontent.com/fIY8_nCkUbVDqzQA_RNU_H7u6X3hKQB9hm89AoK_6R4s3nGcUqLiK5UEJaNBlOksqVI=w2400"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Redux
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://img.icons8.com/color/256/chakra-ui.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Chakra UI
                                    </p>
                                </div>

                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JSON
                                    </p>
                                </div>

                            </div>
                            <div className="project-card-btn">
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://github.com/Loki343/testy-throne-7976`
                                        )
                                    }
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://testy-throne-7976.vercel.app/`
                                        )
                                    }
                                    className="project-deployed-link">
                                    Deploy <HiExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd project */}
                <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src="Daily Essentials.png"
                                alt="Daily Essentials"
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">Daily Essential</h1>
                            <p className="project-description">
                            Daily Essential is an e-commerce website that was Founded in 2012,
                            Daily Essential is a design-obsessed lifestyle accessories brand 
                            committed to making your everyday carry #lessordinary.

                            {/* You can look forward to a carefully-crafted range of products,
                            made from long-lasting materials, with designs that stand out
                            and make your life easy. With Daily Essential, let your lifestyle
                            reflect your sensibilities as you go on to make your every day #lessordinary. */}
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
                                </div>

                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        React Js
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://lh5.googleusercontent.com/fIY8_nCkUbVDqzQA_RNU_H7u6X3hKQB9hm89AoK_6R4s3nGcUqLiK5UEJaNBlOksqVI=w2400"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Redux
                                    </p>
                                </div>

                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Node JS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Express JS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        MongoDB
                                    </p>
                                </div>
                               
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://img.icons8.com/color/256/chakra-ui.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Chakra UI
                                    </p>
                                </div>

                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JSON
                                    </p>
                                </div>

                            </div>
                            <div className="project-card-btn">
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://github.com/KoushikNiyogi/tough-request-5163`
                                        )
                                    }
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://daily-essential-koushikniyogi.vercel.app/`
                                        )
                                    }
                                    className="project-deployed-link">
                                    Deploy <HiExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                 {/* 3rd project */}
                 <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src="Flexi Wheel.png"
                                alt="Flexi Wheel"
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">Flexi Wheel</h1>
                            <p className="project-description">
                            Flexi Wheels operates on a self-drive model,
                             which means that customers can rent a car and
                              drive it themselves, rather than hiring a driver.
                               The company offers a variety of car models to choose from,
                                and customers can book cars through the Flexi Wheels website or mobile app.
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
                                </div>
                               
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://img.icons8.com/color/256/chakra-ui.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Chakra UI
                                    </p>
                                </div>

                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JSON
                                    </p>
                                </div>

                            </div>
                            <div className="project-card-btn">
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://github.com/PrashantSathawane/fearful-doll-6867`
                                        )
                                    }
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://644dfad2252c9713f067d005--lovely-pasca-14e6b1.netlify.app/`
                                        )
                                    }
                                    className="project-deployed-link">
                                    Deploy <HiExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4th project */}
                <div className="project-card">
                    <div

                        className="project-card-container">
                        <div className="project-img">
                            <img
                                src="Best Deals.png"
                                alt=""
                            />
                        </div>
                        <div className="project-card-text">
                            <h1 className="project-title">Daily Essentials</h1>
                            <p className="project-description">
                                Daily Essentials is a online shopping website
                                which deals with man,women and kids products
                                like shoes, hats, hoodies and shorts.
                            </p>
                            <div className="project-tech-stack">
                                <div
                                    key={Date.now() + Math.random()}
                                    className="project-skills-card">
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        HTML
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        CSS
                                    </p>
                                </div>
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        JavaScript
                                    </p>
                                </div>
                               
                                <div
                                    className="project-skills-card"
                                    key={Date.now() + Math.random()}>
                                    <img
                                        src="https://img.icons8.com/color/256/chakra-ui.png"
                                        alt=""
                                        className="project-skills-card-img"
                                    />
                                    <p className="project-skills-card-name">
                                        Chakra UI
                                    </p>
                                </div>
                               
                               
                            </div>
                            <div className="project-card-btn">
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://github.com/PrashantSathawane/kingly-structure-6248`
                                        )
                                    }
                                    className="project-github-link">
                                    GitHub <FaGithub />
                                </div>
                                <div
                                    onClick={() =>
                                        openLink(
                                            `https://644dff6dcbc6c416711d0e74--beautiful-cannoli-16dba7.netlify.app/`
                                        )
                                    }
                                    className="project-deployed-link">
                                    Deploy <HiExternalLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
