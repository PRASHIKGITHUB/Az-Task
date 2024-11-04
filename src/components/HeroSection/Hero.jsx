import React, { useState } from 'react';
import './Hero.css';
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downarrow.png';
import CalendarOutline from '../../assets/CalendarOutline.png';
import BriefcaseOutline from '../../assets/BriefcaseOutline.png';
import howitworks from '../../assets/howitworks.png';
const chaptersData = {
    1: [
        { title: "Part 1: Lorem Ipsum Dolor Sit Amet", content: ["Video 1 - 10:00", "Article 1 - 10:00", "Quiz 1 - 10:00", "Coding Exercise 1 - 10:00", "Combined Resource 1 - 10:00"], time: "2:00:00", level: "Medium", completion: 45 },
        { title: "Part 2: Lorem Ipsum Dolor Sit Amet", content: ["Video 2 - 10:00", "Article 2 - 10:00"], time: "2:00:00", level: "Medium", completion: 20 },
        { title: "Part 3: Lorem Ipsum Dolor Sit Amet", content: ["Video 3 - 10:00"], time: "2:00:00", level: "Medium", completion: 80 },
    ],
    2: [
        { title: "Part 1: Introduction to Chapter 2", content: ["Video 1 - 15:00", "Article 1 - 15:00"], time: "1:30:00", level: "Easy", completion: 30 },
        { title: "Part 2: Advanced Topics", content: ["Quiz 1 - 15:00", "Coding Exercise 1 - 15:00"], time: "1:00:00", level: "Hard", completion: 50 },
    ],
};

const HeroSection = () => {
    const [activeChapter, setActiveChapter] = useState(1);
    const [openDropdowns, setOpenDropdowns] = useState({});

    const switchChapter = (chapter) => {
        setActiveChapter(chapter);
        setOpenDropdowns({}); // Reset dropdowns when switching chapters
    };

    const toggleDropdown = (index) => {
        setOpenDropdowns(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="hero-section">
            <div className="up">
                <div className="left">
                    {/* mentor sessions and  */}
                    <button style={{ display: 'flex' }}>
                        <img src={CalendarOutline} alt="" />
                        <p style={{ fontSize: '22px' }} >Mentor Sessions</p>
                    </button>

                    <button style={{ display: 'flex' }}>
                        <img src={BriefcaseOutline} alt="" />
                        <p style={{ fontSize: '22px' }} >Learning Material</p>
                    </button>

                </div>
                <div className="right">
                    <button style={{ display: 'flex' }}>
                        <img src={howitworks} alt="" />
                        <p style={{ fontSize: '22px' }} >How it Wroks</p>
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
                            Chapter {chapter}
                        </button>
                    ))}
                </div>

                <div className="content-panel">
                    {chaptersData[activeChapter].map((part, index) => (
                        <div key={index} className="part">
                            <div className="part-header" onClick={() => toggleDropdown(index)}>
                                <span className="part-title">{part.title}</span>
                                <span className="dropdown-indicator">
                                    {openDropdowns[index] ? <img src={upArrow} alt="" /> : <img src={downArrow} alt="" />}
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
                            {openDropdowns[index] && (
                                <div className="dropdown-content">
                                    {part.content.map((item, idx) => (
                                        <p key={idx}>{item}</p>
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
