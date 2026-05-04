import React, { useState } from "react";
import { BsArrowRight, BsEnvelope } from "react-icons/bs";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const telegramMessage = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Message: ${formData.message}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "HTML",
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="lg:px-24 px-4 py-20" id="contact">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden">
        <div className="px-8 py-20 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Let&apos;s build something{" "}
              <span className="text-red-400">valuable</span> together
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Fill out the form or send me an email. I usually reply within a
              few hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />

                <textarea
                  name="message"
                  placeholder="Tell me about your project or requirements..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 resize-y"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-600 transition-all font-semibold text-lg py-4 rounded-2xl flex items-center justify-center gap-3"
                >
                  {status === "loading" ? "Sending Message..." : "Send Message"}
                  <BsArrowRight />
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-center font-medium">
                    ✅ Message sent successfully! I&apos;ll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-center">
                    Something went wrong. Please try emailing me directly.
                  </p>
                )}
              </form>
            </div>

            {/* Email Alternative */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Or email me directly
              </h3>

              <a
                href="mailto:your@email.com"
                className="group inline-flex items-center gap-4 text-xl text-gray-300 hover:text-white transition-colors"
              >
                <BsEnvelope className="text-3xl" />
                <span>emmanuel@fulodev.com</span>
              </a>

              <p className="mt-8 text-gray-400 leading-relaxed">
                I read every message personally. Whether you&apos;re looking for
                a one-time project, ongoing support, or just want to discuss an
                idea — feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
