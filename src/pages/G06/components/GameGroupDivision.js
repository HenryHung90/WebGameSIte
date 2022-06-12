import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["林天牧", "宋顥歆"];
  const Content = ["", ""];

  return (
    <div className="GroupHome_GroupDivision" id="GroupDivision">
      <h1 className="GroupHome_Container_Text">小組分工</h1>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
