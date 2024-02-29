import { useState } from 'react';

import Header from './components/Header.tsx';
import goalsImage from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }
  function handleRemoveGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

 
  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <p>A list of course goals</p>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleRemoveGoal} />
    </main>
  );
}
