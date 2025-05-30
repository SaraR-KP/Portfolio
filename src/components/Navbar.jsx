import { useState } from "react";
import { cn } from "../lib/utils";
import { useEffect } from "react";
import { X, Menu, LucideX } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

/* uses the previous made cn function */
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false); //makes boolian variables
    const [isMenuOpen, setIsMenuOpen] = useState(false); //makes boolian variables


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10) //the distance which the user scrolls is higher than the height of the navbar
        }

        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300 bg-primary/10",
        isScrolled ?  "py-3 bg.background/80 backdrop-blur-md shadow-xs" : "py-5" //padding y = 3, backround /80, backdrop blud medium and shadow xs
    )}
    >

    {/* this is my name at the top left and text glow makes my name glow faintly*/}
    <div className="container flex items-center justify-between">
        <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
            >

            <span className="relative z-10">
                <span className="text-glow text-foreground"> Sara Rekic </span>
                Portfolio
            </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                    {item.name}</a>

            ))}
        </div>


        {/*mobile nav */}
        {/* telling screen readers if the button will "Open Menu" or "Close Menu" based on isMenuOpen */} 
        <button onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu "}
            >
            {isMenuOpen ? <LucideX size={24} /> : <Menu size={24} />} {/* Uses the X icon for menu from lucide so when its opens you click X to close it*/}
            </button>

        <div className={cn("fixed inset-0 bg-background/85 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen
        ? "opacity-100 pointer-events-auto" //When open fully opaque and interactive (pointer events enabled)
        : "opacity-0 pointer-events-none" // When closed invisible and non-interactive (pointer events disabled)
        )}
    >        {/*: Navigation items container with vertical spacing and larger text */}
            <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                >  
                    {item.name}</a>

            ))}
            </div>
        </div>

    </div>
    </nav>
    );
};