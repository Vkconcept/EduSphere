import about from "../assets/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900 drop-shadow-sm">
            About <span className="text-blue-600">EduSphere University</span>
          </h2>
          <p className="mt-5 text-gray-700 max-w-2xl mx-auto text-lg md:text-l">
            EduSphere University is a modern institution of higher learning
            committed to providing students with world-class education, innovative
            academic programs, and a vibrant campus community that develops future leaders.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={about}
              alt="About EduSphere University"
              className="rounded-3xl shadow-2xl border-4 border-blue-100 w-full max-w-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right: Text */}
          <div className="bg-white bg-opacity-80 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-5">
              Shaping Minds, Building Futures
            </h3>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              At EduSphere University, we foster intellectual growth, research,
              and practical skills that prepare our students to thrive in a global society.
            </p>
            <p className="text-gray-700 mb-8 text-base md:text-lg">
              With expert faculty, modern facilities, and a student-centered approach,
              we cultivate not just graduates, but innovators, problem-solvers,
              and visionaries ready to make a lasting impact.
            </p>

            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
