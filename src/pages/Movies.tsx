import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { movies, genres } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"match" | "rating" | "year">("match");

  const filteredMovies = movies
    .filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = !selectedGenre || movie.genres.some(
        (g) => g.toLowerCase() === selectedGenre.toLowerCase()
      );
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      if (sortBy === "match") return b.matchPercentage - a.matchPercentage;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.year - a.year;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              All Movies
            </h1>
            <p className="text-muted-foreground">
              Discover your next favorite film from our AI-curated collection
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col lg:flex-row gap-4 mb-8"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </div>

            {/* Genre Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedGenre === null ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedGenre(null)}
                className="gap-1"
              >
                <Filter className="w-3 h-3" />
                All
              </Button>
              {genres.slice(0, 6).map((genre) => (
                <Button
                  key={genre.id}
                  variant={selectedGenre === genre.name ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedGenre(
                    selectedGenre === genre.name ? null : genre.name
                  )}
                >
                  {genre.icon} {genre.name}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-secondary/50 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground"
              >
                <option value="match">AI Match</option>
                <option value="rating">Rating</option>
                <option value="year">Newest</option>
              </select>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Showing {filteredMovies.length} movies
          </motion.p>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No movies found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Movies;
