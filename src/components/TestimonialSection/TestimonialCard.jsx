import React from 'react';

const TestimonialCard = ({ quote, name, title, avatar, highlighted }) => {
  return (
    <article
      className={`flex flex-col p-8 rounded-lg py-12 gap-4 shadow-lg h-[550px] ${
        highlighted ? 'bg-white text-gray-900' : 'bg-[#4F9CF9] text-white'
      }`}
    >
      <div className="mb-4">
        <img
          style={{ fontSize: '40px' }}
          className={highlighted ? 'text-white' : 'text-white'}
          src="/svg/QuoteIcon.svg"
          alt="Quote Icon"
        />
      </div>

      <p className="text-base mb-6 flex-1">{quote}</p>

      <hr className="my-[30px]" />

      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-[95px] h-[95px] object-cover rounded-full mr-4 border-2 border-gray-300"
        />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className={`text-sm ${highlighted ? 'text-[#212529]' : 'text-white'}`}>
            {title}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;