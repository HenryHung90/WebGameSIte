import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["陳品如", "洪子云", "李宜璇", "陳芷媛"];
  const Content = [
    "美術設計工作、人物角色移動 - 組長",
    "遊戲故事、遊戲音效、遊戲元素 - 腸胃不適的組員",
    "遊戲內容(包括碰撞、陷阱、計分...等會碰上之障礙) - 焦頭爛額的組員",
    "遊戲主架構、起始頁面 - 玩遊戲大師陳組員",
  ];

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
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[3]}
          Content={Content[3]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
