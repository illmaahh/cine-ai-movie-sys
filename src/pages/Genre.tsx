import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { genres, getMoviesByGenre, movies } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";

const Genre = () => {
  const { id } = useParams<{ id: string }>();
  const genre = genres.find((g) => g.id === id);
  
  if (!genre) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Genre Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const genreMovies = movies.filter((m) =>
    m.genres.some((g) => g.toLowerCase() === genre.name.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <div className={`relative h-64 md:h-80 bg-gradient-to-br ${genre.color}`}>
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-24 left-4 glass-panel gap-2"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{genre.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {genre.name}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <Sparkles className="w-4 h-4 text-white/80" />
                  <span className="text-white/80">
                    {genreMovies.length} movies • AI-curated for you
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Movies Grid */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Top {genre.name} Picks for You
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {genreMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>

          {genreMovies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No movies found in this genre.</p>
            </div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Genre;
