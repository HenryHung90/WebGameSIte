import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "此款遊戲將藉由確診者的足跡來串連成各個關卡地圖，找到確診者在經過的地方所掉落之物品和該地方會出現的東西，蒐集起來消毒，藉由此款遊戲訓練玩家的觀察力，在小小世界裡找到遊戲關卡中指定的關鍵物品，彷彿成為疾管署的監察人員。",
    "在討論遊戲的時候，<<WHERE'S WALLY?>>是唯一一款引起組內所有成員共鳴的遊戲，所以大家共同決定要設計這樣的遊戲，加上疫情時期，每日確診人數忽高忽低，COVID-19使全世界皆人心惶惶，想出門又害怕可怕的病毒找上門。同時，大家對於那些確診之後卻到處趴趴走的人，一定都氣得牙癢癢，因此我們想出這款遊戲，讓大家幫忙找出那些不守規定的確診者以及特殊物品。",
    "遊戲內容共有 3 個關卡從簡單至複雜，在每個關卡中玩家需要去尋找確診者 阿 JJ 遺失和接觸過的物品，蒐集完即可進入下一關，三關完成後結束。",
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
