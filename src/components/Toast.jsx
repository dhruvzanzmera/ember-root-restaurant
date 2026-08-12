import React from "react";
import { CheckCircle } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Toast() {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] bg-[#241E17] border border-[#D9A441]/50 text-[#F4EFE6] px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in backdrop-blur-md">
      <CheckCircle className="w-5 h-5 text-[#D9A441] shrink-0" />
      <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
    </div>
  );
}
