import { create } from "zustand";
import { MessageItem } from "./types";

interface Store {
  messages: MessageItem[];
  setMessages: (e: MessageItem[]) => void;
  pushMessage: (e: MessageItem) => void;
}

export const useMessageStore = create<Store>((set, get) => ({
  messages: [],
  setMessages: (e) => set({ messages: e }),
  pushMessage: (e) => set((state) => ({ messages: [...state.messages, e] })),
  shiftMessage: () =>
    set((state) => {
      state.messages.shift();
      return state;
    }),
}));
