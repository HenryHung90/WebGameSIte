import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "本作靈感取自「Limbo」的黑白畫風,營造抑鬱、陰森的感覺。該款遊戲採關卡通關設計,每一關皆有不同的地形以及佈局。而內容則採用類 「SuperMeat Boy」的遊戲內容。打造一款恐怖、灰階關卡制遊戲。",
    "由於組長在討論時提起他對於恐怖遊戲的熱愛,於是我們決議畫風使用「Limbo」的風格,使遊戲添加一股恐怖的氣氛。",
    "遊戲內容共有 5 個關卡關卡從簡單至困難,第三關通過後需要付費解鎖,在每個關卡中玩家需要去蒐集屍塊,五個關卡共五個屍塊收集完畢便能成功過關,過關後將獲得韓國女星素顏照一張。",
  ];

  return (
    <div className="GroupHome_GameIntro">
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
