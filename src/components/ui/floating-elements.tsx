"use client";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Award, Users } from "lucide-react";

export const FloatingElements = () => {
  const elements = [
    { icon: CheckCircle, delay: 0, x: "10%", y: "20%" },
    { icon: Globe, delay: 2, x: "80%", y: "30%" },
    { icon: Award, delay: 4, x: "15%", y: "70%" },
    { icon: Users, delay: 6, x: "85%", y: "80%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: Element.x, top: Element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: Element.delay,
            ease: "easeInOut"
          }}
        >
          <Element.icon className="h-8 w-8 text-primary/30" />
        </motion.div>
      ))}
    </div>
  );
};
