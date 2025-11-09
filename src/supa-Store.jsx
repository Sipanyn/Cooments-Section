import { create } from "zustand";
export const useSupa = create((set) => ({
  supa_data: [],
  supa_replies: [],
  textBoxValue: "",
  customTextBoxValue: "",
  supa_user: [],
  selectedComment: null,
  selectedRply: null,

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
  setCustomTextBoxValue: (letter) => {
    set({
      customTextBoxValue: letter,
    });
  },
  setCustomTextBoxValueFree: () => {
    set({ customTextBoxValue: "" });
  },
  setSelectedComment: (item) => {
    set({
      selectedComment: item,
      selectedRply: null,
    });
    console.log("selectedComment_Id:", item.comment_id);
  },
  setSelectedCommentNull: () => {
    set({ selectedComment: null });
  },
  setSelectedRply: (reply) => {
    set({
      selectedRply: reply,
      selectedComment: null,
    });
    console.log("selectedRply_id:", reply.comment_id);
  },
  setSelectedRplyNull: () => {
    set({ selectedRply: null });
  },
}));
