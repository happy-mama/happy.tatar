import { create } from "zustand";
import { MessageItem } from "./types";

type STORE_INITIAL_VARS = {
  messages: MessageItem[];
};

type STORE_MUTATORS = {
  setMessages: (e: MessageItem[]) => void;
  pushMessage: (e: MessageItem) => void;

  reset: () => void;
};

export interface STORE extends STORE_INITIAL_VARS, STORE_MUTATORS {
  Set: (
    partial: STORE | Partial<STORE> | ((state: STORE) => STORE | Partial<STORE>),
    replace?: boolean | undefined
  ) => void;
  Get: () => STORE;
}

const INITIAL_VALUES: STORE_INITIAL_VARS = {
  messages: [],
};

export const useMessageStore = create<STORE>((set, get) => ({
  ...structuredClone(INITIAL_VALUES),

  setMessages: (e) => set({ messages: e }),
  pushMessage: (e) => set((state) => ({ messages: [...state.messages, e] })),
  shiftMessage: () =>
    set((state) => {
      state.messages.shift();
      return state;
    }),

  Set: set,
  Get: get,

  reset: () => {
    set({ ...structuredClone(INITIAL_VALUES) });
  },
}));
