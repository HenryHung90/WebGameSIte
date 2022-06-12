import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["黃薰儀", "方羿捷", "尤秉睿", "潘靖儒", "林意軒", "洪珮珊"];
  const Content = [
    "首頁畫面設計、第一關場景圖設計、第二關場景圖設計、第三關場景 圖設計、第一關物件設計、結局畫面與程式設計",
    "第二關物件設計、遊戲音樂程式設計、企劃書封面與元素圖",
    "第三關物件設計、三關提示按鈕圖示與程式設計，遊戲影片介紹",
    "跑馬燈程式設計、第三關物件程式設計、主要程式設計",
    "物件更換程式設計、足跡圖程式設計、第二關物件程式設計",
    "書本按鈕圖示與程式設計、下一關及遊戲說明按鈕程式碼、第一關物件程式設計",
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
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[5]}
          Content={Content[5]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
