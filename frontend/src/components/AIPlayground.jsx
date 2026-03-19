import React, { useState } from 'react';
import { Sparkles, Search, Film } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { getMovieRecommendations, movieDatabase } from '../mock';
import { useToast } from '../hooks/use-toast';

const AIPlayground = () => {
  const [movieInput, setMovieInput] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleMovieSearch = () => {
    if (!movieInput.trim()) {
      toast({
        title: "Please enter a movie name",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = getMovieRecommendations(movieInput);
      
      if (result.success) {
        setSelectedMovie(result.selectedMovie);
        setRecommendations(result.recommendations);
        toast({
          title: "Recommendations Generated!",
          description: `Found ${result.recommendations.length} similar movies`
        });
      } else {
        toast({
          title: "Movie not found",
          description: "Try movies like Inception, The Matrix, or Interstellar",
          variant: "destructive"
        });
        setSelectedMovie(null);
        setRecommendations([]);
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <section id="ai-playground" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Interactive Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Playground
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Try out a machine learning model in action
          </p>
        </div>

        {/* Movie Recommendation Demo */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Film className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Movie Recommendation System</h3>
              <p className="text-muted-foreground">Powered by cosine similarity algorithm</p>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex gap-3 mb-8">
            <Input
              type="text"
              placeholder="Enter a movie name (e.g., Inception, The Matrix)..."
              value={movieInput}
              onChange={(e) => setMovieInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleMovieSearch()}
              className="flex-1 bg-background"
            />
            <Button
              onClick={handleMovieSearch}
              disabled={isLoading}
              className="bg-purple-500 hover:bg-purple-600"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing...
                </div>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Get Recommendations
                </>
              )}
            </Button>
          </div>

          {/* Available Movies Hint */}
          <div className="mb-8 p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Available movies in database:</p>
            <div className="flex flex-wrap gap-2">
              {movieDatabase.slice(0, 6).map((movie) => (
                <span
                  key={movie.id}
                  onClick={() => setMovieInput(movie.title)}
                  className="px-3 py-1 text-xs font-medium bg-background rounded-full border border-border cursor-pointer hover:border-purple-500/50 transition-colors duration-300"
                >
                  {movie.title}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          {selectedMovie && (
            <div className="space-y-6">
              {/* Selected Movie */}
              <div>
                <h4 className="text-lg font-semibold mb-3">You selected:</h4>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                  <img
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="w-20 h-28 object-cover rounded"
                  />
                  <div>
                    <h5 className="text-xl font-semibold">{selectedMovie.title}</h5>
                    <p className="text-sm text-muted-foreground mb-1">
                      {selectedMovie.genre} • {selectedMovie.year}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">★</span>
                      <span className="font-semibold">{selectedMovie.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Recommended for you:</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {recommendations.map((movie) => (
                    <div
                      key={movie.id}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-lg mb-2">
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                          <div className="flex items-center gap-1 text-xs text-white">
                            <span className="text-yellow-400">★</span>
                            <span>{movie.rating}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="text-sm font-medium truncate">{movie.title}</h6>
                      <p className="text-xs text-muted-foreground">{movie.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default AIPlayground;