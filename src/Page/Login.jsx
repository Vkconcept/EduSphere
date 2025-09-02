const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">EduSphere Login</h2>
          <p className="text-gray-600">Access your student or staff account</p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@edusphere.edu"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Forgot your password?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
