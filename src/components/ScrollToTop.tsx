import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mainElement = document.querySelector('main');
        if (!mainElement) return;

        const toggleVisibility = () => {
            if (mainElement.scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        mainElement.addEventListener("scroll", toggleVisibility);
        return () => mainElement.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[60] p-4 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
