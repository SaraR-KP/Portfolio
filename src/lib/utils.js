import {clsx} from "clsx";
import { twMerge } from "tailwind-merge";


export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

/* used so i can have more than one classname i.e. a list of classnames*/