import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Bookmark, Clock, Check, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { movies } from "@/data/movies";

const MyList = () => {
  const [activeTab, setActiveTab] = useState<"watchlist" | "watched">("watchlist");
  
  // Mock data - in real app this would come from user profile
  const watchlist = movies.slice(0, 6);
  const watched = movies.slice(6, 12);

  const tabs = [
    { id: "watchlist" as const, label: "Watchlist", icon: <Bookmark className="w-4 h-4" />, count: watchlist.length },
    { id: "watched" as const, label: "Watched", icon: <Check className="w-4 h-4" />, count: watched.length },
  ];

  const currentMovies = activeTab === "watchlist" ? watchlist : watched;

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
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              My List
            </h1>
            <p className="text-muted-foreground">
              Your personal collection of movies to watch and already watched
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-2 mb-8"
          >
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "secondary"}
                onClick={() => setActiveTab(tab.id)}
                className="gap-2"
              >
                {tab.icon}
                {tab.label}
                <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-background/20">
                  {tab.count}
                </span>
              </Button>
            ))}
          </motion.div>

          {/* Movies Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentMovies.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {currentMovies.map((movie, index) => (
                  <MovieCard key={movie.id} movie={movie} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Clock className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {activeTab === "watchlist" ? "Your watchlist is empty" : "No watched movies yet"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {activeTab === "watchlist"
                    ? "Browse movies and add them to your list"
                    : "Start watching movies to track your history"}
                </p>
                <Button asChild>
                  <Link to="/movies">Browse Movies</Link>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyList;
