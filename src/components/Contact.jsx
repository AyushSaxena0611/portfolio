import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission - you can integrate with services like EmailJS, Formspree, or SendGrid
    console.log('Form submitted:', formData);
    
    // Example: Uncomment to use Formspree (free service)
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: { 'Content-Type': 'application/json' }
    // });
    
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-primary py-24 px-24 flex items-center justify-center border-t border-gray-800">
      <div className="w-full max-w-2xl">
        <div className="bg-dark rounded-lg p-12 shadow-2xl animate-fadeIn">
          <h1 className="text-4xl font-bold text-secondary mb-4 text-center animate-slideDown">Let's Connect</h1>
          <p className="text-gray-400 text-center mb-8">
            Have a question or project in mind? Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8 text-center">
            <a href="tel:+919140186479" className="p-4 bg-primary rounded-lg border border-gray-700 hover:border-secondary transition-colors duration-300">
              <p className="text-secondary font-bold">📞 Phone</p>
              <p className="text-gray-300 text-sm">+91-9140186479</p>
            </a>
            <a href="mailto:ayushsaxena06112000@gmail.com" className="p-4 bg-primary rounded-lg border border-gray-700 hover:border-secondary transition-colors duration-300">
              <p className="text-secondary font-bold">✉️ Email</p>
              <p className="text-gray-300 text-sm">ayushsaxena06112000@gmail.com</p>
            </a>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-secondary bg-opacity-20 border border-secondary rounded-lg text-secondary text-center">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary focus:ring-opacity-50 transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary focus:ring-opacity-50 transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary focus:ring-opacity-50 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary focus:ring-opacity-50 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-secondary text-primary font-bold uppercase rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105 active:scale-95"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
