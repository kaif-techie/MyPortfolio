import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Clock className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Learning Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My path to becoming a Machine Learning Engineer
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={item.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-background border-4 border-cyan-500 shadow-lg shadow-cyan-500/50"></div>

                {/* Content Card */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-cyan-400 mb-3 font-medium">{item.period}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;