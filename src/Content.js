const Content = ({ todos }) => {
  console.log("todos", todos);
  if (todos.length === 0) {
    return <h1>No Tasks Added currently</h1>;
  }

  return (
    <div>
      {todos.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
};

export default Content;
