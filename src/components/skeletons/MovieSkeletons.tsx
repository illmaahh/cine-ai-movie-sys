import { cn } from "@/lib/utils";

interface MovieCardSkeletonProps {
  variant?: "default" | "large" | "compact";
}

export const MovieCardSkeleton = ({ variant = "default" }: MovieCardSkeletonProps) => {
  const isLarge = variant === "large";
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden bg-card animate-pulse",
        isLarge ? "aspect-[2/3]" : isCompact ? "aspect-video" : "aspect-[2/3]"
      )}
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent skeleton-shimmer" />
      
      {/* Match badge skeleton */}
      <div className="absolute top-3 left-3 w-16 h-6 bg-muted rounded-md" />
      
      {/* Content skeleton */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="h-4 w-3/4 bg-muted rounded mb-2" />
        <div className="flex gap-2 mb-2">
          <div className="h-3 w-10 bg-muted rounded" />
          <div className="h-3 w-12 bg-muted rounded" />
          <div className="h-3 w-14 bg-muted rounded" />
        </div>
        <div className="flex gap-1">
          <div className="h-5 w-12 bg-muted rounded-full" />
          <div className="h-5 w-14 bg-muted rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-background to-muted/20" />
      
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl pt-20 w-full">
          {/* AI Pick badge */}
          <div className="w-48 h-8 bg-muted rounded-full mb-6 animate-pulse" />
          
          {/* Title */}
          <div className="h-16 w-3/4 bg-muted rounded-lg mb-4 animate-pulse" />
          
          {/* Meta info */}
          <div className="flex gap-4 mb-4">
            <div className="h-6 w-16 bg-muted rounded animate-pulse" />
            <div className="h-6 w-12 bg-muted rounded animate-pulse" />
            <div className="h-6 w-20 bg-muted rounded animate-pulse" />
          </div>
          
          {/* Description */}
          <div className="space-y-2 mb-6">
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-muted rounded animate-pulse" />
          </div>
          
          {/* Buttons */}
          <div className="flex gap-4">
            <div className="h-12 w-36 bg-muted rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-muted rounded-lg animate-pulse" />
          </div>
        </div>
        
        {/* Poster skeleton */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-80 aspect-[2/3] bg-muted rounded-2xl animate-pulse" />
      </div>
    </section>
  );
};

export const MovieSectionSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="h-8 w-48 bg-muted rounded animate-pulse mb-2" />
          <div className="h-4 w-64 bg-muted rounded animate-pulse" />
        </div>
        <div className="h-10 w-24 bg-muted rounded-lg animate-pulse" />
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
};

export const GenreSectionSkeleton = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="h-8 w-40 bg-muted rounded animate-pulse mb-6" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-24 bg-muted rounded-xl animate-pulse" />
        ))}
      </div>
    </section>
  );
};
