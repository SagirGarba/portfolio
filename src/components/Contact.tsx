"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with a service like EmailJS, Formspree, or your backend
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "sagir.garba@email.com",
      href: "mailto:sagir.garba@email.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/sagirgarba",
      href: "https://linkedin.com/in/sagirgarba",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/sagirgarba",
      href: "https://github.com/sagirgarba",
    },
    {
      icon: "📱",
      label: "WhatsApp",
      value: "+1 (555) 123-4567",
      href: "https://wa.me/15551234567",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {info.label}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Why Work With Me?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">✓</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Problem-Solving Focus
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      I approach every project with analytical thinking and
                      creative solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">✓</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Modern Tech Stack
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Proficient in React, Next.js, TypeScript, and modern
                      development practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">✓</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Team Player
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Excellent communication and collaboration skills for
                      seamless teamwork
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">✓</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Continuous Learning
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Always staying updated with the latest technologies and
                      best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-vertical"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Sagir Garba. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Let&apos;s create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
