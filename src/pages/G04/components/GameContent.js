import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "三隻小豬的家園被大野狼佔據了，所以豬豬決定與他的家人及狗狗朋友一起 拯救自己的領地，必須要通過四個關卡拿到道具及召集自己的家人朋友們，才能到大野狼的老巢-也就是豬豬的家，與大野狼展開正面對決。",
    "玩家可以藉由開頭的介紹得知豬豬的任務，首先第一關需救出好朋友狗狗，過程中會碰到許多障礙物，玩家要逐一跳過破除障礙並且蒐集到三樣寶物才能成功救出狗狗。",
    "豬豬要去拯救自己的家園，但單槍匹馬是不夠的，所以豬豬的任務就是要依序解救狗狗朋友跟他的家人們，但是要怎樣才能夠拯救到這些動物們呢?每個關卡都各自不同的任務，像是有的是要吃到一定數量的寶物，有的則是要躲避一些危險的機關。",
    "為奪回家園，需救出同伴、將狼群趕出。一路上蒐集寶物，救出夥伴們一同並肩作戰搶回屬於自己的家園。",
    "以橫向卷軸為主，玩家可以用 ←、 → 控制角色左右移動方向，以↑ 控制跳躍，遇到障礙物可以點上鍵彈跳，左鍵及右鍵則是幫助角色移動。",
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
