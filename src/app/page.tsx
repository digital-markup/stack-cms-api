import Hero from "@/components/hero-section";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div>
          <Hero />
          <main className="flex-1 flex flex-col gap-6 px-4">
            <div className="w-full h-full px-8 flex justify-center items-center">
              <h2 className="text-slate-900 relative -top-3 bg-slate-50">
                Wordpress alternative for developers
              </h2>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
