import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export const useWatchlist = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["watchlist", user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from("watchlists")
        .select(`
          id,
          added_at,
          movie_id,
          movies (*)
        `)
        .eq("user_id", user.id)
        .order("added_at", { ascending: false });
      
      if (error) throw error;
      return data.map(item => ({
        ...item.movies,
        watchlistId: item.id,
        addedAt: item.added_at,
      }));
    },
    enabled: !!user,
  });
};

export const useIsInWatchlist = (movieId: string) => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["watchlist", user?.id, movieId],
    queryFn: async () => {
      if (!user) return false;
      
      const { data, error } = await supabase
        .from("watchlists")
        .select("id")
        .eq("user_id", user.id)
        .eq("movie_id", movieId)
        .maybeSingle();
      
      if (error) throw error;
      return !!data;
    },
    enabled: !!user && !!movieId,
  });
};

export const useAddToWatchlist = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (movieId: string) => {
      if (!user) throw new Error("Not authenticated");
      
      const { error } = await supabase
        .from("watchlists")
        .insert({ user_id: user.id, movie_id: movieId });
      
      if (error) throw error;
    },
    onSuccess: (_, movieId) => {
      queryClient.invalidateQueries({ queryKey: ["watchlist", user?.id] });
      queryClient.invalidateQueries({ queryKey: ["watchlist", user?.id, movieId] });
      toast.success("Added to your watchlist!");
    },
    onError: (error: Error) => {
      if (error.message.includes("duplicate")) {
        toast.error("Already in your watchlist");
      } else {
        toast.error("Failed to add to watchlist");
      }
    },
  });
};

export const useRemoveFromWatchlist = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (movieId: string) => {
      if (!user) throw new Error("Not authenticated");
      
      const { error } = await supabase
        .from("watchlists")
        .delete()
        .eq("user_id", user.id)
        .eq("movie_id", movieId);
      
      if (error) throw error;
    },
    onSuccess: (_, movieId) => {
      queryClient.invalidateQueries({ queryKey: ["watchlist", user?.id] });
      queryClient.invalidateQueries({ queryKey: ["watchlist", user?.id, movieId] });
      toast.success("Removed from watchlist");
    },
    onError: () => {
      toast.error("Failed to remove from watchlist");
    },
  });
};
