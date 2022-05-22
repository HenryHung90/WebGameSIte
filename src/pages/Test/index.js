import "./index.css";

function iframe() {
  return {
    __html: `<iframe src="./Project/G02/index.html" frameborder="0" width="100%" height="100%"/>`,
  };
}

const Test = () => {
  return (
    <div>
      <div id="Game" dangerouslySetInnerHTML={iframe()} />
    </div>
  );
};

export default Test;
