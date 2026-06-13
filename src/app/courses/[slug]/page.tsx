import { notFound } from "next/navigation";
import { courses } from "../../../data/courses";
import CourseMediaCarousel from "../CourseMediaCarousel";
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CoursePage({ params }: Props) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  // Generate WhatsApp message
  const phoneNumber = "1234567890"; // Replace with actual number
  const websiteUrl = `https://ayatech.com/courses/${course.slug}`; // Replace with actual domain
  const message = `Hi, I am interested in the course: ${course.title}. Could you provide more details? Link: ${websiteUrl}`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-8 max-md:px-5 flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-center items-center">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ backgroundColor: course.imgAccent + "1A", color: course.imgAccent }}
          >
            {course.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "#1C2A57" }}>
            {course.title}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            {course.tagline}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400 mt-2 flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <BookOpen size={16} strokeWidth={2} color="#3AB54A" /> {course.modules}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} strokeWidth={2} color="#3AB54A" /> {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={16} strokeWidth={2} color="#3AB54A" /> {course.format}
            </span>
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-6 text-center">
          <h2 className="text-2xl font-bold" style={{ color: "#1C2A57" }}>
            About the Course
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Media / Sliding Images section */}
        <div className="w-full max-w-[100vw] mx-auto border-y border-gray-100 py-10 my-4 flex flex-col gap-6 overflow-hidden">
          <h2 className="text-2xl font-bold text-center" style={{ color: "#1C2A57" }}>
            Inside the Program
          </h2>
          {/* Automatically looping carousel of course media */}
          <CourseMediaCarousel />
        </div>

        {/* Action Section */}
        <div className="flex justify-center mt-8">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline flex items-center gap-3 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta shadow-lg shadow-green-500/20"
            style={{ backgroundColor: "#25D366" }} // WhatsApp green
          >
            <span>Enquire on WhatsApp</span>
            <ArrowRight size={18} strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  );
}
