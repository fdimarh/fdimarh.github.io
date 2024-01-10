/* eslint-disable @next/next/no-img-element */
import {useState, useEffect, useRef} from "react";
import {gsap, Linear} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import {Fade} from "react-reveal";
import {Howl} from "howler";
import Button from "../Button/Button";
import styles from "./Work.module.scss";
import {MENULINKS, WORK} from "../../constants";

const Work = ({clientWidth}) => {
    const [checked, setChecked] = useState(new Array(WORK.length).fill(false));
    const [isActive, setIsActive] = useState(false);
    const [gunStyle, setGunStyle] = useState({});
    const [mockupStyle, setMockupStyle] = useState({});
    const [macTopStyle, setMacTopStyle] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);
    const [reveal, setReveal] = useState(0);
    const targetSection = useRef(null);
    const inputRef = useRef(null);
    const macRef = useRef(null);
    const companyCard = useRef(null);
    const heightRef = useRef(null);
    const videoRef = useRef(null);

    const options = {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
        gyroscope: false,
    };

    const checkedSound = new Howl({
        src: ["/sounds/pop-down.mp3"],
        volume: 0.7,
    });

    const getHeight = (position) => heightRef.current + 53 * position;

    const handleChange = (position) => {
        const height = getHeight(position);

        setChecked(() =>
            checked.map((item, index) => {
                if (index === position) return true;
                else return item;
            })
        );

        setGunStyle({
            transform: "translateY(" + height + "px)",
            visibility: "visible",
        });
        setIsActive(true);

        setChecked(() =>
            checked.map((item, index) => {
                if (index === position) return false;
                else return item;
            })
        );

        setTimeout(() => {
            checkedSound.play();
            setMockupStyle({
                transform: "translate3d(0, 0, 0) rotateX(-90deg)",
                transition: "1s",
            });
            setMacTopStyle({
                transform: "translate3d(0, 0, 0) rotateX(-90deg)",
                transition: "1s",
            });
        }, 1500);

        setTimeout(() => {
            setIsActive(false);
            macRef.current.scrollIntoView({
                behavior: "smooth",
            });
            setGunStyle({
                transform: "translateY(500px)",
                visibility: "hidden",
            });
            setMockupStyle({
                transform: "translate3d(0, 0, 0) rotateX(0deg)",
                transition: "500ms",
            });
            setMacTopStyle({
                transform: "translate3d(0, 0, 0) rotateX(0deg)",
                transition: "500ms",
            });
            videoRef.current?.load();
        }, 3000);
    };

    useEffect(() => {
        const revealTl = gsap.timeline({defaults: {ease: Linear.easeNone}});
        revealTl.from(
            targetSection.current.querySelectorAll(".seq"),
            {opacity: 0, duration: 0.5, stagger: 0.5},
            "<"
        );

        ScrollTrigger.create({
            trigger: targetSection.current.querySelector(".work-wrapper"),
            start: "100px bottom",
            end: `center center`,
            animation: revealTl,
            scrub: 0,
        });
    }, [targetSection, isActive]);

    useEffect(() => {
        VanillaTilt.init(companyCard.current, options);
    }, [companyCard.current]);

    useEffect(() => {
        if (inputRef.current) {
            const handlePosition = () => {
                const {top} = inputRef.current.getBoundingClientRect();
                const scrollTop = document.documentElement.scrollTop;
                const clientTop = document.documentElement.clientTop;
                const output = Math.floor((top + scrollTop - clientTop) / 100) + 60;
                heightRef.current = output;
            };

            handlePosition();
            window.addEventListener("resize", handlePosition);
            window.addEventListener("scroll", handlePosition);
        }

        return () => {
            window.removeEventListener("resize", handlePosition);
            window.removeEventListener("scroll", handlePosition);
        };
    }, [inputRef.current]);

    return (
        <section
            className="w-full relative select-none xs:mt-40 sm:mt-72 mb-20"
            id={MENULINKS[3].ref}
            ref={targetSection}
        >
            <img
                src="/left-pattern.svg"
                className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
                loading="lazy"
                height={700}
                width={320}
                alt=""
            />
            <div className="section-container py-16 flex flex-col justify-center">
                <div className="flex flex-col work-wrapper">
                    <div className="flex flex-col">
                        <p className="uppercase tracking-widest text-gray-light-1 seq">
                            WORK
                        </p>
                        <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
                            Experience
                        </h1>
                        <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
                            A quick recap of where I&apos;ve worked.{" "}
                        </h2>
                    </div>
                </div>
                <>
                    <div className="flex flex-col items-center">
                        <div className="flex seq">
                            <div className="py-5">
                                {WORK.map((job, index) => {
                                    const {company} = job;
                                    return (
                                        <div key={company}>
                                            <Button
                                                key={company}
                                                classes={`text-lg mb-4 ${
                                                    index === activeIndex && "primary__button__active"
                                                }`}
                                                href={`#${company.toLowerCase()}`}
                                                type="primary"
                                                onClick={() => {
                                                    setActiveIndex(index);
                                                    setReveal((prev) => prev + 1);
                                                }}
                                            >
                                                {company}
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            className="pt-10 col-span-12 flex flex-col justify-center items-center min-h-full seq">
                            <Fade spy={reveal} right distance="4rem">
                                <div className="bg-gray-dark-4 rounded-2xl px-10 py-10 w-auto h-full mx-16">
                                    <p className="font-bold mb-2 text-2xl">
                                        {WORK[activeIndex]?.company}
                                    </p>
                                    <p className="mb-1 text-lg">{WORK[activeIndex]?.title}</p>
                                    <p className="italic text-sm font-thin">
                                        {/* {company?.startDate} -{" "}
                        {company?.endDate ? company?.endDate : "Present"} */}
                                        {WORK[activeIndex]?.range}
                                    </p>
                                    <ul className="text-base mt-6 list-disc ml-2 z-30">
                                        {WORK[activeIndex]?.responsibilities.map((r) => (
                                            <li key={r} className="mt-2">
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </>
            </div>
        </section>
    );
};

export default Work;
