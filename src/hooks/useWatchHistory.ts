import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export const useWatchHistory = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["watch-history", user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from("watch_history")
        .select(`
          id,
          watched_at,
          progress,
          completed,
          movie_id,
          movies (*)
        `)
        .eq("user_id", user.id)
        .order("watched_at", { ascending: false });
      
      if (error) throw error;
      return data.map(item => ({
        ...item.movies,
        watchedAt: item.watched_at,
        progress: item.progress,
        completed: item.completed,
      }));
    },
    enabled: !!user,
  });
};

export const useAddToWatchHistory = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ movieId, progress = 0, completed = false }: { 
      movieId: string; 
      progress?: number; 
      completed?: boolean 
    }) => {
      if (!user) throw new Error("Not authenticated");
      
      const { error } = await supabase
        .from("watch_history")
        .insert({ 
          user_id: user.id, 
          movie_id: movieId,
          progress,
          completed,
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watch-history", user?.id] });
    },
  });
};

export const useRecentlyWatched = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["watch-history", "recent", user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from("watch_history")
        .select(`
          movie_id,
          watched_at,
          movies (*)
        `)
        .eq("user_id", user.id)
        .eq("completed", true)
        .order("watched_at", { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data.map(item => item.movies);
    },
    enabled: !!user,
  });
};
