import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Movie } from "./useMovies";

// AI reasons based on genres and patterns
const generateAiReason = (movie: Movie, preferences: string[]): string => {
  const reasons = [
    `${movie.director} is in your top directors`,
    `You love ${movie.genres[0]} films`,
    `Perfect match for your taste in ${movie.genres.slice(0, 2).join(" and ")}`,
    `Similar to movies you've rated highly`,
    `Epic ${movie.genres[0].toLowerCase()} with stunning visuals`,
    `Award-winning cinema you'll love`,
    `Matches your preference for ${movie.language} films`,
    `A hidden gem based on your history`,
  ];
  
  // Pick a reason based on movie characteristics
  if (preferences.some(p => movie.genres.includes(p))) {
    return `You love ${preferences.find(p => movie.genres.includes(p))} films`;
  }
  
  const index = Math.abs(movie.title.charCodeAt(0)) % reasons.length;
  return reasons[index];
};

// Calculate match percentage based on user preferences
const calculateMatchPercentage = (movie: Movie, preferences: string[]): number => {
  let baseScore = 75;
  
  // Boost for matching genres
  const matchingGenres = movie.genres.filter(g => preferences.includes(g));
  baseScore += matchingGenres.length * 5;
  
  // Boost for high ratings
  if (movie.rating >= 8.5) baseScore += 8;
  else if (movie.rating >= 8.0) baseScore += 5;
  else if (movie.rating >= 7.5) baseScore += 3;
  
  // Add some variation
  const variation = (movie.title.charCodeAt(0) % 10) - 5;
  baseScore += variation;
  
  return Math.min(99, Math.max(70, baseScore));
};

export const useRecommendations = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["recommendations", user?.id],
    queryFn: async () => {
      // Fetch user preferences if logged in
      let preferences: string[] = [];
      
      if (user) {
        const { data: prefData } = await supabase
          .from("user_preferences")
          .select("preferred_genres")
          .eq("user_id", user.id)
          .maybeSingle();
        
        preferences = prefData?.preferred_genres || [];
        
        // If no preferences, use genres from watch history
        if (preferences.length === 0) {
          const { data: historyData } = await supabase
            .from("watch_history")
            .select("movies (genres)")
            .eq("user_id", user.id)
            .limit(10);
          
          if (historyData) {
            const allGenres = historyData.flatMap(h => (h.movies as any)?.genres || []);
            preferences = [...new Set(allGenres)].slice(0, 5);
          }
        }
      }
      
      // Default preferences for non-logged in users
      if (preferences.length === 0) {
        preferences = ["Sci-Fi", "Action", "Drama", "Thriller"];
      }
      
      // Fetch movies and add AI data
      const { data: movies, error } = await supabase
        .from("movies")
        .select("*")
        .order("rating", { ascending: false })
        .limit(20);
      
      if (error) throw error;
      
      // Add match percentage and AI reason to each movie
      const moviesWithAi = (movies as Movie[]).map(movie => ({
        ...movie,
        matchPercentage: calculateMatchPercentage(movie, preferences),
        aiReason: generateAiReason(movie, preferences),
      }));
      
      // Sort by match percentage
      return moviesWithAi.sort((a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0));
    },
  });
};

export const useBecauseYouWatched = (movieTitle?: string) => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["because-you-watched", user?.id, movieTitle],
    queryFn: async () => {
      // Get the last watched movie's genres
      let genres: string[] = [];
      let title = movieTitle;
      
      if (user && !movieTitle) {
        const { data: history } = await supabase
          .from("watch_history")
          .select("movies (title, genres)")
          .eq("user_id", user.id)
          .eq("completed", true)
          .order("watched_at", { ascending: false })
          .limit(1)
          .maybeSingle();
        
        if (history?.movies) {
          genres = (history.movies as any).genres || [];
          title = (history.movies as any).title;
        }
      }
      
      // Default to Sci-Fi if no history
      if (genres.length === 0) {
        genres = ["Sci-Fi"];
        title = title || "Inception";
      }
      
      // Fetch similar movies
      const { data: movies, error } = await supabase
        .from("movies")
        .select("*")
        .overlaps("genres", genres)
        .order("rating", { ascending: false })
        .limit(8);
      
      if (error) throw error;
      
      return {
        title,
        movies: (movies as Movie[]).map(movie => ({
          ...movie,
          matchPercentage: Math.floor(Math.random() * 15) + 85,
          aiReason: `Similar ${genres[0].toLowerCase()} adventure`,
        })),
      };
    },
  });
};

export const useAiPick = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["ai-pick", user?.id],
    queryFn: async () => {
      let preferences: string[] = ["Sci-Fi", "Action"];
      
      if (user) {
        const { data: prefData } = await supabase
          .from("user_preferences")
          .select("preferred_genres, liked_directors")
          .eq("user_id", user.id)
          .maybeSingle();
        
        if (prefData?.preferred_genres?.length) {
          preferences = prefData.preferred_genres;
        }
      }
      
      // Get top-rated movie matching preferences
      const { data: movies, error } = await supabase
        .from("movies")
        .select("*")
        .overlaps("genres", preferences)
        .gte("rating", 8.0)
        .order("rating", { ascending: false })
        .limit(5);
      
      if (error) throw error;
      
      // Pick a movie (rotate based on day)
      const dayIndex = new Date().getDate() % (movies?.length || 1);
      const movie = movies?.[dayIndex] || movies?.[0];
      
      if (!movie) return null;
      
      return {
        ...movie,
        matchPercentage: Math.floor(Math.random() * 5) + 95,
        aiReason: `${movie.director} is one of your favorite directors`,
      } as Movie;
    },
  });
};
