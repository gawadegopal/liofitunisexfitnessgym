import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import Trainer from '@/components/Trainer'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Lio-Fit Unisex Fitness Gym Ratnagiri | Best Gym for Strength & Weight Loss",
  description:
    "Lio-Fit Unisex Fitness Gym is the best gym in Ratnagiri offering strength training, weight loss programs, cardio workouts, and personal training with certified trainers.",
  keywords: [
    "Best gym in Ratnagiri",
    "Lio-Fit Gym Ratnagiri",
    "Unisex gym in Ratnagiri",
    "Personal training Ratnagiri",
    "Weight loss gym Ratnagiri",
    "Fitness center Ratnagiri",
    "Cardio and strength training Ratnagiri"
  ],
  alternates: {
    canonical: "https://www.liofitunisexfitnessgym.space/",
  },
  openGraph: {
    title: "Lio-Fit Unisex Fitness Gym Ratnagiri - Best Gym in Ratnagiri",
    description:
      "Join Ratnagiri's most trusted unisex gym. Strength training, weight loss, cardio workouts, and personal training at Lio-Fit Gym.",
    url: "https://www.liofitunisexfitnessgym.space/",
    siteName: "Lio-Fit Unisex Fitness Gym",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lio-Fit Unisex Fitness Gym",
    url: "https://www.liofitunisexfitnessgym.space/",
    description:
      "Best unisex fitness gym in Ratnagiri offering strength training, cardio workouts, weight loss programs, and personal training.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.liofitunisexfitnessgym.space/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div>
      <Hero />
      <Info />
      <Trainer />
      <Gallery />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
    </div>
  )
}
