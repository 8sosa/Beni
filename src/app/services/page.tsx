import React from 'react';
import services from '@/components/content.json';

export default function ServicesPage() {
  return (
    <div className="bg-white py-20">
      <header className="w-full bg-white py-14 sm:py-6 mb-8">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-thin text-black">Our Services</h1>
          <p className="text-xs sm:text-sm font-semibold mt-4 text-black">
            Home . Services
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-10">
        <h2 className="text-3xl sm:text-5xl font-thin text-black mb-6">Dear Customers,</h2>
        <p className="text-sm sm:text-base font-thin mt-4 text-gray-500">
          Our primary goal is developing a secure and customizable theme framework that meets the needs of the end user. Therefore, our customers are able to create websites using our templates as easy as 1-2-3! This process requires minimum knowledge of WordPress and coding, and extended documentation and our Support Team is always at your service. However, we ask you to keep in mind that sometimes issues occur not because of templates malfunction. There might be situations when it doesn’t depend on us and the framework. For example, server settings, some extra functional that requires deep file customization, or additional plugins usage. And of course, an attempt to build a website in a very short time.
        </p>
        <p className="text-sm sm:text-base font-thin mt-4 text-gray-500">
          We know our theme framework perfectly and have a highly-professional team of developers. They will help you to develop the website you need. If you need website customization, contact our support system for further information: <a href="https://themerex.net/support/" className="text-blue-600 underline">themerex.net/support</a>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <header className="w-full bg-white py-14 sm:py-6 mb-8">
          <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-thin text-black">Services Offered</h2>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.services.map((svc) => (
            <div key={svc.title} className="border border-gray-200 rounded-lg p-6 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-black text-center mb-4">{svc.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{svc.description}</p>
              <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
