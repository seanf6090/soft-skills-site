const MessagePortal = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-12 mb-16 px-4 text-[#1E40AF] bg-white py-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-6"> Message Portal</h1>
      <p className="text-center text-lg mb-8 text-[#475569]">
        Reach out to companies and alumni to ask questions about internships, scholarships, or mentorship opportunities.
      </p>
      <form className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto">
        <label className="block mb-4">
          <span className="text-sm font-medium">Your Name</span>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Jane Doe" />
        </label>
        <label className="block mb-4">
          <span className="text-sm font-medium">Your Email</span>
          <input type="email" className="mt-1 p-2 w-full border rounded-md" placeholder="jane@example.com" />
        </label>
        <label className="block mb-4">
          <span className="text-sm font-medium">Recipient</span>
          <select className="mt-1 p-2 w-full border rounded-md">
            <option value="">Select Alumni or Company</option>
            <option value="alumni">Alumni</option>
            <option value="company">Company</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-sm font-medium">Message</span>
          <textarea className="mt-1 p-2 w-full border rounded-md" rows="5" placeholder="Write your message here..."></textarea>
        </label>
        <button type="submit" className="w-full bg-[#6366F1] text-white py-2 rounded-md hover:bg-[#4F46E5] transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default MessagePortal;