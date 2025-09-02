import { useState } from "react";

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
        setForm({ name: "", email: "", message: "" }); // Clear form fields
        setTimeout(() => setShowAlert(false), 2000);
        // You can add actual form submission logic here
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Contact <span className="text-blue-600">Us</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Have questions or want to learn more about EduSphere University? Send us a message or reach out using the information below.
                    </p>
                </div>

                {/* Contact Form + Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Form */}
                    <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg" onSubmit={handleSubmit}>
                        {showAlert && (
                            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
                                Message sent!
                            </div>
                        )}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>
                        </div>
                        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-6 flex flex-col justify-center">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                            <p className="text-gray-600">123 EduSphere Lane, Knowledge City, Country</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                            <p className="text-gray-600">info@edusphereuniversity.edu</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                            <p className="text-gray-600">+123 456 7890</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Facebook</a>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Twitter</a>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Instagram</a>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
