import React from "react";
import "./portfolio.css";
import sort from "../../assets/sorty.png";
import portfolio from "../../assets/portfolio1.png";
import quiz from "../../assets/quizz.jpg";
import dash from "../../assets/dash.png";
import allDrive from "../../assets/allDrive.png";

const Portfolio = () => {
    const data = [
        {
            id: 1,
            img: sort,
            title: "Sorty",
            desc: "Simulates the sorting algorithms, built with ReactJs",
            github: "https://github.com/Zahra-Elair/Sorty",
            demo: "https://zahra-elair.github.io/Sorty/",
        },

        {
            id: 3,
            img: dash,
            title: "Booking System",
            desc: "web application for tracking time of presence and clocking in, built using Angular, SpringBoot",
            github: "https://github.com/Zahra-Elair/boocking-system-Frontend",
            demo: "#",
        },
        {
            id: 4,
            img: quiz,
            title: "Quiz App",
            desc: "A quizz to test your basic knowledge of HTML and CSS, built with ReactJs",
            github: "https://github.com/Zahra-Elair/quizz_app",
            demo: "https://zahra-elair.github.io/quizz_app/",
        },
        {
            id: 2,
            img: portfolio,
            title: "My Portfolio",
            desc: "The one you're browsing now, built with ReactJs",
            github: "https://github.com/Zahra-Elair/Portfolio",
            demo: "https://zahra-elair.github.io/Portfolio/",
        },
        {
            id: 5,
            img: allDrive,
            title: "All Drive",
            desc: "A web application for managing diffrent cloud storages in one place , built with MERN stack",
            github: "https://github.com/Zahra-Elair/All-Drive",
            demo: "https://zahra-elair.github.io/Portfolio/",
        },
        // {
        //     id: 5,
        //     img: lool4,
        //     title: "Hedwig",
        //     desc: "A Journal where you can post anonymously",
        //     github: "https://github.com/Zahra-Elair/Hedwig",
        //     demo: "#",
        // },
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
