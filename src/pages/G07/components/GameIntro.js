import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "炎炎夏日即將來臨！想要消暑冰塊絕對是夏天不可缺少的一樣東西。你是否想過冰塊是一個小小的生命，從水到結成冰塊再到融化就是冰塊的一生。當我們拿著一桶冰塊不小心落下幾顆冰塊的時候我們往往不會去將它撿起來。我們想給冰塊人性化，落下的冰塊也想要跟夥伴一起回到冰櫃！ ",
    "我們遊戲已冰塊融化有時間限制為主題，結合益智跑酷的遊戲玩法，來發想出一個簡單可愛的小遊戲。",
    "遊戲第一關為教學關卡，其餘兩關才是正式的關卡。玩家需幫助主角冰斗度過重重關卡蒐集到三片雪花逃出烤箱，抵達終點。",
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
