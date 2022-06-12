import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "世界即將毀滅，人類僅存的希望就是這座光明之塔，為了不被怪物侵蝕破壞，讓人類的一絲希望被抹煞殆盡，因此勇者站出來與怪物決鬥進行對打。",
    "一個字，打!!!打的怪物落花流水，打贏了就贏啦，輸了塔就會被摧毀，所以要小心喔。",
    "此遊戲沒有任務問題，只要享受隨機打怪的樂趣就好。",
    "守住地圖上僅存的最後一座塔，將周圍的怪物都打光光，勝利就會是你的。",
    "電腦的前後左右移動角色，然後按下 z 是攻擊按鍵，就可以把怪 物打飛囉，總共有三關，怪物會越來越專精，因此要自己想辦法",
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
