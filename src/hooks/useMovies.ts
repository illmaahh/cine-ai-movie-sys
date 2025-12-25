import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number;
  runtime: string | null;
  genres: string[];
  description: string | null;
  poster: string | null;
  backdrop: string | null;
  trailer: string | null;
  director: string | null;
  cast_members: string[];
  language: string;
  // AI-generated fields (client-side for now)
  matchPercentage?: number;
  aiReason?: string;
}

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .order("rating", { ascending: false });
      
      if (error) throw error;
      return data as Movie[];
    },
  });
};

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      
      if (error) throw error;
      return data as Movie | null;
    },
    enabled: !!id,
  });
};

export const useMoviesByGenre = (genre: string) => {
  return useQuery({
    queryKey: ["movies", "genre", genre],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .contains("genres", [genre])
        .order("rating", { ascending: false });
      
      if (error) throw error;
      return data as Movie[];
    },
    enabled: !!genre,
  });
};

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["movies", "trending"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .gte("year", 2019)
        .order("rating", { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data as Movie[];
    },
  });
};

export const useNewReleases = () => {
  return useQuery({
    queryKey: ["movies", "new-releases"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .gte("year", 2022)
        .order("year", { ascending: false })
        .limit(8);
      
      if (error) throw error;
      return data as Movie[];
    },
  });
};

export const useHiddenGems = () => {
  return useQuery({
    queryKey: ["movies", "hidden-gems"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .gte("rating", 7.5)
        .lte("rating", 8.2)
        .order("rating", { ascending: false })
        .limit(8);
      
      if (error) throw error;
      return data as Movie[];
    },
  });
};

export const useSimilarMovies = (movieId: string, genres: string[]) => {
  return useQuery({
    queryKey: ["movies", "similar", movieId],
    queryFn: async () => {
      if (!genres.length) return [];
      
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .neq("id", movieId)
        .overlaps("genres", genres)
        .order("rating", { ascending: false })
        .limit(6);
      
      if (error) throw error;
      return data as Movie[];
    },
    enabled: !!movieId && genres.length > 0,
  });
};

export const useSearchMovies = (query: string) => {
  return useQuery({
    queryKey: ["movies", "search", query],
    queryFn: async () => {
      if (!query.trim()) return [];
      
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .or(`title.ilike.%${query}%,director.ilike.%${query}%`)
        .order("rating", { ascending: false })
        .limit(20);
      
      if (error) throw error;
      return data as Movie[];
    },
    enabled: query.length >= 2,
  });
};
