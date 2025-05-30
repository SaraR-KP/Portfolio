import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

// names of projects, ids, descriptions and tags
const projects = [
    {
        id: 1,
        title: "Dubrovnik Travel Page",
        description: "A travel page website of Dubrovnikmade with HTML and CSS.",
        image: "./projects/Dubrovnik.png",
        tags: ["HTML", "CSS"],
        githubUrl: "https://github.com/SaraR-KP/Travel-Guide"
    },

    {
        id: 2,
        title: "Art Selling Page",
        description: "An imaginary art selling website made with HTML and CSS.",
        image: "./projects/Art.png",
        tags: ["HTML", "CSS"],
        githubUrl: "https://github.com/SaraR-KP/imaginary-shop" 
    },

    {
        id: 3,
        title: "App For The Disabled",
        description: "An app made for those which have disabilites in Figma.",
        image: "./projects/figma.png",
        tags: ["Figma"],
        githubUrl: "https://www.figma.com/proto/b0FMQzJLh3XYi02mt5sjvl/W0rk-thing?page-id=0%3A1&node-id=221-191&p=f&viewport=66%2C213%2C0.37&t=UU3DZAKMKZ5mymus-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=221%3A191"
    },
    
    {
        id: 4,
        title: "JavaScript tasks",
        description: "A JavaScript website for calculating values, randomising lists and checking palindromes",
        image: "./projects/Java.png",
        tags: ["JavaScript"],
        githubUrl: "https://github.com/SaraR-KP/JavaScript-testing" 
    },

    {
        id: 5,
        title: "The Shattering - Story",
        description: "A story based on the Slavic mythology made in Twine.",
        image: "./projects/Twine.png",
        tags: ["Twine"],
        githubUrl: "https://github.com/SaraR-KP/The-Shattering" 
    },
    
    {
        id: 6,
        title: "Ad Campaign",
        description: "A picture taken I took for DSQUARED2 ad campaign, edited using Photoshop.",
        image: "./projects/Reklame-2.png",
        tags: ["Photoshop"],
        githubUrl: "https://github.com/SaraR-KP/Photoshop-Ad" 
    },
]

export const ProjectsSection = () => {
    // padding y = 24, padding x = 4 and position relative
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            {/* md: stands for medium screens so the font is larger on medium displays*/}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">
            Projects</span></h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development and
            design. Each project reflects my passion for building
            user-friendly, responsive, and visually engaging experiences.
        </p>
        {/* This part connects the project, to the project image, when hovered it is zoomed in by 110 aka 1.1*/}
        <div className="mx-auto max-w-screen-xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover pb-3"
                >
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) =>(
                                <span
                                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>

                            ))}
                        </div>
                        {/* This part takes the project title and desctiption values form the top part of
                        the code and connects them to each project*/}
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-small mb-4"> {project.description}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3 pr-3 pl-3">
                            <a //this part is just a href which directs the user to my github link project and target blank opens it in another (browser) tab
                                href={project.githubUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github />
                            </a>

                        </div>
                    </div>
                    </div>
                </div>

            ))}
        </div>
         {/* Latly this is a button which leads to my github profile and in another tab and the button changes opacity when hovered*/}
        <div className="text-center mt-12">
            <a className="page-button w-fit flex items-center mx-auto gap-2 hover:hover:opacity-80"
                href="https://github.com/SaraR-KP"
                target="_blank">
                Check Out My Github <ArrowRight size={16} />
            </a>

        </div>
    </section>;
}