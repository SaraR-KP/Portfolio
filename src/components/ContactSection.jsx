import { Mail, Map, Phone } from "lucide-react";

export const ContactSection = () => {
    return ( //id connected to my contact section from the navbar, padding y=24, padding x=4 position relative
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In<span className="text-primary"> Touch</span> {/*text primary to give that  */}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't be a stranger! Whether it's work, ideas, or just to chat, my inbox is open. 
        </p>

        <div className="gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-10 text-center"> Contact Information</h3>
                {/* icons have different padding right as have more text some less so i applied
                different padding so it all fits well */}
                <div className="space-y-6 justify-center">
                    <div className="flex justify-center space-x-4 pr-8">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-8 w-8 text-primary" /> {/* icon import from lucide and colour changed to primary */}
                        </div>
                        <div>
                            <h4 className="text-xl">Email</h4>
                            <a
                                href="mailto:sararexvgx@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                sararexvgx@gmail.com
                            </a>
                            </div>

                        </div>
                    <div className="flex justify-center space-x-4 pr-15">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-8 w-8 text-primary"/> {/* icon import from lucide and colour changed to primary */}
                        </div>
                        <div className="ml-6">
                            <h4 className="text-xl">Phone</h4>
                            <a
                                href="tel:+4796872536"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                +47 968 72536
                            </a>

                        </div>
                    
                    </div>

                    <div className="flex justify-center space-x-4 pr-17">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Map className="h-8 w-8 text-primary" /> {/* icon import from lucide and colour changed to primary */}
                        </div>
                        <div className="ml-6">
                            <h4 className="text-xl pl-4">Location</h4>
                            <a className="text-muted-foreground pl-3">
                                Oslo, Norway
                            </a>
                        </div>
                </div>
            </div>
            
        
            </div>
        </div>
        </div>
        
    </section>
    );
};