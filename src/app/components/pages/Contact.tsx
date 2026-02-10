import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formDataObj,
    })
      .then(() => {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Form submission failed");
      });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:baralprashant09@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleGithubClick = () => {
    window.open("https://github.com/prashant-baral", "_blank", "noopener,noreferrer");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/prashantbaral1/", "_blank", "noopener,noreferrer");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com", "_blank", "noopener,noreferrer");
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[900px] mx-auto px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Get In Touch</h1>
          <p className="text-gray-600 text-sm">
            Have a project in mind? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Form */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-base font-semibold mb-3">Send a Message</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div>
                <label className="block text-xs mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-all resize-none"
                  rows={6}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="group bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Send className="w-3.5 h-3.5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            {/* Email */}
            <div className="border border-gray-200 rounded-lg p-3 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-semibold">Email</h3>
              </div>
              <button
                onClick={handleEmailClick}
                className=" hover:underline text-xs text-left"
              >
                baralprashant09@gmail.com
              </button>
            </div>

            {/* Phone */}
            <div className="border border-gray-200 rounded-lg p-3 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-semibold">Phone</h3>
              </div>
              <button
                onClick={handlePhoneClick}
                className=" hover:underline text-xs text-left"
              >
                +91 98765 43210
              </button>
            </div>

            {/* Location */}
            <div className="border border-gray-200 rounded-lg p-3 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-semibold">Location</h3>
              </div>
              <p className="text-gray-600 text-xs">Pokhara,Gandaki</p>
            </div>

            {/* Social Links */}
            <div className="border border-gray-200 rounded-lg p-3 hover:border-black transition-all duration-300">
              <h3 className="text-sm font-semibold mb-2">Connect</h3>
              <div className="flex gap-2">
                <button
                  onClick={handleGithubClick}
                  className="w-8 h-8 bg-gray-800 text-white rounded-full hover:bg-black transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleLinkedinClick}
                  className="w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleTwitterClick}
                  className="w-8 h-8 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Availability */}
            <div className="border border-gray-200 rounded-lg p-3 hover:border-black transition-all duration-300">
              <h3 className="text-sm font-semibold mb-1.5">Availability</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600 text-xs">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}