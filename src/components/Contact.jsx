import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Icons
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', msg: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Failed to connect to server.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-soft border border-border">
            <h3 className="text-xl font-bold mb-6 text-text">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted text-text"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted text-text"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted text-text"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted text-text resize-none"
                ></textarea>
              </div>

              {status && (
                <div className={`text-sm p-3 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                    {status.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primaryHover transition-all flex items-center justify-center gap-2 shadow-soft"
              >
                {isSubmitting ? 'Sending...' : (
                    <>
                        Send Message <SendIcon />
                    </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-soft border border-border flex-grow">
              <h3 className="text-xl font-bold mb-6 text-text">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">Phone</p>
                    <p className="font-medium text-text">+91 8309389233</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">Email</p>
                    <p className="font-medium text-text">musunuruvishnuv@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">Location</p>
                    <p className="font-medium text-text">Andhra Pradesh - 521201</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <LinkedinIcon />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/vishnu-vardhan-musunuru" className="font-medium hover:text-primary transition-colors text-text">Connect with me</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-border">
                <p className="text-center text-muted text-sm">
                    Open to work and collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
