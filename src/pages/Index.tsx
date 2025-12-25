import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieSection from "@/components/MovieSection";
import GenreSection from "@/components/GenreSection";
import FriendsActivity from "@/components/FriendsActivity";
import Footer from "@/components/Footer";
import { HeroSkeleton, MovieSectionSkeleton } from "@/components/skeletons/MovieSkeletons";
import { useRecommendations, useAiPick, useBecauseYouWatched } from "@/hooks/useRecommendations";
import { useTrendingMovies, useNewReleases, useHiddenGems } from "@/hooks/useMovies";

const Index = () => {
  const { data: aiPick, isLoading: aiPickLoading } = useAiPick();
  const { data: recommendations, isLoading: recsLoading } = useRecommendations();
  const { data: trending, isLoading: trendingLoading } = useTrendingMovies();
  const { data: newReleases, isLoading: newLoading } = useNewReleases();
  const { data: hiddenGems, isLoading: gemsLoading } = useHiddenGems();
  const { data: becauseData, isLoading: becauseLoading } = useBecauseYouWatched();

  // Transform data for components
  const transformMovie = (movie: any) => ({
    id: movie.id,
    title: movie.title,
    year: movie.year,
    rating: Number(movie.rating),
    runtime: movie.runtime || "2h",
    genres: movie.genres || [],
    description: movie.description || "",
    poster: movie.poster || "",
    backdrop: movie.backdrop || "",
    trailer: movie.trailer || "",
    matchPercentage: movie.matchPercentage || Math.floor(Math.random() * 15) + 85,
    aiReason: movie.aiReason,
    director: movie.director || "",
    cast: movie.cast_members || [],
    language: movie.language || "English",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      {aiPickLoading ? (
        <HeroSkeleton />
      ) : aiPick ? (
        <HeroSection movie={transformMovie(aiPick)} />
      ) : null}

      {/* Main Content */}
      <main className="relative z-10 -mt-20 pb-8">
        {/* Recommended for You */}
        {recsLoading ? (
          <MovieSectionSkeleton />
        ) : recommendations?.length ? (
          <MovieSection
            title="Recommended for You"
            movies={recommendations.slice(0, 10).map(transformMovie)}
            type="ai"
            subtitle="Personalized picks based on your taste"
          />
        ) : null}

        {/* Trending Now */}
        {trendingLoading ? (
          <MovieSectionSkeleton />
        ) : trending?.length ? (
          <MovieSection
            title="Trending Now"
            movies={trending.map(transformMovie)}
            type="trending"
            subtitle="What everyone's watching this week"
          />
        ) : null}

        {/* Browse by Genre */}
        <GenreSection />

        {/* New Releases */}
        {newLoading ? (
          <MovieSectionSkeleton count={4} />
        ) : newReleases?.length ? (
          <MovieSection
            title="New Releases"
            movies={newReleases.map(transformMovie)}
            type="new"
            subtitle="Fresh movies just added"
          />
        ) : null}

        {/* Friends Activity */}
        <FriendsActivity />

        {/* Because You Watched */}
        {becauseLoading ? (
          <MovieSectionSkeleton />
        ) : becauseData?.movies?.length ? (
          <MovieSection
            title={`Because You Watched ${becauseData.title}`}
            movies={becauseData.movies.map(transformMovie)}
            type="ai"
            subtitle="Similar movies you'll love"
          />
        ) : null}

        {/* Hidden Gems */}
        {gemsLoading ? (
          <MovieSectionSkeleton />
        ) : hiddenGems?.length ? (
          <MovieSection
            title="Hidden Gems"
            movies={hiddenGems.map(transformMovie)}
            type="gems"
            subtitle="AI-discovered underrated masterpieces"
          />
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
