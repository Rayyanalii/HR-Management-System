import { Loader2 } from "lucide-react";
import React from "react";

const LoadingIcon = ({ color }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 color={color || "black"} className="animate-spin" />;
    </div>
  );
};

export default LoadingIcon;
