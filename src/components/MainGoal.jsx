export const MainGoal = () => {
  return (
    <div className="practise">
      <h1>TIME TO PRACTISE!</h1>
      <p>
        Build a <code>{"<MainGoal>"}</code> component and insert it below this
        text
      </p>

      <p>
        Your <code>{"<MainGoal>"}</code> component should simply output some
        text that describes your main course goal {"("}e.g., "My main goal:
        Learn React in great detail"{")"}
      </p>

      <p>
        <strong>Important:</strong> Your custom component must contain the text
        "My main goal:"
      </p>

      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simple by adding the <code>export</code> keyword in front
        of your function {"("}e.g.,{" "}
        <code>export function YOUR_COMPONENT_NAME</code>
      </p>

      <p>My main goal: Become a React maestro.</p>
    </div>
  );
};
