import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "一隻小馬尋找自由的旅程。",
    '一直以來，馬都被當成工具的角色，無論是遊戲中或是現實生活中都是，再加上我們討論的過程中偶然提到彩虹小馬，因此決定讓這個"常年工具人"成為主角。',
    '使用方向鍵以及空白鍵來進行遊戲。目標是收集到七彩寶石，變身成"彩虹小馬"以逃脫農場主人的掌控，獲得自由。但是路途中可能也會收集到一種奇怪的東西?......(隱藏結局)',
  ];

  return (
    <div className="GroupHome_GameIntro" id="GameIntro">
      <h1 className="GroupHome_Container_Text">遊戲介紹</h1>
      <div className="GroupHome_GameIntro_Text" id="GameTheme">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameMotivation">
        <GameIntroElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameIntro">
        <GameIntroElement
          Box={Box[2]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
    </div>
  );
};

export default GameIntro;
