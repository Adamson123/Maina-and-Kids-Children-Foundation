import { motion } from "framer-motion";

const FadeInElement = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export default FadeInElement;
