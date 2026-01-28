import React from 'react';
import { BookOpen, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen z-5">
      {/* Hero Section */}
      <div className="relative h-72  bg-gray-100">
        <div className=" flex items-center justify-center pt-20">
          <div className="text-center text-black px-4   ">
            <h1 className="text-5xl font-bold mb-3">About Us</h1>
            <p className="text-xl">Your trusted bookstore since 2020</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-3 leading-relaxed">
              Founded in 2020, we started with a simple mission: to bring the joy of reading to everyone. What began as a small collection has grown into a comprehensive library serving thousands of book lovers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe books have the power to transform lives and connect people. Our carefully curated selection spans all genres, from classic literature to modern bestsellers.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600" 
              alt="Bookstore" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Books</h3>
              <p className="text-gray-600">Carefully selected collection of the finest literature</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Passionate Team</h3>
              <p className="text-gray-600">Book lovers helping you find your next great read</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Building a vibrant community of readers</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-1">10K+</div>
              <div className="text-blue-100">Books</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">50K+</div>
              <div className="text-blue-100">Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">100+</div>
              <div className="text-blue-100">Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">4.8★</div>
              <div className="text-blue-100">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;