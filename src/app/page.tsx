import Hero from "@/components/hero-section";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <div className="w-full h-full px-8 flex justify-center items-center">
          <h2>Dashboard goes here</h2>
        </div>
      </main>
    </div>
  );
}
