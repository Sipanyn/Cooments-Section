import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase-client";

export default function useDataQueryHook() {
  const commentQuery = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      let { data, error } = await supabase.from("comments").select("*");
      if (error) {
        console.log(error);
      } else {
        // console.log(data);
        return data;
      }
    },
  });

  const replyQuery = useQuery({
    queryKey: ["reply"],
    queryFn: async () => {
      let { data, error } = await supabase.from("replies").select("*");
      if (error) {
        console.log(error);
      } else {
        // console.log(data);
        return data;
      }
    },
  });
  return {
    commentQuery,
    replyQuery,
  };
}
