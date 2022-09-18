import React from "react";
import "./portfolio.css";
import PIC from "../../assets/sorty.png";
import lool1 from "../../assets/lool1.jpg";
import lool2 from "../../assets/lool2.jpg";
import lool3 from "../../assets/lool3.jpg";
import lool4 from "../../assets/lool4.jpg";

const Portfolio = () => {
    const data = [
        {
            id: 1,
            img: PIC,
            title: "Sorty",
            desc: "A sorting visualizer web app",
            github: "#",
            demo: "#",
        },
        {
            id: 2,
            img: lool1,
            title: "Lool",
            desc: "A social media web app",
            github: "#",
            demo: "#",
        },
        {
            id: 3,
            img: lool2,
            title: "Lool",
            desc: "A social media web app",
            github: "#",
            demo: "#",
        },
        {
            id: 4,
            img: lool3,
            title: "Lool",
            desc: "A social media web app",
            github: "#",
            demo: "#",
        },
        {
            id: 5,
            img: lool4,
            title: "Lool",
            desc: "A social media web app",
            github: "#",
            demo: "#",
        },
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, img, title, desc, github, demo }) => {
                    return (
                        <article className="portfolio__item" key={id}>
                            <div className="portfolio__item-image">
                                <img src={img} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
