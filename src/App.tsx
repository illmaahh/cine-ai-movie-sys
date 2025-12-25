import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Genre from "./pages/Genre";
import Genres from "./pages/Genres";
import WatchTogether from "./pages/WatchTogether";
import MyList from "./pages/MyList";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/genre/:id" element={<Genre />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/watch-together" element={
              <ProtectedRoute>
                <WatchTogether />
              </ProtectedRoute>
            } />
            <Route path="/my-list" element={
              <ProtectedRoute>
                <MyList />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
