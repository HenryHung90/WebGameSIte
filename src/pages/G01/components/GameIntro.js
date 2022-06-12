import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "我們以塔防為主題，角色要守住被怪物攻擊的塔，不然會輸掉!!",
    "當初想要做一個開放環境的生存遊戲，但是有點難達成，後來看 到有一款遊戲叫做 vampire survivors，最後以那遊戲最為構思基 底進而想出這個遊戲。",
    "我們此項遊戲是以城堡攻防戰來進行遊戲，玩家要應對隨機從四面八方生出來的怪物，他們會不規則的隨機跑走，然後碰到中心的塔會進行攻擊，玩家要避免主塔被摧毀，所以要想盡辦法消滅怪物。",
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
