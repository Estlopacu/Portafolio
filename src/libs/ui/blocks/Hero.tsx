import { type FC } from "react";
import { ArrowRight } from "lucide-react";

export const Hero: FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-secondary">
      <h1 className="text-h1-md md:text-h1 font-bold text-primary mb-6">
        <span className="animate-[bounce_0.5s_ease-in-out_1] delay-[700ms]">
          Luis Esteban López Acuña
        </span>{" "}
        is a software engineer based on <span>Berlin, Germany 🇩🇪</span> from{" "}
        <span>San José, Costa Rica 🇨🇷</span>
      </h1>
      <div className="flex items-center space-x-2">
        <p className="text-primary/80 text-center max-w-2xl mx-auto mb-16">
          Social Media
        </p>
      </div>
    </div>
  );
};
