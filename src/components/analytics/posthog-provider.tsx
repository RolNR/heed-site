"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

// Shared-project analytics for Orbigin. The project_folio default property
// lets the internal-tools cron filter events per client when querying
// HogQL. Do NOT create a new PostHog project per client — we run one
// project for the whole org.
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
      enable_heatmaps: true,
      loaded: (ph) => {
        const folio = process.env.NEXT_PUBLIC_PROJECT_FOLIO;
        if (folio) ph.register({ project_folio: folio });
      },
    });
  }, []);

  return <>{children}</>;
}
