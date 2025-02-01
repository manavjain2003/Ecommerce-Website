function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-violet-600 mb-6">About Us</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to our platform! We are passionate about providing top-notch services and products to our customers. Our team is committed to delivering excellence in every aspect of our business.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          From humble beginnings, we have grown into a trusted brand known for our dedication to customer satisfaction and innovative solutions. We believe in creating lasting relationships with our clients by consistently exceeding their expectations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Thank you for choosing us. We look forward to serving you and continuing our journey together.
        </p>
        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;