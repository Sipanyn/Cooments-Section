import { useMutation } from "@tanstack/react-query";
import supabase from "/supabase-client.js";
import { useSupa } from "./src/supa-Store";

export const useSendComment = () => {
  const supa_user = useSupa((state) => state.supa_user);

  const setTextBoxValueFree = useSupa((state) => state.setTextBoxValueFree);

  return useMutation({
    mutationFn: async (commentContent) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      const { data, error } = await supabase
        .from("comments")
        .insert([
          {
            content: commentContent,
            image_url: supa_user?.[0]?.[0].image_url,
            username: supa_user?.[0]?.[0].username,
          },
        ])
        .select();

      if (error) throw error;
      else {
        setTextBoxValueFree();
        return data;
      }
    },
    onSuccess: () => {
      console.log("i want to rerender to show new commnet");
    },
  });
};
