import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProfileSection } from "@/components/profile-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white py-36 sm:py-0 px-4 sm:px-0">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <div className="flex items-center justify-center min-h-screen py-8 sm:py-0">
              <ProfileSection />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center min-h-screen py-8 sm:py-0">
              <EducationSection />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center min-h-screen py-8 sm:py-0">
              <ExperienceSection />
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* Desktop Arrows */}
        <CarouselPrevious className="hidden sm:inline-flex sm:h-10 sm:w-10 sm:-left-12 h-8 w-8 -left-3" />
        <CarouselNext className="hidden sm:inline-flex sm:h-10 sm:w-10 sm:-right-12 h-8 w-8 -right-3" />

        {/* Mobile Arrows - posisi di bawah */}
        <div className="sm:hidden flex justify-center gap-4 absolute bottom-4 left-0 right-0">
          <CarouselPrevious className="static translate-y-0 h-8 w-8 bg-neutral-800/50 hover:bg-neutral-700/50" />
          <CarouselNext className="static translate-y-0 h-8 w-8 bg-neutral-800/50 hover:bg-neutral-700/50" />
        </div>
      </Carousel>
    </main>
  );
}
