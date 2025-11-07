// src/store/useSearchStore.ts
import { create } from "zustand";

interface SearchState {
  query: string;
  suggestions: string[];
  setQuery: (q: string) => void;
  setSuggestions: (items: string[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  suggestions: [],
  setQuery: (q) => set({ query: q }),
  setSuggestions: (items) => set({ suggestions: items }),
}));
