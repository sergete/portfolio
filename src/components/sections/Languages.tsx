import { motion } from "framer-motion";
import { info } from "@/data/info";
import { Languages as LangIcon } from "lucide-react";

export function Languages() {
    return (
        <section id="languages" className="min-h-[100svh] w-full flex items-center justify-center snap-start bg-background relative px-4 py-32">
            <div className="max-w-5xl w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <LangIcon className="w-8 h-8" />
                    Languages
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {info.languages.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-secondary/50 border border-border group hover:border-primary transition-all duration-300"
                        >
                            <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{lang.name}</h3>
                            <p className="text-xl text-muted-foreground">{lang.level}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
