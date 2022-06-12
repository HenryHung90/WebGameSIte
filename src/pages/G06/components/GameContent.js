import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "主角是一顆成長中的草莓、需要攝取充足 的營養才能發育。為了健康茁壯的成長，踏上 了一個全新的冒險旅程。在旅途中，需要持續 不斷的「攝取足夠的營養(生物)」，才能夠保 持跳躍的動力。在冒險的同時，也需要不時的擔心同樣身為植物族的詭計。",
    "1) 草莓只能前進不能後退。 2) 路途會有許多陷阱，如尖刺、懸崖等。若草莓 碰觸到就會當場死亡。 3) 每次彈跳都會造成草莓新鮮度的耗損。需要透過“食用”路上的敵人才能恢復新鮮度。碰上碰到的動物為可食用的、植物則為阻擾草莓的同族敵人，若碰上則會造成新鮮度扣減。 4) 在空中跳躍時按下左鍵可以進入開嘴模式，此狀態直到落地前或進食才會恢復。若在開嘴模式狀態下接觸到地面，則會扣除較多新鮮度。 5) 遊樂場模式不計分、不會存進資料庫。",
    "玩家需要透過操控主角草莓避開障礙物，吸收路上的動物來盡自己一切的可能跳得更遠。",
    "利用草莓的跳躍能力進行移動，在每次的遊玩時刻不斷的突破自己的個人記録，成為真正的草莓大師。",
    "玩家透過鍵盤以及滑鼠操控草莓。按下空白鍵時，草莓會進行跳躍蓄力，放開空白鍵時草莓會跳躍。跳躍的距離會根據玩具按住空白鍵的時長而定。當玩家按下滑鼠左鍵時草莓會進入“開嘴模式”。",
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
