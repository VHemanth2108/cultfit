import React, { useState } from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    monthlyPrice: 1499,
    yearlyPrice: 14990,
    features: [
      "Access to gym equipment",
      "Basic fitness assessment",
      "2 group classes per week",
      "Locker room access",
      "Mobile app access"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    features: [
      "Unlimited access to gym equipment",
      "Comprehensive fitness assessment",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Locker room access with towel service",
      "Mobile app access with premium features"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Elite",
    monthlyPrice: 4999,
    yearlyPrice: 49990,
    features: [
      "24/7 gym access",
      "Advanced fitness assessment",
      "Unlimited group classes",
      "4 personal training sessions/month",
      "Custom nutrition plan",
      "Recovery services (massage, sauna)",
      "Premium locker with amenities",
      "Priority class booking",
      "Guest passes (2 per month)"
    ],
    popular: false
  }
];

export const Membership = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership Plans</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the perfect membership plan that suits your fitness goals and budget.
            All plans include access to our state-of-the-art facilities.
          </p>
          
          <div className="mt-8 inline-flex items-center bg-gray-100 p-1 rounded-full">
            <button 
              className={`py-2 px-6 rounded-full text-sm font-medium ${
                !isYearly ? 'bg-white shadow-md text-gray-900' : 'text-gray-500'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`py-2 px-6 rounded-full text-sm font-medium ${
                isYearly ? 'bg-white shadow-md text-gray-900' : 'text-gray-500'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly <span className="text-xs text-red-600 font-bold">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-4 border-red-600 transform hover:-translate-y-2 shadow-xl' 
                  : 'border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="bg-red-600 text-white text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`mailto:hemanthvasireddi2@gmail.com?subject=CultFit ${plan.name} Plan Inquiry&body=I'm interested in the ${plan.name} plan.`}
                  className={`w-full py-3 px-4 rounded-full font-medium transition-colors inline-block text-center ${
                    plan.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p>All memberships include a 7-day money-back guarantee. No long-term contracts required.</p>
        </div>
      </div>
    </section>
  );
};