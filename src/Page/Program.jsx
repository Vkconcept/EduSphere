import { AcademicCapIcon, BookOpenIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

const cardStyles =
  "bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-blue-100";

const iconStyles = "mx-auto h-14 w-14 text-blue-600 mb-6 drop-shadow-lg";

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            Our <span className="text-blue-600">Programs</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            At EduSphere University, we offer a variety of programs designed to equip students with 
            the knowledge, skills, and experience to excel in their chosen fields.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Program 1 */}
          <div className={cardStyles}>
            <AcademicCapIcon className={iconStyles} />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Undergraduate Degrees</h3>
            <p className="text-gray-700 text-base">
              Comprehensive bachelor’s programs across Arts, Science, and Technology with hands-on learning.
            </p>
          </div>

          {/* Program 2 */}
          <div className={cardStyles}>
            <BookOpenIcon className={iconStyles} />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Postgraduate Studies</h3>
            <p className="text-gray-700 text-base">
              Advanced master’s and doctoral programs designed to deepen expertise and research skills.
            </p>
          </div>

          {/* Program 3 */}
          <div className={cardStyles}>
            <BriefcaseIcon className={iconStyles} />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Professional Courses</h3>
            <p className="text-gray-700 text-base">
              Short courses, certifications, and workshops tailored for career advancement and skill development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
