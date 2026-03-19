import React, { useState, useEffect } from "react";
import { Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "../mock";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.tagline;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-6 animate-in fade-in duration-1000">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-6">
            {personalInfo.title}
          </p>

          {/* Typing Animation */}
          <div className="min-h-[80px] flex items-center justify-center">
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/75 hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
