import campus from "../assets/campus.jpg";

const Home = () => {
  return (
   <div
    className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url(" + campus + ")",
    }}
  >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(50,49,90,0.7)" }}
      ></div>
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          We Ensure better education
          <br />
          <span className="text-blue-300">for a better world</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>

        <button className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto">
          <span>Explore more</span>
        </button>
        
      </div>
    </div>
  );
};

export default Home;

