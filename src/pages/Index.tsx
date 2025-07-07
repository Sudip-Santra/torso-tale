import { lazy, Suspense, useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import NavBar from "../components/NavBar";

// Lazy load components that are not immediately visible
const Hero = lazy(() => import("../components/Hero"));
const Categories = lazy(() => import("../components/Categories"));
const Specialties = lazy(() => import("../components/Specialties"));
const Footer = lazy(() => import("../components/Footer"));

// Loading skeletons for each component
const HeroSkeleton = () => (
  <div className="h-screen relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
    <Skeleton className="absolute inset-0" />
  </div>
);

const CategoriesSkeleton = () => (
  <section className="py-24 bg-gradient-to-b from-white to-gray-100">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Skeleton className="h-6 w-40 mx-auto mb-4" />
        <Skeleton className="h-12 w-72 mx-auto mb-6" />
        <Skeleton className="h-1 w-24 mx-auto mb-6 rounded-full" />
        <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-80 w-full rounded-lg" />
        ))}
      </div>
    </div>
  </section>
);

const SpecialtiesSkeleton = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-100">
    <div className="container mx-auto px-4">
      <Skeleton className="h-8 w-64 mx-auto mb-4" />
      <Skeleton className="h-24 w-full max-w-3xl mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-72 w-full rounded-lg" />
        ))}
      </div>
    </div>
  </section>
);

const FooterSkeleton = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-6 w-36 bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-4/5 bg-gray-700" />
            <Skeleton className="h-4 w-2/3 bg-gray-700" />
          </div>
        ))}
      </div>
    </div>
  </footer>
);

const Index = () => {
  const [mounted, setMounted] = useState(false);

  // After initial render, set mounted to true to trigger client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>

      <Suspense fallback={<SpecialtiesSkeleton />}>
        <Specialties />
      </Suspense>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
