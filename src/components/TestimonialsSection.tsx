
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Nndavheleseni Tshivhase",
      position: "Director, Capital Peak Group",
      quote: "Our partnership with VelozTech to modernize our complex C++, C#, and Python-based legacy infrastructure was a highly strategic and impactful decision. They quickly proved their deep technical expertise and thorough understanding of our specific domain, regulatory requirements, and performance needs while maintaining and enhancing our critical applications.",
      avatar: "https://images.pexels.com/photos/18642682/pexels-photo-18642682/free-photo-of-man-in-suit-with-tie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Antony Stewart",
      position: "CEO, WaxedPayments",
      quote: "WaxedPayments deeply appreciates VelozTech for their pivotal role in modernizing public transport systems. VelozTech expertly led technology integration and certification, ensuring compliance, and innovatively embedded AI/ML solutions for real-time predictions and fleet optimization. This significantly boosted platform intelligence, operational efficiency, and passenger services, highlighting VelozTech's valuable technical and domain expertise.",
      avatar: "https://images.pexels.com/photos/8937582/pexels-photo-8937582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Wisani Salani",
      position: "Group CEO, RSA",
      quote: "VelozTech has been an indispensable partner in navigating our complex digital transformation journey here in South Africa. Their profound technical expertise, coupled with a keen understanding of our market, has delivered solutions that are not only innovative but also drive tangible business value and operational excellence.",
      avatar: "https://static.wixstatic.com/media/d77b41_e897985c44cb4710a26cc9ca654be193~mv2.jpg/v1/crop/x_2,y_15,w_1989,h_1832/fill/w_311,h_321,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Waxd-110_edited.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Testimonials</h2>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
            <h3 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6 lg:mb-0">
              What People are<br />
              saying about us
            </h3>
            <p className="text-gray-600 text-lg max-w-md">
              Everything you need to know about our clients and grow your business anywhere on the planet.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-orange-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
