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
    <main className="min-h-screen bg-neutral-900 text-white">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <div className="flex items-center justify-center min-h-screen">
              <ProfileSection />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center min-h-screen">
              <EducationSection />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center min-h-screen">
              <ExperienceSection />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
