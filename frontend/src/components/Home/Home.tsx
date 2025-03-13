import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cyan-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kolaborasi Tim Jadi Lebih Mudah dan Efisien
              </h1>
              <button 
                onClick={() => navigate('/login')}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Get Started
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="/collaboration.svg" alt="Team Collaboration" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
                <p className="text-gray-600">Feature description goes here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">HOW IT WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold mb-4">0{step}</div>
                <p className="text-gray-600">Step description goes here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">TESTIMONIALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Client Name</h4>
                    <p className="text-gray-600">Position</p>
                  </div>
                </div>
                <p className="text-gray-600">Testimonial content goes here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">PRICING PLANS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">FREE</h3>
              <div className="text-4xl font-bold mb-6">$0</div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Feature 1
                </li>
              </ul>
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition"
              >
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">PRO</h3>
              <div className="text-4xl font-bold mb-6">$20</div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Premium Feature 1
                </li>
              </ul>
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to get started */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
          <button 
            onClick={() => navigate('/register')}
            className="bg-white text-blue-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg">iOS</button>
            <button className="bg-black text-white px-6 py-2 rounded-lg">Android</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
