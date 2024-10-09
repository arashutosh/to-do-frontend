// import PropTypes from 'prop-types';

// function Todos({ todos }) {
//   return (
//     <div>
//       {todos.map(function (todo, index) {
//         return (
//           <div key={index}>
//             <h1>{todo.title}</h1>
//             <h2>{todo.description}</h2>
//             <button>{todo.completed === true ? "Completed" : "Mark as complete"}</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// Todos.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       completed: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };

// export default Todos;



import PropTypes from 'prop-types';

function Todos({ todos }) {
  // Ensure todos is an array before using .map
  console.log(todos.getData)
  if (!Array.isArray(todos)) {
    return <div>No todos available</div>;
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
        </div>
      ))}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Todos;
