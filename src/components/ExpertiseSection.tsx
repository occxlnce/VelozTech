
import React from 'react';

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We knew to be done is good, but<br />
            sharing our experiences and it<br />
            "works" is way better.
          </h3>
        </div>

        {/* Expertise Items */}
        <div className="space-y-20">
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="text-orange-500 text-8xl font-bold mb-6">01</div>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tell us what you like (and what not)
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Never again waste time thinking about what to have! Veloztech AI will create a 100% personalized technology just for you. It makes sure you get all the technology and innovations you need, no matter what trend you follow!
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop"
                alt="Technology Innovation"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="text-orange-500 text-8xl font-bold mb-6">02</div>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ability to combine empathy, creativity and rationality
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Once per week, approve the meal plan generated for you by VelozTech AI. You can change ingredients, swap entire meals, or even add your own recipes.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
                alt="Data Analytics"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
