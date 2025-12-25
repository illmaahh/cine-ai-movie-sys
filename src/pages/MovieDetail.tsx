import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Play,
  Plus,
  Check,
  Share2,
  Star,
  Clock,
  Calendar,
  Globe,
  ArrowLeft,
  Sparkles,
  Users,
} from "lucide-react";
import { useMovie, useSimilarMovies } from "@/hooks/useMovies";
import { useIsInWatchlist, useAddToWatchlist, useRemoveFromWatchlist } from "@/hooks/useWatchlist";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieSection from "@/components/MovieSection";
import { Button } from "@/components/ui/button";
import { HeroSkeleton, MovieSectionSkeleton } from "@/components/skeletons/MovieSkeletons";
import { toast } from "sonner";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { data: movie, isLoading } = useMovie(id || "");
  const { data: isInWatchlist } = useIsInWatchlist(id || "");
  const { data: similarMovies, isLoading: similarLoading } = useSimilarMovies(id || "", movie?.genres || []);
  const addToWatchlist = useAddToWatchlist();
  const removeFromWatchlist = useRemoveFromWatchlist();

  const handleWatchlistToggle = () => {
    if (!user) {
      toast.error("Please sign in to add movies to your list");
      return;
    }
    if (isInWatchlist) {
      removeFromWatchlist.mutate(id || "");
    } else {
      addToWatchlist.mutate(id || "");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSkeleton />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Movie Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const matchPercentage = Math.floor(Math.random() * 10) + 90;
  const aiReason = `Perfect match for your ${movie.genres[0]?.toLowerCase() || "movie"} taste`;

  const transformMovie = (m: any) => ({
    id: m.id,
    title: m.title,
    year: m.year,
    rating: Number(m.rating),
    runtime: m.runtime || "2h",
    genres: m.genres || [],
    description: m.description || "",
    poster: m.poster || "",
    backdrop: m.backdrop || "",
    trailer: m.trailer || "",
    matchPercentage: Math.floor(Math.random() * 15) + 85,
    director: m.director || "",
    cast: m.cast_members || [],
    language: m.language || "English",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img src={movie.backdrop || ""} alt={movie.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="absolute top-24 left-4 md:left-8 z-10">
          <Button variant="ghost" size="sm" className="glass-panel gap-2" asChild>
            <Link to="/"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
          </Button>
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-end pb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hidden md:block w-64 flex-shrink-0">
              <img src={movie.poster || ""} alt={movie.title} className="w-full rounded-xl shadow-elevated" />
            </motion.div>

            <div className="flex-1 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 glass-panel px-3 py-1.5 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary">{matchPercentage}% Match</span>
                </div>
                <span className="text-sm text-cine-violet">✨ {aiReason}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {movie.title}
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-1.5 text-cine-gold"><Star className="w-4 h-4 fill-cine-gold" /><span className="font-semibold">{movie.rating}</span></div>
                <div className="flex items-center gap-1.5 text-muted-foreground"><Calendar className="w-4 h-4" /><span>{movie.year}</span></div>
                <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-4 h-4" /><span>{movie.runtime}</span></div>
                <div className="flex items-center gap-1.5 text-muted-foreground"><Globe className="w-4 h-4" /><span>{movie.language}</span></div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 mb-6">
                {movie.genres?.map((genre) => (
                  <span key={genre} className="px-3 py-1 text-sm font-medium rounded-full bg-secondary/60 text-secondary-foreground">{genre}</span>
                ))}
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {movie.description}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-8 space-y-2">
                <p className="text-sm"><span className="text-muted-foreground">Director: </span><span className="text-foreground font-medium">{movie.director}</span></p>
                <p className="text-sm"><span className="text-muted-foreground">Cast: </span><span className="text-foreground font-medium">{movie.cast_members?.join(", ")}</span></p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 shadow-glow">
                  <Play className="w-5 h-5 fill-current" />Watch Trailer
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 px-6 glass-panel border-border/50" asChild>
                  <Link to="/watch-together"><Users className="w-5 h-5" />Watch Together</Link>
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 glass-panel border-border/50" onClick={handleWatchlistToggle}>
                  {isInWatchlist ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  {isInWatchlist ? "In List" : "My List"}
                </Button>
                <Button size="lg" variant="ghost" className="gap-2"><Share2 className="w-5 h-5" /></Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Trailer</h2>
        <div className="aspect-video max-w-4xl rounded-xl overflow-hidden glass-panel">
          <iframe src={movie.trailer || ""} title={`${movie.title} Trailer`} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </section>

      {similarLoading ? (
        <MovieSectionSkeleton />
      ) : similarMovies?.length ? (
        <MovieSection title="More Like This" movies={similarMovies.map(transformMovie)} type="ai" subtitle={`Because you're interested in ${movie.title}`} showViewAll={false} />
      ) : null}

      <Footer />
    </div>
  );
};

export default MovieDetail;
