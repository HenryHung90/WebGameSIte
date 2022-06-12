import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "阿 JJ 確診之後居然不乖乖待在屏東的家隔離，先去了租屋住拿東西、然後又去了星巴巴找男朋友郝騰，除了遇到威爾史密斯揍人，萬萬沒想到交往兩年多的郝騰得知他確診還不待在家隔離，生氣地跟他提分手。阿 JJ 難過的去海邊吹風散心，遇到大洋遊俠與海超人在跟海綿寶寶買漢堡、阿忠部長穿比基尼跟熱褲刑警來抓他回家，阿 JJ 這才乖乖回家隔離。",
    "玩家利用滑鼠及鍵盤移動角色，每關都一定要找到所有物品才可以進入下一關。",
    "找到遊戲中，標示確診者在去過的地方、其接觸過的東西及過程中掉落的物品，將其蒐集起來消毒，並逮到最後在海邊看夕陽的阿 JJ，讓他回家乖乖隔離。",
    "找到正確物品後，原本黑白的物品會轉變成彩色或是有動態效果(有色圖*3 張，左中右)，並且在各關卡結束後，會藉由確診者的足跡來串連成各個關卡地圖。",
    "以 ↑、 ↓、 ←、 → 控制畫布上下左右移動方向，滑鼠滾輪控制放大縮小，滑 鼠點擊找尋正確物品。",
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
