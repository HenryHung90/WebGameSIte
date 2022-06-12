import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "黴菌家族常常遭受清潔劑的攻擊而死亡，小黴菌為了家族挺身而出準備反擊清潔用品們，路途中會碰到不同的威脅，小黴菌必須躲避以及攻擊各種威脅，最後擊敗終極大 BOSS “去黴大師”，重新拾回黴菌家族的榮耀。",
    "1. 遇到泡泡時需要按 W /A /D 鍵來閃避他，否則碰到泡泡一次生命值會被減 1。 2. 在第一關集滿 20 隻小黴菌便會跳至第二關”大 boss”關卡，擊敗去霉大師。3. 最終關卡會有終極大 BOSS “去黴大師”出現，需要使用在前面關卡中集滿的小小黴菌才能將他擊敗。",
    "一開始會有 5 次生命值，路途中必須躲避泡泡，如果碰到她的畫生命值會減 1，一邊收集路上的小黴菌，並且利用收集到的小小黴菌來攻擊敵人。",
    "躲避泡泡，並且收集路上的小小黴菌，最後擊敗 “去黴大師”。",
    "利用 A / D 鍵左右移動、W 鍵向上跳躍、滑鼠左鍵攻擊。",
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
