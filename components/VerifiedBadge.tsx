"use client";

import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const VERIFIED_PRICE = 9.99;

type CheckoutState = "idle" | "paying" | "verifying" | "success" | "error";

export default function VerifiedBadge() {
  const [state, setState] = useState<CheckoutState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleVerify = async (orderID: string) => {
    setState("verifying");
    try {
      const res = await fetch("/api/paypal/capture-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID, product: "verified-profile" }),
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
      } else {
        setErrorMsg(data.error || "Verification failed. Please contact support.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  };

  const perks = [
    "✅ Verified badge on your profile",
    "🔝 Priority placement in search results",
    "💌 Unlimited messages to any profile",
    "🔒 Trust signal — matches know you're real",
  ];

  return (
    <section id="verified" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-green-950/60 to-emerald-950/40 border border-green-700/40 rounded-3xl p-10 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/40 text-green-300 text-sm font-semibold px-5 py-2 rounded-full mb-6">
            ✅ Verified Profile Badge
          </div>
          <h2 className="text-3xl font-bold text-white">Stand Out. Build Trust.</h2>
          <p className="mt-3 text-gray-400 text-base">
            A Verified Profile badge tells potential matches you&apos;re the real deal — and gets your profile seen first.
          </p>
          <p className="mt-2 text-4xl font-bold text-green-400">$9.99 <span className="text-lg text-gray-400 font-normal">one-time</span></p>

          <ul className="mt-8 space-y-3 text-left max-w-xs mx-auto">
            {perks.map((p) => (
              <li key={p} className="text-sm text-gray-300">{p}</li>
            ))}
          </ul>

          <div className="mt-10">
            {state === "idle" && (
              <button
                onClick={() => setState("paying")}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl transition-colors"
              >
                Get Verified — $9.99
              </button>
            )}

            {state === "paying" && (
              <div className="space-y-4">
                <p className="text-sm text-gray-400">Complete payment via PayPal:</p>
                <PayPalButtons
                  style={{ layout: "vertical", color: "green", shape: "rect", label: "pay" }}
                  createOrder={(_data: Record<string, unknown>, actions: Record<string, unknown>) => {
                    const orderActions = actions as { order: { create: (opts: Record<string, unknown>) => Promise<string> } };
                    return orderActions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [{
                        amount: { currency_code: "USD", value: VERIFIED_PRICE.toFixed(2) },
                        description: "PorchSwing — Verified Profile Badge",
                      }],
                    });
                  }}
                  onApprove={async (data: Record<string, unknown>) => {
                    await handleVerify(data.orderID as string);
                  }}
                  onError={() => {
                    setErrorMsg("PayPal encountered an error. Please try again.");
                    setState("error");
                  }}
                  onCancel={() => setState("idle")}
                />
                <button onClick={() => setState("idle")} className="text-xs text-gray-500 hover:text-gray-300">
                  ← Cancel
                </button>
              </div>
            )}

            {state === "verifying" && (
              <div className="py-6">
                <div className="inline-block w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-400 text-sm mt-3">Confirming your payment...</p>
              </div>
            )}

            {state === "success" && (
              <div className="rounded-xl bg-green-900/40 border border-green-600/40 p-6">
                <p className="text-2xl mb-2">🎉</p>
                <p className="text-green-400 font-bold text-lg">You&apos;re Verified!</p>
                <p className="text-gray-400 text-sm mt-1">Your Verified badge is now active. Welcome to PorchSwing!</p>
              </div>
            )}

            {state === "error" && (
              <div className="space-y-3">
                <div className="rounded-xl bg-red-900/30 border border-red-600/30 p-4">
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                </div>
                <button onClick={() => { setState("idle"); setErrorMsg(null); }} className="text-sm text-gray-400 hover:text-gray-200">
                  ← Try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
