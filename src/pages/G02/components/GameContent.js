import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "遊戲主角真希去夜市玩耍，途中遇到一個神祕的攤販，好奇之下真希走了過去，老闆給真希一晚看起來很好吃的食物，真希吃下去後，瞬間感覺到天旋地轉，再次睜開眼的時候就發現自己來到了異世界。異世界裡的小精靈告訴真希，如果想要回去，就必須突破重重關卡得到星星，才能夠回到原本的世界。",
    "玩家使用左右上鍵操控主角通過每關任務。",
    "第一關 — 真希按照食物小精靈的指示，首先要從美食森林進入美食城鎮中，在路途中遇到黴菌大軍，真希要躲開牠們，並盡快走出森林。過關後即可得到一顆星星接著前進下一關。\t第二關(能力不足，未能及時完成)— 真希前進美食城堡。路途中遇到了許多 被黴菌大軍脅持的美食小精靈百姓，真希要幫忙救出這些美食王國的百姓並躲過黴菌大軍抵達城堡。過關後可再得到一顆星星，並回到現實世界。",
    "集齊所有的「美食鑰匙的碎片」幫助主角真希回到原來的世界。",
    "玩家使用「左右鍵」操控真希「移動」，「上鍵」操控真希「跳躍」，「下鍵」操控真希「下蹲」。",
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
