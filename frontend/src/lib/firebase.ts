// firebase.ts
import {
  initializeApp,
  getApps,
  FirebaseApp,
  FirebaseOptions,
} from "firebase/app";
import {
  getAuth,
  Auth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import {
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_PUBLIC_API_KEY,
} from "./constant";

// Required environment variables
const requiredEnvVars = [
  {
    name: "NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY",
    value: FIREBASE_PUBLIC_API_KEY,
  },
  { name: "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN", value: FIREBASE_AUTH_DOMAIN },
  { name: "NEXT_PUBLIC_FIREBASE_PROJECT_ID", value: FIREBASE_PROJECT_ID },
] as const;

if (typeof window === "undefined") {
  const missingVars: string[] = [];

  requiredEnvVars.forEach(({ name, value }) => {
    if (!value || value.trim().length === 0) {
      missingVars.push(name);
      console.error(
        `%c[Firebase Config Error] Missing required environment variable: ${name}`,
        "color: white; background-color: red; font-weight: bold; padding: 4px; border-radius: 4px;"
      );
    }
  });

  if (missingVars.length === 0) {
    console.log(
      "%c[Firebase Config] All required environment variables are set ✅",
      "color: white; background-color: green; font-weight: bold; padding: 4px; border-radius: 4px;"
    );
  }
}

const firebaseCredentials: FirebaseOptions = {
  apiKey: FIREBASE_PUBLIC_API_KEY ?? "",
  authDomain: FIREBASE_AUTH_DOMAIN ?? "",
  projectId: FIREBASE_PROJECT_ID ?? "",
};

// Remove extra quotes if present
Object.keys(firebaseCredentials).forEach((key) => {
  const typedKey = key as keyof FirebaseOptions;
  const configValue = (firebaseCredentials[typedKey] ?? "").toString();
  if (configValue.startsWith('"')) {
    firebaseCredentials[typedKey] = configValue.slice(1, -1);
  }
});

export const firebaseConfig: FirebaseOptions = firebaseCredentials;

export const firebaseApp: FirebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth: Auth = getAuth(firebaseApp);

// ✅ Set persistence globally
if (typeof window !== "undefined") {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      console.log("Firebase auth persistence set to LOCAL");
    })
    .catch((err) => {
      console.error("Failed to set Firebase auth persistence:", err);
    });
}
