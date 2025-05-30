import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        // text small, padding 6 background colour primary/10 flex position, flex col so that i have 2 colums, centered items and a gap of 4
        <footer className="text-sm p-6 bg-primary/10 flex flex-col items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Sara Rekic, All rights reserved.</p>

            <a //a button which leads back to the top of my portfolio
                href="#hero"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center"
            >
                <ArrowUp size={25} />
            </a>
            <div className="text-xs hover:text-primary">
                Icons by <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">Lucide</a>
            </div>

        </footer>
    );
};
