import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G06/img/DScene_3.png",
      "./Project/G06/img/DScene_4.png",
      "./Project/G06/img/DScene_5.png",
      "./Project/G06/img/DScene_6.png",
      "./Project/G06/img/DScene_7.png",
    ],
    [
      "./Project/G06/img/Design_1.png",
      "./Project/G06/img/Design_2.png",
      "./Project/G06/img/Design_3.png",
      "./Project/G06/img/Design_4.png",
      "./Project/G06/img/Design_5.png",
      "./Project/G06/img/Design_6.png",
    ],
    [
      "./Project/G06/img/DDesign_1.png",
      "./Project/G06/img/DDesign_2.png",
      "./Project/G06/img/DDesign_3.png",
      "./Project/G06/img/DDesign_4.png",
      "./Project/G06/img/DDesign_5.png",
      "./Project/G06/img/DDesign_6.png",
      "./Project/G06/img/DDesign_7.png",
      "./Project/G06/img/DDesign_8.png",
      "./Project/G06/img/DDesign_9.png",
      "./Project/G06/img/DDesign_10.png",
    ],
    ["./Project/G06/img/music.png"],
  ];
  return (
    <div className="GroupHome_GameDesign" id="GameDesign">
      <h1 className="GroupHome_Container_Text">遊戲美術設計</h1>
      <div className="GroupHome_GameIntro_Text" id="GameDesign">
        <GameImageElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameElement">
        <GameImageElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameParameter">
        <GameImageElement
          Box={Box[2]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameVocal">
        <GameImageElement
          Box={Box[3]}
          Header={Header[3]}
          Content={Content[3]}
        />
      </div>
    </div>
  );
};

export default GameDesign;
