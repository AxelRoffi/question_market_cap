'use client';

import { ConnectWallet } from "@thirdweb-dev/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";  // Make sure this utility exists

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface CustomConnectWalletProps
  extends VariantProps<typeof buttonVariants> {
  className?: string;
}

export function CustomConnectWallet({
  variant,
  size,
  className,
}: CustomConnectWalletProps) {
  return (
    <ConnectWallet 
      theme="light"
      btnTitle="Connect Wallet"
      className={cn(buttonVariants({ variant, size }), className)}
    />
  );
}