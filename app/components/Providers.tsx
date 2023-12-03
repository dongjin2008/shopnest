"use client";
import { CartProvider as USCProvider } from "use-shopping-cart";
import { ReactNode } from "react";

export default function CartProvider({children}: {children: ReactNode}) {
  return (

    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      successUrl="http://shopnest-ten.vercel.app/sucess"
      cancelUrl="http://shopnest-ten.vercel.app/cancle"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  )
}