import { Moon, Sun } from "lucide-react";
import { use, useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    /* saves user's theme preferances even though the user refreshes its browser */
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") // Get the saved theme from local storage
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");  // If dark, add the "dark" class to the HTML root
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false)
        }
    }, [])


    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark"); // Remove dark mode
            localStorage.setItem("theme", "light"); // Save new preference
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark"); /* Applies the dark theme on the website */
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

        /* used "cn" within the classname so i can have more than one classname i.e. a list of classnames*/
    return (
        <button onClick={toggleTheme} className={cn("fixed top-20 right-6 z-50 p-2 rounded-full transition-color duration-300",
            "focus:outline-hidden" //position fixed, placemnt top 18, right is 6, z is 50 padding is 2 rounded, transition effect when colors change, hides the default focus outline 
        )}>
        {" "}
        {isDarkMode ? (
            <Sun className="h-8 w-8 text-yellow-200" /> /* height of the sun icon 6, width 6 and colour yellow */
        ) : (
        <Moon className="h-8 w-8 text-blue-800"/> /* height of the moon icon 6, width 6 and colour blue */
        )}
        </button>
    );
};