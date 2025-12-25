import { motion } from "framer-motion";
import { ChevronRight, Sparkles, TrendingUp, Clock, Users, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import { Movie } from "@/data/movies";
import MovieCard from "./MovieCard";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  type?: "ai" | "trending" | "new" | "social" | "gems" | "default";
  showViewAll?: boolean;
  viewAllLink?: string;
  subtitle?: string;
}

const sectionIcons = {
  ai: <Sparkles className="w-5 h-5 text-primary" />,
  trending: <TrendingUp className="w-5 h-5 text-cine-red" />,
  new: <Clock className="w-5 h-5 text-cine-cyan" />,
  social: <Users className="w-5 h-5 text-cine-violet" />,
  gems: <Gem className="w-5 h-5 text-cine-gold" />,
  default: null,
};

const MovieSection = ({
  title,
  movies,
  type = "default",
  showViewAll = true,
  viewAllLink = "/movies",
  subtitle,
}: MovieSectionProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-3">
            {sectionIcons[type]}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                {title}
              </h2>
              {subtitle && (
                <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
              )}
            </div>
            {type === "ai" && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary ml-2">
                AI-Powered
              </span>
            )}
          </div>

          {showViewAll && (
            <Link
              to={viewAllLink}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              View All
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </motion.div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
