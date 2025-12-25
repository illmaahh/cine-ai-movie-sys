import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { genres, movies } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Genres = () => {
  const getGenreCount = (genreName: string) => {
    return movies.filter((m) =>
      m.genres.some((g) => g.toLowerCase() === genreName.toLowerCase())
    ).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 gap-2"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Browse by Genre
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Explore our AI-curated collection organized by genre. Each category is 
              personalized based on your viewing preferences and taste profile.
            </p>
          </motion.div>

          {/* Genre Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {genres.map((genre, index) => (
              <motion.div
                key={genre.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/genre/${genre.id}`}
                  className="block group relative overflow-hidden rounded-2xl aspect-[4/3] hover-lift"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-90 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <span className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                      {genre.icon}
                    </span>
                    <span className="text-2xl font-bold text-white mb-2">
                      {genre.name}
                    </span>
                    <span className="text-white/80 text-sm">
                      {getGenreCount(genre.name)} movies
                    </span>
                  </div>

                  {/* AI Badge */}
                  <div className="absolute top-4 right-4 glass-panel px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium text-white">AI Curated</span>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Genres;
