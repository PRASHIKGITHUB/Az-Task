import React, { useState, useEffect } from 'react';
import './Hero.css';
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downarrow.png';
import CalendarOutline from '../../assets/CalendarOutline.png';
import BriefcaseOutline from '../../assets/BriefcaseOutline.png';
import howitworks from '../../assets/howitworks.png';
import clockIcon from '../../assets/clock.png';
import videoIcon from '../../assets/video.png';
import articleIcon from '../../assets/article.png';
import quizIcon from '../../assets/quiz.png';
import codingIcon from '../../assets/coding.png';
import resourceIcon from '../../assets/resource.png';
import contest from '../../assets/contest.png';
import resource from '../../assets/resource.png';

const chaptersData = {
    1: [
        { chapterNo: "1", title: "Introduction of DP", content: [{ type: "video", title: "FrameWork 1", time: "10:00" }, { type: "video", title: "Framework 2", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 45, materialcnt: 3 },
        { chapterNo: "2", title: "More on DP", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 20, materialcnt: 6 },
        { chapterNo: "3", title: "Applications of DP", content: [{ type: "video", title: "Applicztion 1", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 45, materialcnt: 2 },
        { chapterNo: "4", title: "DP Drill", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 69, materialcnt: 10 },
    ],
    2: [
        { chapterNo: "1", title: "Introduction of Graph", content: [{ type: "video", title: "FrameWork 1", time: "10:00" }, { type: "video", title: "Framework 2", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 85 },
        { chapterNo: "2", title: "Dijkstra Algorithm", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 25 },
        { chapterNo: "3", title: "Bellman Ford Algorithm", content: [{ type: "video", title: "Applicztion 1", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 59 },
        { chapterNo: "4", title: "Floyd Warshall Algorithm", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 79 },
    ],
    3: [
        { chapterNo: "1", title: "Part 1: Lorem Ipsum Dolor Sit Amet", content: [{ type: "video", title: "Video 1", time: "10:00" }, { type: "video", title: "Video 1", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 45 },
        { chapterNo: "2", title: "Part 2: Lorem Ipsum Dolor Sit Amet", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 20 },
        { chapterNo: "3", title: "Part 1: Lorem Ipsum Dolor Sit Amet", content: [{ type: "video", title: "Video 1", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 45 },
        { chapterNo: "4", title: "Part 2: Lorem Ipsum Dolor Sit Amet", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 20 },
    ],
    4: [
        { title: "Part 1: Introduction to Chapter 2", content: [{ type: "video", title: "Video 1", time: "15:00" }, { type: "article", title: "Article 1", time: "15:00" }], time: "1:30:00", level: "Easy", completion: 30 },
    ],
    5: [
        { title: "Part 1: Introduction to Chapter 2", content: [{ type: "video", title: "Video 1", time: "15:00" }, { type: "article", title: "Article 1", time: "15:00" }], time: "1:30:00", level: "Easy", completion: 50 },
    ],
};

const getIcon = (type) => {
    switch (type) {
        case 'video':
            return videoIcon;
        case 'article':
            return articleIcon;
        case 'quiz':
            return quizIcon;
        case 'coding':
            return codingIcon;
        case 'resource':
            return resourceIcon;
        default:
            return null;
    }
};

const HeroSection = ({ isOpen }) => {
    const [activeChapter, setActiveChapter] = useState(1);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [activeButton, setActiveButton] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1600);
    const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 1000);
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 1250);

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth <= 1250);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsNarrowScreen(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1600);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    const calculateTotalTime = (chapterParts) => {
        let totalSeconds = 0;
        chapterParts.forEach(part => {
            const [hours, minutes, seconds] = part.time.split(':').map(Number);
            totalSeconds += (hours * 3600) + (minutes * 60) + (seconds || 0);
        });

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const switchChapter = (chapter) => setActiveChapter(chapter);

    const toggleDropdown = (index) => {
        setOpenDropdowns(prevState => ({
            ...prevState,
            [activeChapter]: {
                ...prevState[activeChapter],
                [index]: !prevState[activeChapter]?.[index]
            }
        }));
    };

    return (
        <div className={`hero-section ${isOpen ? 'heroOpen' : 'heroClose'}`} >
            <div className="up">
                <div className="left">
                    <button
                        className={activeButton === "mentor" ? "active" : ""}
                        onClick={() => handleButtonClick("mentor")}
                    >
                        <img src={CalendarOutline} alt="Calendar Icon" />
                        <p>Mentor Sessions</p>
                    </button>
                    <button
                        className={activeButton === "learning" ? "active" : ""}
                        onClick={() => handleButtonClick("learning")}
                    >
                        <img src={BriefcaseOutline} alt="Briefcase Icon" />
                        <p>Learning Material</p>
                    </button>
                </div>

                <div className="right">
                    <button onClick={() => handleButtonClick("howitworks")}>
                        <img src={howitworks} alt="How it Works Icon" />
                        <p>How it Works</p>
                    </button>
                </div>
            </div>

            {/* efjwfsadlkfjasdfjasdfskdjfasdjf;asjdf;lasdjfl; */}
            <div className="down">
                <div className="side-panel">
                    {[1, 2, 3, 4, 5].map((chapter) => (
                        <button
                            key={chapter}
                            className={`tab-button ${activeChapter === chapter ? 'active' : ''}`}
                            onClick={() => switchChapter(chapter)}
                        >
                            <p style={{ fontSize: '20px' }}>
                                {isSmall ? `Ch. ${chapter}` : `Chapter ${chapter}`}
                                {/* Chapter {chapter} */}
                            </p>

                            {/* Conditionally render time display only if screen is > 1300px */}
                            {!isSmallScreen && activeChapter === chapter && (
                                <div className="time-display">
                                    <img src={clockIcon} alt="clock icon" />
                                    <span style={{ fontSize: '20px', color: '#84A5DD' }}>
                                        {calculateTotalTime(chaptersData[chapter] || [])}
                                    </span>
                                </div>
                            )}
                        </button>
                    ))}
                </div>


                {/* dsfdsfsdf */}
                <div className="content-panel">
                    {(chaptersData[activeChapter] || []).map((part, index) => (
                        <div key={index} className={`part ${openDropdowns[activeChapter]?.[index] ? 'open' : ''}`}>

                            <div className="wrapper" onClick={() => toggleDropdown(index)}>
                                <div className="part-title">
                                    <p className='first' >PART {part.chapterNo}</p>
                                    <p className='second' >{part.title} </p>
                                </div>
                                <div className="wrapper-right">
                                    {/* Conditionally render part-icons only if screen width is greater than 1000px */}
                                    {!isNarrowScreen && (
                                        <div style={{ width: '421px', height: '36px' }} className="part-icons">
                                            <span>
                                                <img src={clockIcon} alt="" />
                                                <p>{part.time}</p>
                                            </span>
                                            <span>
                                                <img src={contest} alt="" />
                                                <p>{part.level}</p>
                                            </span>
                                            <span>
                                                <img src={resource} alt="" />
                                                <p>{part.materialcnt}</p>
                                            </span>
                                            <span className="dropdown-indicator">
                                                <img
                                                    style={{ height: '16px', width: '29px' }}
                                                    src={openDropdowns[activeChapter]?.[index] ? upArrow : downArrow}
                                                    alt="toggle icon"
                                                />
                                            </span>
                                        </div>
                                    )}

                                    <div className="wrapper-down">
                                        <p>{part.completion}% Completed</p>
                                    </div>
                                </div>




                                <div style={{ position: 'absolute', bottom: '0px', left: '0px' }} className="progress-bar">
                                    <div className="progress" style={{ width: `${part.completion}%` }}></div>
                                </div>
                            </div>


                            {openDropdowns[activeChapter]?.[index] && (
                                <div className="dropdown-content">
                                    {part.content.map((item, idx) => (
                                        <div key={idx} className="dropContents">
                                            <div className="icon-title">
                                                <img src={getIcon(item.type)} alt={`${item.type} icon`} />
                                                <p>{item.title}</p>
                                            </div>
                                            <div className="time">
                                                <img src={clockIcon} alt="clock icon" />
                                                <span>{item.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
