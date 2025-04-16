import React, { useState } from 'react';

const activityCards = {
  1: {
    category: 'Communication',
    color: 'bg-yellow-100 text-yellow-800',
    cards: [
      'Describe an image for 5–10 minutes while your partner draws it. If another group can tell what it is, you earn a point.',
      'Guide a blindfolded partner through a “minefield” using only verbal cues. Both earn a point if successful.',
      'Translate a sentence into emojis. Teammates must decode it. If successful in 5 minutes, all get a point.'
    ]
  },
  2: {
    category: 'Teamwork',
    color: 'bg-green-100 text-green-800',
    cards: [
      'Using only paper, build the tallest tower in 5 minutes. Tallest team earns the point.',
      'Popcorn-count to 20. If two people speak at once, restart. Complete in 3 tries for a point.',
      'Solve puzzles with mixed-up pieces from other teams. The first team to complete their puzzle wins.'
    ]
  },
  3: {
    category: 'Conflict Resolution',
    color: 'bg-red-100 text-red-800',
    cards: [
      'One teammate describes a conflict. The rest choose a response type: Welcome, Overcome, or Question. Role-play your response.'
    ]
  }
};

const SoftSkillsGame = () => {
  const [diceRoll, setDiceRoll] = useState(null);
  const [card, setCard] = useState(null);
  const [teamPoints, setTeamPoints] = useState({ team1: 0, team2: 0 });
  const [currentTeam, setCurrentTeam] = useState('team1');
  const [showRules, setShowRules] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const rollDice = () => {
    const roll = Math.ceil(Math.random() * 3);
    const selectedCategory = activityCards[roll];
    const randomCard = selectedCategory.cards[Math.floor(Math.random() * selectedCategory.cards.length)];
    setDiceRoll(roll);
    setCard(randomCard);
  };

  const handleScore = () => {
    const newPoints = {
      ...teamPoints,
      [currentTeam]: teamPoints[currentTeam] + 1
    };
    setTeamPoints(newPoints);
    if (newPoints[currentTeam] >= 10) {
      setGameOver(true);
    } else {
      setCurrentTeam(currentTeam === 'team1' ? 'team2' : 'team1');
      rollDice();
    }
  };

  const handleSkip = () => {
    setCurrentTeam(currentTeam === 'team1' ? 'team2' : 'team1');
    rollDice();
  };

  const restartGame = () => {
    setTeamPoints({ team1: 0, team2: 0 });
    setCurrentTeam('team1');
    setGameOver(false);
    setCard(null);
    setDiceRoll(null);
    rollDice();
  };

  return (
    <div className="w-full py-12 px-4 min-h-screen bg-white text-center text-[#1E40AF]">
      <h1 className="text-4xl font-bold mb-4">Soft Skills Card Game</h1>
      <p className="mb-6">First team to 10 points wins! Take turns completing cards or skipping.</p>

      {showRules && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-4 text-[#1E40AF]">Game Rules</h2>
            <ul className="list-disc pl-5 text-[#334155] text-sm">
              <li>Click "Roll the Dice" to receive a soft skills activity.</li>
              <li>Dice chooses: Communication, Teamwork, or Conflict Resolution.</li>
              <li>Complete the activity to earn a point for your team.</li>
              <li>If skipped or failed, the turn passes to the other team.</li>
              <li>First team to 10 points wins.</li>
              <li>To keep the game interesting use a 5 minute timer that skips the current teams turn when it goes off</li>
            </ul>
            <div className="text-right mt-4">
              <button onClick={() => { setShowRules(false); rollDice(); }} className="bg-[#1E40AF] text-white px-4 py-2 rounded hover:bg-[#3749AB]">Got it!</button>
            </div>
          </div>
        </div>
      )}

      {gameOver ? (
        <div className="text-3xl font-bold mt-12">
          🎉 {currentTeam === 'team1' ? 'Team 1' : 'Team 2'} wins with 10 points!
          <div className="mt-6">
            <button onClick={restartGame} className="bg-[#1E40AF] text-white px-6 py-2 rounded hover:bg-[#3749AB]">Restart Game</button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4 text-lg font-semibold">Current Turn: {currentTeam === 'team1' ? 'Team 1' : 'Team 2'}</div>
          {diceRoll && card && (
            <div className={`max-w-xl mx-auto rounded-lg p-6 mb-6 ${activityCards[diceRoll].color} shadow-md`}>
              <h2 className="text-2xl font-bold mb-2">{activityCards[diceRoll].category}</h2>
              <p>{card}</p>
            </div>
          )}

          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={handleScore}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              ✅ Completed – Give Point
            </button>
            <button
              onClick={handleSkip}
              className="bg-gray-300 text-[#1E40AF] px-4 py-2 rounded hover:bg-gray-400"
            >
              ➡️ Skip Turn
            </button>
          </div>

          <div className="text-xl font-semibold">
            Team 1: {teamPoints.team1} | Team 2: {teamPoints.team2}
          </div>
        </>
      )}
    </div>
  );
};

export default SoftSkillsGame;