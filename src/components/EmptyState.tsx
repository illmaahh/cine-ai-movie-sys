import { motion } from "framer-motion";
import { Film, Frown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    href: string;
  };
}

export const EmptyState = ({ title, description, icon, action }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        {icon || <Film className="w-10 h-10 text-muted-foreground" />}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-md mb-6">{description}</p>
      {action && (
        <Button asChild className="gap-2">
          <Link to={action.href}>{action.label}</Link>
        </Button>
      )}
    </motion.div>
  );
};

export const ErrorState = ({ message, onRetry }: { message: string; onRetry?: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
        <Frown className="w-10 h-10 text-destructive" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">Something went wrong</h3>
      <p className="text-muted-foreground max-w-md mb-6">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="secondary">
          Try Again
        </Button>
      )}
    </motion.div>
  );
};
