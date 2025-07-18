'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OpenCardProps {}

const OpenCard: React.FC<OpenCardProps> = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const cardVariants = {
        expanded: {
            width: "400px",
            transition: { duration: 0.3 }
        },
        collapsed: {
            height: '200px',
            transition: { duration: 0.3 }
        }
    };

    const cards = ["/mumbai.png", "/Karnataka.png"];
    const locations = ["Mumbai", "Karnataka"];
    const description = [
        "Mumbai is the financial capital of India, known for its vibrant culture, diverse population, and bustling city life. It is home to Bollywood, the Hindi film industry, and offers a mix of historical landmarks, modern skyscrapers, and beautiful beaches.",
        "Karnataka is a state in southern India known for its rich cultural heritage, diverse landscapes, and historical significance. It is home to the IT hub of Bangalore, ancient temples, lush forests, and vibrant festivals. Karnataka's cuisine is also renowned for its variety and flavors."
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg h-[420px] sm:h-[520px] overflow-hidden cursor-pointer relative group"
                    onClick={() => handleCardClick(index)}
                    initial={{ width: "200px", height: "200px" }}
                    animate={expandedIndex === index ? "expanded" : "collapsed"}
                    variants={cardVariants}
                >
                    <div
                        className="w-full h-full bg-cover bg-center flex items-end justify-center"
                        style={{ backgroundImage: `url(${card})`, minHeight: '100%', minWidth: '200px' }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
                        <div className="relative z-10 w-full flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{locations[index]}</h2>
                            {expandedIndex === index && (
                                <p className="text-white text-sm drop-shadow-lg mt-2">{description[index]}</p>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default OpenCard;
