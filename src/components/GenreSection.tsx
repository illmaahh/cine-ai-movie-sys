import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { genres } from "@/data/movies";

const GenreSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-foreground mb-6"
        >
          Browse by Genre
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {genres.map((genre, index) => (
            <motion.div
              key={genre.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/genre/${genre.id}`}
                className="block group relative overflow-hidden rounded-xl aspect-[16/9] hover-lift"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                    {genre.icon}
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {genre.name}
                  </span>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreSection;
