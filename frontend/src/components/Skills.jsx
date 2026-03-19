import React from "react";
import { Code2, Brain, Layers, Globe, Wrench, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { skills } from "../mock";

const Skills = () => {
  const skillCategories = [
    // {
    //   title: 'Programming',
    //   icon: Code2,
    //   skills: skills.programming,
    //   color: 'cyan'
    // },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: skills.machineLearning,
      color: "blue",
    },
    {
      title: "Deep Learning",
      icon: Layers,
      skills: skills.deepLearning,
      color: "indigo",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: skills.webDevelopment,
      color: "violet",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: skills.tools,
      color: "purple",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in cutting-edge technologies for AI and software
            development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium font-mono">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
