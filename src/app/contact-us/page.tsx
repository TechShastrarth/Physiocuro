export default function ContactUsPage() {
  return (
    <div className="max-w-screen min-h-screen font-rajdhani bg-gray-100 text-[#074264]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#4DB6AC]">Contact</span> Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey to better health? Get in touch with our expert physiotherapy team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#4DB6AC] p-3 rounded-full">
                    <i className="fas fa-phone text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919967673260" className="text-[#4DB6AC] hover:underline">
                      +91 996 767 3260
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#4DB6AC] p-3 rounded-full">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@physiocuro.com" className="text-[#4DB6AC] hover:underline">
                      info@physiocuro.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#4DB6AC] p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      PhysioCuro Physiotherapy & Rehabilitation Center<br />
                      Dombivli East, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 8:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Sunday:</span> 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Us A Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
                  placeholder="Tell us about your condition or questions"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#4DB6AC] text-white py-3 px-6 rounded-lg hover:bg-[#26A69A] transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Find Us</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.359320493751!2d73.08667007528601!3d19.179502082046525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7950065885e0d%3A0xeea6d8377f3a05c5!2sPhysioCuro%20Physiotherapy%20%26%20Rehab!5e0!3m2!1sen!2sin!4v1750583159783!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
