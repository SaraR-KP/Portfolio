import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Frontend
    {name: "HTML/CSS", level: 75, category: "frontend"},
    {name: "JavaScript", level: 60, category: "frontend"},
    {name: "React", level: 70, category: "frontend"},
    {name: "Tailwind CSS", level: 65, category: "frontend"},


    // Backend
    {name: "SQL", level: 90, category: "backend"}, 

    // Design
    {name: "Photoshop", level: 70, category: "design"},
    {name: "AfterEffects", level: 95, category: "design"},
    {name: "Figma", level: 80, category: "design"},

    // Robotics
    {name: "LEGO MINDSTORMS", level: 80, category: "robotics"},
    {name: "mBot", level: 80, category: "robotics"},
    {name: "Micro:bit", level: 95, category: "robotics"},

    // Interactive Story
    {name: "Twine", level: 95, category: "interactive story"}, 
    
    // Programming
    {name: "Scratch", level: 85, category: "programming"},
    {name: "Python", level: 70, category: "programming"},
    
];

const categories = ["all", "frontend", "programming", "backend", "robotics", "design", "interactive story", ];


export const SkillsSection = () => {
      // State to keep track of which category is currently active/selected
    const [activeCategory, setActiveCategory] = useState ("all"); /* category selector */

    // Filters the skills based on the active category
    const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory //loops through skills array, goes through
    //each item, and we choose which items we want to keep on the filtered skills array or not
    //if this above is true then we keep the category and if false, we don't
    );
                        //skills,  padding 24, padding x 4, position relative and colour bg secondary devided by 3  
                        //mb stands for margin bottom
                        // max-w-5xl max width is 5xl   
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/3">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3-xl md:text-4xl font-bold mb-12 text-center"> 
                My <span className="text-primary"> Skills</span> 
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                    key={key}
                    onClick={() => setActiveCategory(category)} //padding x = 5, padding y = 2, rounded, transition colors
                    // with an animation, capitalize to capitalize the words, and when hovered is a bg primary colour /20
                    // if the button is in the active category then its styled differently
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize hover:bg-primary/20",
                    activeCategory === category ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}
                >
                    {category}
                    </button>
                )
                )}

            </div>

             {/* Grid container for skills cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
                {filteredSkills.map((skill, key) => (
                    <div 
                    key={key}
                    className="bg-card p-6 rounded-lg shadow-xs card-hover"
                >
                    <div className="text-left mg-4">
                        <h3 className="font-semibold text-lg"> {skill.name}</h3>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-primary h-2 rounded-full origin-left animate-[grow.1.5s_ease-out]" //when hovered they will be zoomed in a little
                        style={{width: skill.level + "%" }}
                    />
                    </div>
                        
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">
                            {skill.level}%
                            </span>
                    </div>


                    </div>
                ))}

            </div>

        </div>
    </section> 
)}