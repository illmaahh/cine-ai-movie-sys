import { motion } from "framer-motion";
import { Star, Clock, Play, Plus, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Movie } from "@/data/movies";
import { Button } from "./ui/button";

interface MovieCardProps {
  movie: Movie;
  index?: number;
  variant?: "default" | "large" | "compact";
}

const MovieCard = ({ movie, index = 0, variant = "default" }: MovieCardProps) => {
  const isLarge = variant === "large";
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`group relative rounded-xl overflow-hidden hover-lift ${
        isLarge ? "aspect-[2/3]" : isCompact ? "aspect-video" : "aspect-[2/3]"
      }`}
    >
      {/* Poster Image */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Match Percentage Badge */}
      <div className="absolute top-3 left-3">
        <div className="glass-panel px-2 py-1 rounded-md flex items-center gap-1.5">
          <span className="text-xs font-bold text-primary">{movie.matchPercentage}%</span>
          <span className="text-xs text-muted-foreground">Match</span>
        </div>
      </div>

      {/* Hover Actions */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon"
          variant="secondary"
          className="w-8 h-8 rounded-full glass-panel"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3 className={`font-semibold text-foreground mb-1 line-clamp-1 ${
          isLarge ? "text-lg" : "text-sm"
        }`}>
          {movie.title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-cine-gold fill-cine-gold" />
            <span>{movie.rating}</span>
          </div>
          <span>{movie.year}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{movie.runtime}</span>
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary/80 text-secondary-foreground"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Action Buttons - Hidden by default, shown on hover */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-1"
            asChild
          >
            <Link to={`/movie/${movie.id}`}>
              <Play className="w-3 h-3 fill-current" />
              Play
            </Link>
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="gap-1"
            asChild
          >
            <Link to={`/movie/${movie.id}`}>
              <Info className="w-3 h-3" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Neon Border on Hover */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 group-hover:shadow-glow transition-all pointer-events-none" />
    </motion.div>
  );
};

export default MovieCard;
