import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Plus,
  Play,
  ArrowLeft,
  Lock,
  Globe,
  Copy,
  Check,
  MessageCircle,
  Smile,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { movies } from "@/data/movies";

const activeRooms = [
  {
    id: 1,
    name: "Movie Night with Friends",
    host: "Sarah",
    hostAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    movie: movies[0],
    participants: 4,
    isPrivate: false,
  },
  {
    id: 2,
    name: "Sci-Fi Marathon",
    host: "Mike",
    hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    movie: movies[1],
    participants: 2,
    isPrivate: true,
  },
];

const WatchTogether = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cine-violet/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-cine-violet" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Watch Together
                </h1>
                <p className="text-muted-foreground">
                  Sync playback and enjoy movies with friends in real-time
                </p>
              </div>
            </div>
          </motion.div>

          {/* Create Room Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 mb-12"
          >
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary" />
              Create a Watch Room
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Room Name
                  </label>
                  <Input
                    placeholder="My Watch Party"
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Select a Movie
                  </label>
                  <select className="w-full bg-secondary/50 border border-border/50 rounded-lg px-3 py-2 text-foreground">
                    {movies.slice(0, 8).map((movie) => (
                      <option key={movie.id} value={movie.id}>
                        {movie.title} ({movie.year})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="secondary"
                    className="flex-1 gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    Public
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Private
                  </Button>
                </div>
                <Button className="w-full gap-2 shadow-glow">
                  <Play className="w-4 h-4" />
                  Create Room
                </Button>
              </div>

              <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-border rounded-xl">
                <Users className="w-16 h-16 text-muted-foreground/50 mb-4" />
                <h3 className="font-medium text-foreground mb-2">
                  Invite Friends
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share the room link with your friends to watch together
                </p>
                <div className="flex gap-2 w-full max-w-xs">
                  <Input
                    value="cineai.app/room/abc123"
                    readOnly
                    className="bg-secondary/30 text-sm"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Active Rooms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Active Watch Rooms
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {activeRooms.map((room) => (
                <motion.div
                  key={room.id}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel rounded-xl overflow-hidden group cursor-pointer"
                >
                  {/* Movie Preview */}
                  <div className="relative h-40">
                    <img
                      src={room.movie.backdrop}
                      alt={room.movie.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Playing Indicator */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 glass-panel px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium">Live</span>
                    </div>

                    {/* Privacy Badge */}
                    <div className="absolute top-3 right-3">
                      {room.isPrivate ? (
                        <Lock className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Globe className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Room Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">
                      {room.name}
                    </h3>
                    <p className="text-sm text-primary mb-3">
                      Watching: {room.movie.title}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={room.hostAvatar}
                          alt={room.host}
                          className="w-6 h-6 rounded-full ring-2 ring-border"
                        />
                        <span className="text-sm text-muted-foreground">
                          Hosted by {room.host}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {room.participants}
                      </div>
                    </div>

                    {/* Join Button */}
                    <Button
                      className="w-full mt-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="w-4 h-4" />
                      Join Room
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Play className="w-6 h-6" />,
                title: "Synchronized Playback",
                description: "Play, pause, and seek together in perfect sync",
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Live Chat",
                description: "Chat with friends while watching without interrupting",
              },
              {
                icon: <Smile className="w-6 h-6" />,
                title: "Emoji Reactions",
                description: "React with emojis that appear on screen",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-secondary/30"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WatchTogether;
