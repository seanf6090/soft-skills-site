import React from 'react';

const ExploreConnections = () => {
  const people = [
    { name: 'Alex Johnson', type: 'Alumni', field: 'Marketing', university: 'State U' },
    { name: 'Lina Zhang', type: 'Company', field: 'Software Engineering', company: 'TechNova' },
    { name: 'Marcus Lee', type: 'Alumni', field: 'Design', university: 'Creative Arts College' },
    { name: 'Sarah Patel', type: 'Company', field: 'Finance', company: 'GreenBank' },
  ];

  return (
    <div className='w-full bg-white py-12 px-4 text-[#1E40AF]'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8'> Explore People & Companies</h1>
        <p className='text-center text-[#475569] mb-6'>Connect with alumni mentors and industry professionals who want to support your journey.</p>
        <div className='grid md:grid-cols-2 gap-6'>
          {people.map((person, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition'>
              <h2 className='text-2xl font-bold mb-2'>{person.name}</h2>
              <p className='text-sm text-[#475569] mb-1'>{person.type}</p>
              <p className='text-sm text-[#475569]'>Field: {person.field}</p>
              {person.type === 'Company' ? (
                <p className='text-sm text-[#475569]'>Company: {person.company}</p>
              ) : (
                <p className='text-sm text-[#475569]'>Alumni of: {person.university}</p>
              )}
              <button className='mt-4 bg-[#6366F1] text-white px-4 py-2 rounded hover:bg-[#4F46E5] transition'>
                Add Connection
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreConnections;