import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer_top from "./Footer_top";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call if needed)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="contact-page min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            We're here to help! Reach out with any questions, feedback, or inquiries, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="contact-form bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-primary/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-primary/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-primary/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-primary/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
            {formStatus === "success" && (
              <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="contact-info bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary">Email</h3>
                  <p className="text-sm text-primary/70">
                    <a href="mailto:support@kidsverse.com" className="hover:text-primary">
                      support@kidsverse.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary">Phone</h3>
                  <p className="text-sm text-primary/70">
                    <a href="tel:+1234567890" className="hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-primary">Address</h3>
                  <p className="text-sm text-primary/70">
                    123 Fashion Street, Style City, SC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer_top />
    </div>
  );
};

export default Contact;