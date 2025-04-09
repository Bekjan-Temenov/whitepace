import React from 'react';

const PricingCard = ({ title, price, description, features, highlighted }) => {
  return (
    <article
    className={`relative flex flex-col  h-auto p-6 gap-3 rounded-lg shadow-lg ${
      highlighted
        ? 'bg-[#043873] text-white py-[80px] px-6'
        : 'bg-white text-gray-900 py-10 px-6 border -[#FFE492] ' 
    } `}
    >
      <header className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className={`text-4xl font-bold mt-2 ${highlighted ? 'text-[#FFE492]' : 'text-[#212529]'}`}>{price}</p>
        <p className={`text-sm mt-2 ${highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </header>

      
      <ul className="flex-1 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-3">
            {
              highlighted ? 
              <img className={`mr-2 `}
                style={{ fontSize: '20px' }} src="/whitepace/svg/check.svg" alt="" />
                :
                <img className={`mr-2 `}
              style={{ fontSize: '20px' }} src="/whitepace/svg/checkbox.svg" alt="" />
            }
            
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <footer>
        <button
          variant="contained"
          className={`w-auto px-[40px] cursor-pointer  py-3 rounded-lg  ${highlighted ? 'bg-[#4F9CF9] text-white hover:bg-[#043873]' : 'bg-transparent border border-[#FFE492] hover:bg-amber-300'}`}
        >
          Get Started
        </button>
      </footer>
    </article>
  );
}; 

export default PricingCard;