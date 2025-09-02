const Admission = () => {
    return (
        <section id="admission" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 drop-shadow-sm">
                        Admissions <span className="text-blue-700">2025</span>
                    </h2>
                    <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto">
                        Join <span className="font-semibold text-blue-600">EduSphere University</span> and become part of a thriving academic community.<br />
                        Explore our programs and take the first step toward your future.
                    </p>
                </div>

                {/* Admission Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Eligibility */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-blue-500 hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <span className="inline-block bg-blue-100 text-blue-700 rounded-full p-3">
                                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14v7m-7-7v7m14-7v7M5 10V7a7 7 0 0114 0v3"></path></svg>
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Eligibility</h3>
                        <p className="text-gray-600">
                            High school graduates or equivalent for undergraduate programs,<br />
                            and bachelor’s degree holders for postgraduate studies.
                        </p>
                    </div>

                    {/* Application Deadlines */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-blue-500 hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <span className="inline-block bg-blue-100 text-blue-700 rounded-full p-3">
                                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Deadlines</h3>
                        <p className="text-gray-600">
                            Applications are open from <span className="font-semibold text-blue-600">September 1 to March 31, 2026</span>.<br />
                            Submit early to secure your place.
                        </p>
                    </div>

                    {/* How to Apply */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-blue-500 hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <span className="inline-block bg-blue-100 text-blue-700 rounded-full p-3">
                                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M12 4v16m0 0H3"></path></svg>
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">How to Apply</h3>
                        <p className="text-gray-600">
                            Complete the online application form, upload necessary documents,<br />
                            and submit the application fee. Our admissions team will guide you.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Admission;
