import React from "react";
import { User, GraduationCap, Code2, Lightbulb } from "lucide-react";
import { Card } from "./ui/card";
import { aboutMe } from "../mock";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Major in Computer Science from Maharaja Agrasen College",
    },
    {
      icon: Code2,
      title: "Expertise",
      description: "ML Models, Data-Driven Solutions & Intelligent Systems",
    },
    {
      icon: Lightbulb,
      title: "Focus",
      description: "Deep Learning Architectures & Distributed System Design",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <User className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who I Am</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about AI, driven by curiosity, focused on impact
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {aboutMe.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
