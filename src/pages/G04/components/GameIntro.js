import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "這個遊戲是以三隻小豬的童話故事為參考，主角為豬豬(玩家)，豬大哥要一關關的去拯救豬小弟、豬小妹和小狗，並運用他們的能力，最後一起打敗大野狼，搶回家園，是冒險類的橫向捲軸跑跳遊戲。",
    "引用三隻小豬這個故事是因為我們每位組員都有兄弟姐妹，在童話故事三隻小豬中，大哥和二哥都一下就被打敗了，只靠豬小弟拯救全部人，但我們不希望由豬小 弟一人承擔家裡的一切，每個成員都有能幫上忙的地方，就像在家裡大家都要做家事 一樣，所以想了這個主題。我們認為可以將上課所學的蒐集金幣、上下左右移動、建造場地...等程式運用到這種跑跳的冒險遊戲中。",
    "這是一款橫軸冒險類的網頁遊戲，玩家的目標是需要控制豬豬這個角色解救狗狗朋友，利用鍵盤控制移動方向，沿途需要閃避陷阱及獲取寶物，才能順 利過關，玩家需自己判斷寶物位置跟陷阱，盡力爭取勝利。",
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
