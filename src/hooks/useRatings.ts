import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export const useUserRating = (movieId: string) => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["rating", user?.id, movieId],
    queryFn: async () => {
      if (!user) return null;
      
      const { data, error } = await supabase
        .from("ratings")
        .select("*")
        .eq("user_id", user.id)
        .eq("movie_id", movieId)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!user && !!movieId,
  });
};

export const useMovieRatings = (movieId: string) => {
  return useQuery({
    queryKey: ["ratings", movieId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("ratings")
        .select(`
          *,
          profiles:user_id (username, avatar_url)
        `)
        .eq("movie_id", movieId)
        .order("created_at", { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data;
    },
    enabled: !!movieId,
  });
};

export const useRateMovie = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ movieId, rating, review }: { 
      movieId: string; 
      rating: number; 
      review?: string 
    }) => {
      if (!user) throw new Error("Not authenticated");
      
      const { error } = await supabase
        .from("ratings")
        .upsert({ 
          user_id: user.id, 
          movie_id: movieId,
          rating,
          review,
        }, {
          onConflict: "user_id,movie_id",
        });
      
      if (error) throw error;
    },
    onSuccess: (_, { movieId }) => {
      queryClient.invalidateQueries({ queryKey: ["rating", user?.id, movieId] });
      queryClient.invalidateQueries({ queryKey: ["ratings", movieId] });
      toast.success("Rating saved!");
    },
    onError: () => {
      toast.error("Failed to save rating");
    },
  });
};
