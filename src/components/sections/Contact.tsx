import { motion } from "framer-motion";
import { info } from "@/data/info";
import { Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="min-h-[100svh] w-full flex flex-col items-center justify-center snap-start bg-background relative px-4 py-32 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
            >
                <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
                <p className="text-xl text-muted-foreground mb-12">
                    I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex justify-center gap-6 mb-16">
                    <a href={info.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    {info.socialMedia.github && (
                        <a href={info.socialMedia.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <Github className="w-6 h-6" />
                        </a>
                    )}
                </div>

                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {info.name}. All rights reserved.
                </p>
            </motion.div>
        </section>
    );
}
