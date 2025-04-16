import React, { useState } from 'react';

const questions = [
  {
    prompt: 'How do you prefer to handle team disagreements?',
    answers: [
      'Discuss openly and try to find middle ground',
      'Let someone else take the lead to avoid conflict',
      'Stand firm and defend your idea regardless'
    ],
    percentages: [52, 28, 20],
    feedback: 'There’s no one-size-fits-all. Each approach says something about your leadership style.'
  },
  {
    prompt: 'What’s your style when starting a new group project?',
    answers: [
      'Take initiative and assign tasks quickly',
      'Listen first and feel out the group dynamic',
      'Wait for someone else to organize things'
    ],
    percentages: [35, 50, 15],
    feedback: 'Different teams need different energies. Being adaptable is key.'
  }
];

const Cards = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleVote = (index) => {
    setSelected(index);
    setShowResults(true);
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowResults(false);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  const q = questions[currentQuestion];

  return (
    <div className='w-full py-[8rem] px-4 bg-[#F9FAFB] text-[#1E40AF]'>
      <div className='max-w-[1240px] mx-auto text-center mb-8'>
        <h2 className='text-4xl font-bold mb-4'> Quick Opinion Poll</h2>
        <p className='text-xl text-[#475569]'>{q.prompt}</p>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {q.answers.map((answer, index) => (
          <div
            key={index}
            onClick={() => handleVote(index)}
            className={`w-full shadow-xl p-6 rounded-lg cursor-pointer hover:scale-105 duration-300 ${
              selected === index ? 'bg-[#6366F1] text-white' : 'bg-[#E0F2FE] text-[#1E40AF]'
            }`}
          >
            <h3 className='text-lg font-semibold text-center'>{answer}</h3>
            {showResults && (
              <div className='mt-4'>
                <div className='h-2 w-full bg-gray-300 rounded-full'>
                  <div
                    className='h-2 bg-[#6366F1] rounded-full'
                    style={{ width: `${q.percentages[index]}%` }}
                  ></div>
                </div>
                <p className='text-sm mt-1'>{q.percentages[index]}% chose this</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {showResults && (
        <div className='mt-12 text-center'>
          <p className='text-xl font-semibold text-[#1E3A8A]'>{q.feedback}</p>
          <button
            onClick={nextQuestion}
            className='mt-6 bg-[#1E40AF] text-white px-6 py-3 rounded-md font-medium hover:scale-105 transition'
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
