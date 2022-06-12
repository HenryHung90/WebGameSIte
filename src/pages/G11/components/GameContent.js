import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    '一隻被豢養的小馬厭倦了農場生活，其實牠心中一直想成為一隻"彩虹小馬"!聽說吃各種顏色的寶石就能變成彩虹小馬以獲得自由，所以他踏上了吃寶石的旅程，途中要避開一堆障礙物和怪物，最終還必須擊敗農場主人，才能夠獲得真正的自由。',
    "避開障礙物、陷阱、收集寶石、不被怪物打死、擊敗最終的 BOSS。",
    "避開障礙物、陷阱跟攻擊怪物，收集寶石變成彩虹小馬。",
    "收集寶石來進化，以及擊敗第三關的 BOSS。",
    "方向鍵:左右移動、跳躍。空白鍵:吐舌頭攻擊。(特殊功能)shift 鍵:嘲諷。",
  ];

  return (
    <div className="GroupHome_GameContent" id="GameContent">
      <h1 className="GroupHome_Container_Text">遊戲設計</h1>
      <div className="GroupHome_GameIntro_Text" id="GameStory">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameRule">
        <GameIntroElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameMission">
        <GameIntroElement
          Box={Box[2]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameGoal">
        <GameIntroElement
          Box={Box[3]}
          Header={Header[3]}
          Content={Content[3]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GamePlayer">
        <GameIntroElement
          Box={Box[4]}
          Header={Header[4]}
          Content={Content[4]}
        />
      </div>
    </div>
  );
};

export default GameContent;
