import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["周庭豪", "劉肇紘", "陳聖勳", "張翔喻", "林俊廷", "姜少捷"];
  const Content = [
    "角色動作（動畫）、主頁製作、關卡規則、遊戲詳細內容程式碼、關卡二主要布置及主要程式碼、遊戲內部規則詳細程式、遊戲執行部分企畫書、錄製影片",
    "角色動作（動畫）、關卡規則、遊戲詳細內容程式碼、關卡一主要布置及主要程式碼、遊戲音效及程式、遊戲執行部分企畫書、錄製影片",
    "遊戲簡介部分企劃書",
    "遊戲圖案繪製、角色動作（動畫）、遊戲音效及程式、錄製影片",
    "角色動作（動畫）、關卡規則、遊戲詳細內容程式碼、關卡三主要布置及主要程式碼、遊戲結束(包含勝利或失敗)頁面設計及與外部連接部分、各關遊戲與主頁連結、遊戲執行部分企畫書、錄製影片",
    "遊戲簡介部分企劃書",
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
