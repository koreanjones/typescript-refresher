import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
    onAddGoal: (goal:string, summary: string) => void
}

export default function NewGoal({onAddGoal}:NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    event.currentTarget.reset()
    onAddGoal(enteredGoal,enteredSummary)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Goal</label>
        <input id="goal" type="text" ref={goal}/>
      </p>
      <p>
        <label htmlFor="description">description</label>
        <input id="description" type="text" ref={summary} />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
