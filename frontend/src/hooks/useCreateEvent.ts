import { API_URL } from "@/lib/constant";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useCreateEvent = () =>
  useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axios.post(`${API_URL}/api/events`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
  });
