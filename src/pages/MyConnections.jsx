import React from 'react';


const MyConnections = () => {
  // Placeholder added people — in a real app this would come from state or backend
  const addedConnections = [
    { name: 'Alex Johnson', type: 'Alumni', field: 'Marketing', university: 'State U' },
    { name: 'Lina Zhang', type: 'Company', field: 'Software Engineering', company: 'TechNova' },
  ];

  return (
    <div className='w-full bg-white py-12 px-4 text-[#1E40AF]'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8'> My Connections</h1>
        <p className='text-center text-[#475569] mb-6'>These are the people and companies you've added from Explore.</p>
        <div className='grid md:grid-cols-2 gap-6'>
          {addedConnections.map((person, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg p-6'>
              <h2 className='text-2xl font-bold mb-2'>{person.name}</h2>
              <p className='text-sm text-[#475569] mb-1'>{person.type}</p>
              <p className='text-sm text-[#475569]'>Field: {person.field}</p>
              {person.type === 'Company' ? (
                <p className='text-sm text-[#475569]'>Company: {person.company}</p>
              ) : (
                <p className='text-sm text-[#475569]'>Alumni of: {person.university}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyConnections;
