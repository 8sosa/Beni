import React from 'react';

export default function PricingPage() {
  return (
    <div className="bg-white py-20">
        <header className="w-full bg-white py-14 sm:py-6 mb-8">
            <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-thin text-black">Services</h1>
            <p className="text-xs sm:text-sm font-semibold mt-4 text-black">
                Home . Services
            </p>
            </div>
        </header>

        <div className="max-w-6xl mx-auto p-10">
            <h1 className="text-3xl sm:text-5xl font-thin text-black">Dear Customers,</h1>
            <p className="text-sm sm:text-sm font-thin mt-4 text-gray-500">
                Our primary goal is developing a secure and customizable theme framework that meets the needs of the end user. Therefore, our customers are able to create websites using our templates as easy as 1-2-3! This process requires minimum knowledge of WordPress and coding, and extended documentation and our Support Team is always at your service. However, we ask you to keep in mind that sometimes issues occur not because of templates malfunction. There might be situations when it doesn’t depend on us and the framework. For example, server settings, some extra functional that requires deep file customization, or additional plugins usage. And of course, an attempt to build a website in a very short time.

                We know our theme framework perfectly and have a highly-professional team of developers. They will help you to develop the website you need. If you need website customization, contact our support system for further information: https://themerex.net/support/</p>
        </div>

        <br />
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <header className="w-full bg-white py-14 sm:py-6 mb-8">
            <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-thin text-black">Packages</h1>
            </div>
        </header>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Regular Package */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-center text-black">Regular</h3>
            <p className="text-center text-red-600 text-2xl font-bold mt-4">
              $45
            </p>
            <p className="text-center text-gray-500 mt-2">
              Installation + Logo change
            </p>

            <ul className="mt-6 flex-1 space-y-3 text-gray-700 text-sm leading-relaxed">
              <li>
                The template will be installed on your server exactly as the demo
                looks like. You will get access to the admin panel, so you can
                manage your website yourself.
              </li>
              <li>
                We will replace the template’s logo with yours in any standard format
                (AI, PSD, EPS, PNG, JPG). Logo width should be 300px and 600px.
              </li>
            </ul>

            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition-colors">
              Grab this deal
            </button>
          </div>

          {/* Gold Package */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-center text-black">Gold</h3>
            <p className="text-center text-red-600 text-2xl font-bold mt-4">
              $395
            </p>
            <p className="text-center text-gray-500 mt-2">
              Ready-to-use Website
            </p>

            <ul className="mt-6 flex-1 space-y-3 text-gray-700 text-sm leading-relaxed">
              <li>Theme installation on your server with your logo</li>
              <li>Google map with your address set</li>
              <li>Contact and images replacement (theme layout)</li>
              <li>Removing elements that you do not want from your new website</li>
              <li>Social icons with relevant channels</li>
              <li>Color scheme replacement</li>
            </ul>

            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition-colors">
              Grab this deal
            </button>
          </div>

          {/* Silver Package */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-center text-black">Silver</h3>
            <p className="text-center text-red-600 text-2xl font-bold mt-4">
              $699
            </p>
            <p className="text-center text-gray-500 mt-2">
              Full Website Package
            </p>

            <ul className="mt-6 flex-1 space-y-3 text-gray-700 text-sm leading-relaxed">
              <li>WordPress and theme installation</li>
              <li>Customization of website branding</li>
              <li>Color scheme replacement</li>
              <li>Additional pages including 6 pages &amp; blog posts, Revolution slider</li>
              <li>SEO Essentials</li>
              <li>Website speed optimized</li>
            </ul>

            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition-colors">
              Grab this deal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
