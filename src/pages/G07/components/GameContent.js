import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "在一間廚房裡，廚師從冰櫃中鏟了一大匙的冰塊，但有一顆名叫冰斗的冰塊竟然滑了出來，他滑到了烤箱旁邊的桌上，從小生存在冰櫃世界裡的冰斗沒有看過外面的世界，他興奮的左跳又跳，但他發現他走過的地方都留下了一攤攤的水而他自己本身也越來越瘦，這是他在冰櫃世界裡從來沒見過的景象，意識到如果不回到冰櫃世界就會消失的他，決定要用最快的時間回到冰櫃世界~~但是在這條路上等著他的是一層層的考驗~~",
    "1.	玩家吃完3片雪花，並在血量扣完前抵達終點即獲勝。2.	場景機關介紹=> 冰塊：左右移動（鍵盤：方向鍵左右）跳 （鍵盤：方向鍵上）烤箱燈條：扣除玩家生命值，冰塊模型改變 -- 傳送門：使玩家能藉由傳送門更快速的移動 -- 星星：第一跟第二關星星位置不會改變，第三關星星位置隨機跳動 -- 火焰噴射柱：玩家會因為碰到後受傷",
    "每一關都會有不同的場景配置。第一關視為教學關,會先帶玩家瞭解冰塊扣血規則並展示所有遊戲內的機關是如何作用的。之後每過一關難度都會有所提升。玩家需幫助主角度過重重關卡，逃離烤箱。",
    "這是一個畫風輕鬆且結構簡單的小遊戲，是一個會被封面吸引進來的小品遊戲。遊戲過程雖然簡單但會被可愛的主題故事吸引，會喜歡上我們創造的角色。以美術和主題特殊性來讓玩家留下深刻的印象。",
    "以 ↑、←、 → 控制主角移動方向",
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
