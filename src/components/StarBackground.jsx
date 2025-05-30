import { useEffect, useState } from "react";

// id, size, x, y opacity, animationDuration
// id, size, x, y delay, animationDuration


export const StarBackground = () => {
    const [stars, setStars] = useState ([])
    const [meteors, setMeteors] = useState ([])


    useEffect(() => {
        generateStars(); //used for star generation
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000
        );

        const newStars = []

        for(let i = 0; i < numberOfStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, //generates stars with the size of between 1 and 4 pixels
                x: Math.random() * 100, // random horizontal position (in %)
                y: Math.random() * 100, // random vertical position (in %)
                opacity: Math.random() * 0.5 + 0.5, //so some stars can look faint while the others have full opacity
                animationDuration: Math.random() * 4 + 2, //some stars will pulsate, some faster and some slower 
            });
        }

        setStars(newStars);
    };

        const generateMeteors = () => {
        const numberOfMeteors = 6
        const newMeteors = [];

        for(let i = 0; i < numberOfMeteors; i++){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, //generates meteors with the size of between 1 and 3 pixels
                x: Math.random() * 100, // random horizontal position (in %)
                y: Math.random() * 20, // random vertical position (in %)
                delay: Math.random() * 15, //delay at whihc the meteors will be falling
                animationDuration: Math.random() * 3 + 3, //some stars will pulsate, some faster and some slower 
            });
        }

        setMeteors(newMeteors);
    };

// star + meteor styles and animations are handled in index.css
return (
    <div className="fixed inset-0 oveflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div
                key={star.id}
                className="star animate-pulse-subtle"
                style={{
                    width: star.size + "px",  // size in pixels
                    height: star.size + "px",
                    left: star.x + "%",       //x and y in percent
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
            }}> 

            </div>

        ))}

        {meteors.map((meteor) => (
            <div
                key={meteor.id}
                className="meteor animate-meteor" 
                style={{
                    width: meteor.size * 20 + "px",
                    height: meteor.size + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
            }}> 

            </div>

        ))}
    </div>
    );
};