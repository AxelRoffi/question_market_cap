'use client';

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Base } from "@thirdweb-dev/chains";

interface ProvidersProps {
  children: React.ReactNode;
}

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

if (!clientId) {
  throw new Error("Missing NEXT_PUBLIC_THIRDWEB_CLIENT_ID environment variable");
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThirdwebProvider 
      activeChain={Base}
      clientId={clientId}
      // Recommended configurations for production
      dAppMeta={{
        name: "QuestionMarketCap",
        description: "Decentralized opinion exchange platform",
        logoUrl: "https://your-logo-url.com", // Update this
        url: "https://your-website.com", // Update this
        isDarkMode: false, // or use your dark mode state
      }}
    >
      {children}
    </ThirdwebProvider>
  );
}