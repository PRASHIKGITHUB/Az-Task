import React, { useState } from 'react';
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

const chaptersData = {
    1: [
        { title: "Part 1: Lorem Ipsum Dolor Sit Amet", content: [{ type: "video", title: "Video 1", time: "10:00" },{ type: "video", title: "Video 1", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 45 },
        { title: "Part 2: Lorem Ipsum Dolor Sit Amet", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 20 },
        { title: "Part 1: Lorem Ipsum Dolor Sit Amet", content: [{ type: "video", title: "Video 1", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 45 },
        { title: "Part 2: Lorem Ipsum Dolor Sit Amet", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 20 },
    ],
    2: [
        { title: "Part 1: Introduction to Chapter 2", content: [{ type: "video", title: "Video 1", time: "15:00" }, { type: "article", title: "Article 1", time: "15:00" }], time: "1:30:00", level: "Easy", completion: 30 },
    ],
    3: [
        { title: "Part 1: Lorem Ipsum Dolor Sit Amet", content: [{ type: "video", title: "Video 1", time: "10:00" },{ type: "video", title: "Video 1", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 45 },
        { title: "Part 2: Lorem Ipsum Dolor Sit Amet", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 20 },
        { title: "Part 1: Lorem Ipsum Dolor Sit Amet", content: [{ type: "video", title: "Video 1", time: "10:00" }, { type: "article", title: "Article 1", time: "10:00" }], time: "2:00:00", level: "Medium", completion: 45 },
        { title: "Part 2: Lorem Ipsum Dolor Sit Amet", content: [{ type: "quiz", title: "Quiz 1", time: "10:00" }], time: "1:00:00", level: "Medium", completion: 20 },
    ],
    4: [
        { title: "Part 1: Introduction to Chapter 2", content: [{ type: "video", title: "Video 1", time: "15:00" }, { type: "article", title: "Article 1", time: "15:00" }], time: "1:30:00", level: "Easy", completion: 30 },
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

const HeroSection = () => {
    const [activeChapter, setActiveChapter] = useState(1);
    const [openDropdowns, setOpenDropdowns] = useState({});

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
        <div className="hero-section">
            <div className="up">
                <div className="left">
                    <button>
                        <img src={CalendarOutline} alt="Calendar Icon" />
                        <p>Mentor Sessions</p>
                    </button>
                    <button>
                        <img src={BriefcaseOutline} alt="Briefcase Icon" />
                        <p>Learning Material</p>
                    </button>
                </div>
                <div className="right">
                    <button>
                        <img src={howitworks} alt="How it Works Icon" />
                        <p>How it Works</p>
                    </button>
                </div>
            </div>

            <div className="down">
                <div className="side-panel">
                    {[1, 2, 3, 4, 5].map((chapter) => (
                        <button
                            key={chapter}
                            className={`tab-button ${activeChapter === chapter ? 'active' : ''}`}
                            onClick={() => switchChapter(chapter)}
                        >
                            <p>Chapter {chapter}</p>
                            {activeChapter === chapter && (
                                <div className="time-display">
                                    <img src={clockIcon} alt="clock icon" />
                                    <span>{calculateTotalTime(chaptersData[chapter] || [])}</span>
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                <div className="content-panel">
                    {(chaptersData[activeChapter] || []).map((part, index) => (
                        <div key={index} className={`part ${openDropdowns[activeChapter]?.[index] ? 'open' : ''}`}>
                            <div className="part-header" onClick={() => toggleDropdown(index)}>
                                <span>{part.title}</span>
                                <span className="dropdown-indicator">
                                    <img src={openDropdowns[activeChapter]?.[index] ? upArrow : downArrow} alt="toggle icon" />
                                </span>
                            </div>

                            <div className="part-info">
                                <span>{part.time}</span>
                                <span>{part.level}</span>
                                <span>{part.completion}% Completed</span>
                            </div>

                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${part.completion}%` }}></div>
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
