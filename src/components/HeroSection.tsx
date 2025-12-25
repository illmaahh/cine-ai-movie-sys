import { motion } from "framer-motion";
import { Play, Info, Star, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Movie } from "@/data/movies";
import { Button } from "./ui/button";

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection = ({ movie }: HeroSectionProps) => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        {/* Multiple Gradient Overlays for Cinematic Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cine-red/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cine-violet/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl pt-20">
          {/* AI Pick Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI Pick for You</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-bold text-cine-cyan">{movie.matchPercentage}% Match</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight"
          >
            {movie.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-4 text-sm"
          >
            <div className="flex items-center gap-1.5 text-cine-gold">
              <Star className="w-4 h-4 fill-cine-gold" />
              <span className="font-semibold">{movie.rating}</span>
            </div>
            <span className="text-muted-foreground">{movie.year}</span>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{movie.runtime}</span>
            </div>
            <div className="flex gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/60 text-secondary-foreground"
                >
                  {genre}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground mb-6 line-clamp-3 leading-relaxed"
          >
            {movie.description}
          </motion.p>

          {/* AI Reason */}
          {movie.aiReason && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mb-8 text-sm"
            >
              <Sparkles className="w-4 h-4 text-cine-violet" />
              <span className="text-cine-violet font-medium">✨ {movie.aiReason}</span>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 shadow-glow"
              asChild
            >
              <Link to={`/movie/${movie.id}`}>
                <Play className="w-5 h-5 fill-current" />
                Watch Now
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 px-8 glass-panel border-border/50"
              asChild
            >
              <Link to={`/movie/${movie.id}`}>
                <Info className="w-5 h-5" />
                More Info
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Movie Poster - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-80"
          style={{ perspective: "1000px" }}
        >
          <div className="relative group">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full rounded-2xl shadow-elevated transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-colors" />
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
