import React from 'react';
import { Github, Star, GitFork, Activity } from 'lucide-react';
import { Card } from './ui/card';
import { githubActivity } from '../mock';

const GitHubActivity = () => {
  return (
    <section id="github" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Github className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub Activity
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contributing to the developer community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
            <Activity className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">{githubActivity.totalContributions}</div>
            <div className="text-sm text-muted-foreground">Total Contributions</div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
            <GitFork className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">{githubActivity.currentStreak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
            <Github className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">{githubActivity.repositories.length}</div>
            <div className="text-sm text-muted-foreground">Public Repositories</div>
          </Card>
        </div>

        {/* Latest Repositories */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Latest Repositories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {githubActivity.repositories.map((repo, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
                onClick={() => window.open(`https://github.com/${githubActivity.username}/${repo.name}`, '_blank')}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-cyan-400" />
                    <h4 className="font-semibold font-mono text-sm">{repo.name}</h4>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>{repo.stars}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{repo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    <span className="text-xs font-medium">{repo.language}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Updated {repo.updated}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;