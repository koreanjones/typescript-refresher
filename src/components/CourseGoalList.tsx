import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';
import { type CourseGoal as CGoal } from '../App';
import { type ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">no goals</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You have to many goals!
      </InfoBox>
    );
  }
  return (
    <div>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
}
