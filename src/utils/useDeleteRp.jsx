import supabase from "../../supabase-client";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../queryClient";
import { useSupa } from "../supa-Store";
export const useDeleteRp = () => {
  const setData = useSupa((state) => state.setData);
  const setReplies = useSupa((state) => state.setReplies);

  return useMutation({
    mutationFn: async (rply) => {
      const { error } = await supabase
        .from("replies")
        .delete()
        .eq("id", rply.id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["replies"]);
      await queryClient.invalidateQueries(["comments"]);

      const replyQuery = queryClient.getQueryData(["replies"]);
      const commentQuery = queryClient.getQueryData(["comments"]);

      setReplies(replyQuery.data);
      setData(commentQuery.data);
    },
  });
};
