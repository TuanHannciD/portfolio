import contact from "../data/contact.json";
import emailjs from "emailjs-com";
export default function Contact() {
  const {  email, phone } = contact;
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileInput = e.target.attachment.files[0];
    if (fileInput) {
      const fileSize = fileInput.size / 1024 / 1024;
      if (fileSize > 0.047) {
        alert("File size must be less than 50KB");
        return;
      }
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        alert("Message sent successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Message sent failed");
      });
  };
  return (
    <section id="contact" className="fade-in mb-12">
      <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-[#2A2A2A] p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <i className="fas fa-mobile-alt text-blue-400 text-lg"></i>
              <div>
                <h4 className="text-white font-semibold">Mobile</h4>
                <p className="text-gray-400">{phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-green-400 text-lg"></i>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400">{email}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <div className="bg-gray-600 w-16 h-16 rounded-lg flex items-center justify-center">
              <i className="text-gray-400">
                {" "}
                <img
                  src="/MyInfor_qrcode.png"
                  alt="QR Code"
                  className="w-full h-full"
                />
              </i>
            </div>
            <div className="bg-gray-600 w-16 h-16 rounded-lg flex items-center justify-center">
              <i className="fas fa-id-card text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#2A2A2A] p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6">Contact Form</h3>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div>
              <label className="block text-gray-300 text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-[#3A3A3A] border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full bg-[#3A3A3A] border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                className="w-full bg-[#3A3A3A] border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Attach PDF (Optional)
                <span className="text-xs text-gray-500 ml-1">
                  Only PDF files up to 1 MB
                </span>
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                name="attachment"
                className="w-full bg-[#3A3A3A] border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="text-xs text-gray-500 mb-4">
              This site is protected by reCAPTCHA and the Google
              <a href="#" className="text-blue-400 hover:underline">
                {" "}
                Privacy Policy
              </a>{" "}
              and
              <a href="#" className="text-blue-400 hover:underline">
                {" "}
                Terms of Service
              </a>{" "}
              apply.
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
