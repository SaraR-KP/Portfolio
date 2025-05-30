import { Clapperboard, Code, Section, User } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl"> {/*  */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span> {/* text-primary applies the colour to the word "Me" */}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* using grid becuase i have 2 cols in that section one for
            about me and the other for my "skills"/things i have done*/}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Passionate Front End Beginner Developer </h3>

                    <p className="text-muted-foreground">
                       I'm a high school student and beginner programmer and video designer with a focus on front-end development.
                       Most of my experience has been in creating websites using HTML, CSS, a bit of JavaScript,
                       and working with SQL for database development. I've built a project similar to IMDb to
                       manage large sets of data. I also enjoy working on creative projects using tools like Figma
                       for UI design, Twine for interactive storytelling, and Python for programming logic and After Effects
                       for creating visual media. I'm always curious to explore new tools and techniques in web development,
                       and I love combining design with functionality.


                    </p>

                    <p className="text-muted-foreground">
                        My passion is to become a highly skilled web and video designer who can bring creative ideas to life.
                        I love adding my own twist to every project I work on, blending creativity with functionality.
                        My goal is to design websites and media that not only looks great but also leaves a lasting impression on users.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="page-button"> Contact Me 💫 
                    </a>
                    </div>
                </div>
                    {/* these are card that show off the things i can do and have done before, so it is easier
                    for whoever is looking at my portfolio to see my strengghts*/}
                <div className="grid grid-cols-1 gap-6"> 
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web And Database Developent</h4>
                                <p className="text-muted-foreground">
                                    Experience in web design, database development along with small creative
                                    projects using Figma, Twine and Python.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI Design</h4>
                                <p className="text-muted-foreground">
                                I've designed intuitive and responsive user
                                interfaces that make websites easier to navigate
                                and more enjoyable to use. I focus on clarity,
                                accessibility, and a clean visual structure to
                                ensure a positive experience for all users
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Clapperboard className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Visual & Motion Design</h4>
                                <p className="text-muted-foreground">
                                I've used Photoshop primarily for school-related design work,
                                gaining experience with layout and visual editing.
                                In After Effects, I've explored video editing more deeply,
                                creating content in formats like YouTube videos, school
                                projects, short-form media, along with complex animations
                                and transitions.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>



                

            </div>
        </div>
    </section>
};