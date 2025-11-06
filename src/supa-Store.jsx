import { create } from "zustand";
export const useSupa = create((set) => ({
  supa_data: [],
  supa_replies: [],
  textBoxValue: "",
  supa_user: [],
  setData: (item) => {
    set({
      supa_data: [item],
    });
  },
  setReplies: (item) => {
    set({
      supa_replies: [item],
    });
  },
  setUser: (user) => {
    set({
      supa_user: [user],
    });
  },
  setTextBoxValue: (letter) => {
    set({
      textBoxValue: letter,
    });
  },
  setTextBoxValueFree: () => {
    set({ textBoxValue: "" });
  },
}));
