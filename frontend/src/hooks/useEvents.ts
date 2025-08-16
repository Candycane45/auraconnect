import { API_URL } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";

interface Event {
  _id: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventCategory: string;
  eventDescription: string;
  eventImage: string;
  eventPrice?: number;
  createdBy: string;
}

export const useEvents = (searchTerm: string = "") => {
  const fetchEvents = async (): Promise<Event[]> => {
    const url = searchTerm
      ? `${API_URL}/api/events?search=${encodeURIComponent(searchTerm)}`
      : `${API_URL}/api/events`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch events");
    const data: { events: Event[]; message: string } = await res.json();
    return data.events;
  };

  return useQuery({
    queryKey: ["events", searchTerm],
    queryFn: fetchEvents,
    staleTime: 1000 * 60,
  });
};
