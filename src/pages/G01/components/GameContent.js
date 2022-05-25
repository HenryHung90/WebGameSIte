import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "主角 Uniblo 有天夢到自己終於存了一筆錢可以跟朋友去韓國參加偶像的見面會，沒想到那班飛機失事了幸運的是他活下來，但也很不幸，他掉到了一個島嶼，島嶼上居住著一群食人族，而在他探索這個島嶼的過程中，他發現了與自己同行的朋友好像也在這個島嶼上，但當他找到一點關於朋友的線索時，他的朋友已經被食人族分屍了，食人族有個習俗，吃人之前先將人分屍放在島上的各處，這樣被分屍的人，所以Uniblo決定要將朋友的骨骸全部找回好好安葬且在此期間小心翼翼的不被食人族發現。",
    "玩家需要移動角色，並且避開各種機關及敵人，由出生點朝過關點移動，一旦被機關處死後將會將角色重設到出生點。",
    "每一關都會有不同的場景配置。第一關視為教學關，會先帶玩家瞭解操作規則並展示所有遊戲內的機關是如何作用的。之後每過一關難度都會有所提升。",
    "由於主角被困在這座島嶼中，且朋友被食人族慘忍的分屍，但主角的朋友心心念念著韓國的偶像，因此主角決定找回朋友所有的遺體並帶著他離開這裡。",
    "以 ←、 → 控制角色左右移動方向, ↑ 跳躍、互動， ↓ 蹲下、向下互動。",
  ];

  return (
    <div className="GroupHome_GameContent">
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
