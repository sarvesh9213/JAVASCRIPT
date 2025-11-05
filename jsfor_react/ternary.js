let age = 16;
const Component1 = () => {
  let name = age > 10 ? <div>Pedro</div> : <div>Jack</div>;
  return name;
};
const Component2 = () => (age > 10 ? <div>Pedro</div> : <div>Jack</div>);
