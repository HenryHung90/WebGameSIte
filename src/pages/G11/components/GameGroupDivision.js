import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["李如喬", "李曉柔", "蕭鈺騰", "高琮凱", "方國軒"];
  const Content = [
    "第一關場景跟物件、普通馬、普通馬嘲諷跳舞、血腥小馬、心智圖、遊戲腳本設計、遊戲關卡設計(標上尺寸)、物件參數、物件元素、音效、遊戲展示圖、場景(截圖)、故事構想、畫面呈現構想",
    "第二關場景跟物件、彩虹小馬、按鈕、遊戲封面、海報、遊戲元素圖、遊戲流程設計、故事構想、畫面呈現構想",
    "第三關場景跟物件、農場主人、錄影片、故事構想、畫面呈現構想",
    "時程規劃、程式設計、故事構想、畫面呈現構想",
    "時程規劃、程式設計、故事構想、畫面呈現構想",
  ];

  return (
    <div className="GroupHome_GroupDivision" id="GroupDivision">
      <h1 className="GroupHome_Container_Text">小組分工</h1>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[3]}
          Content={Content[3]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[4]}
          Content={Content[4]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
