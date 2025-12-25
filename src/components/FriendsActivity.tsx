import { motion } from "framer-motion";
import { Users, Play, Heart, MessageCircle } from "lucide-react";

const friends = [
  {
    id: 1,
    name: "Sarah",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    activity: "is watching",
    movie: "Inception",
    time: "2 min ago",
  },
  {
    id: 2,
    name: "Mike",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    activity: "rated",
    movie: "Dune",
    rating: 5,
    time: "15 min ago",
  },
  {
    id: 3,
    name: "Emma",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    activity: "added to list",
    movie: "Interstellar",
    time: "1 hour ago",
  },
  {
    id: 4,
    name: "Alex",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    activity: "is watching",
    movie: "The Matrix",
    time: "Just now",
  },
];

const FriendsActivity = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <Users className="w-5 h-5 text-cine-violet" />
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            Friends Activity
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((friend, index) => (
            <motion.div
              key={friend.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-xl p-4 hover-lift cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-border"
                  />
                  {friend.activity === "is watching" && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-2 h-2 fill-primary-foreground text-primary-foreground" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-sm">
                    <span className="font-medium text-foreground">{friend.name}</span>
                    <span className="text-muted-foreground">{friend.activity}</span>
                  </div>
                  <p className="text-sm font-medium text-primary truncate">
                    {friend.movie}
                  </p>
                  {friend.rating && (
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Heart
                          key={i}
                          className={`w-3 h-3 ${
                            i < friend.rating ? "fill-cine-red text-cine-red" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground">{friend.time}</span>
                </div>

                {/* Action */}
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-secondary rounded-full">
                  <MessageCircle className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsActivity;
