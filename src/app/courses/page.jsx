import CoursesContent from "./CoursesContent";

export const metadata = {
    title: "Browse Courses | Undergraduate & Postgraduate Programs",
    description: "Explore diverse courses in Engineering, Management, Science, and Arts at top global universities.",
    openGraph: {
        title: "Browse Courses | JV Overseas",
        description: "Find the perfect course for your study abroad journey. Compare programs, fees, and requirements.",
        url: "https://www.jvoverseas.com/courses",
        images: ["/og-courses.webp"],
    },
    alternates: {
        canonical: '/courses',
    },
};

export default function CoursesPage() {
    return <CoursesContent />;
}
