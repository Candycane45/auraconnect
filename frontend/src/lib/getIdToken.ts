// utils/getIdToken.ts
import { auth } from "./firebase";

export async function getIdToken(): Promise<string | null> {
  const user = auth.currentUser;
  if (!user) return null;

  // Force refresh token if needed
  return await user.getIdToken(true);
}
