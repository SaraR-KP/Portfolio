import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return ( //makes my name, mini info and projects on the hero section, with each object showing with a delay (one after the other)
    <section
        id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hello, I am</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Sara</span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Rekic</span>

                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm a front-end developer and designer passionate about creating beautiful,
                    user-focused digital experiences. I also work with video and multimedia,
                    bringing stories to life through motion and visuals.

                </p>
                {/* a button which leads to #projects, aka my projects section*/}
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="page-button"> 
                        View My Work
                    </a>
                </div>



            </div>
        </div>

         {/* a "bouncy" arrow and words scroll showing the user they can scroll down on my page*/}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
        
        </div>
        </section>);
}