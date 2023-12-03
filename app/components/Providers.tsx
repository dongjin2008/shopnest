"use client";
import { CartProvider as USCProvider } from "use-shopping-cart";
import { ReactNode } from "react";

export default function CartProvider({children}: {children: ReactNode}) {
  return (

    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      successUrl="http://127.0.0.1:3000/sucess"
      cancelUrl="http://127.0.0.1:3000/cancle"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  )
}