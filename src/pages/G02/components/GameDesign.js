import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G02/img/DScene_2.png",
      "./Project/G02/img/DScene_3.png",
      "./Project/G02/img/DScene_4.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["主角真希", "主角", ""],
      ["嚮導美食小精靈", "提示主角，說明遊戲", ""],
      ["黴菌士兵1", "阻擋主角前進", ""],
      ["黴菌士兵2", "阻擋主角前進", ""],
      ["黴菌士兵3", "阻擋主角前進", ""],
      ["樹枝", "隨機掉落讓主角死掉", ""],
      ["食人花", "阻擋主角前進", ""],
    ],
    [
      ["角色移動", "每次160", "使用鍵盤左右移動"],
      ["角色跳躍", "向上最大-160", "使用上鍵盤會跳上去，放開會停止"],
      ["怪物1", "上下移動，角色碰到直接死", "角色走到越後面速度越快"],
      ["怪物2跟3", "左右自動移動，角色碰到直接死", "角色走到越後面速度越快"],
      ["樹枝", "random 掉下來", "隨機掉下來"],
      ["食人花", "角色碰到直接死", ""],
    ],
    [
      ["背景音樂", "", ".mp3", "background-music"],
      ["吸入異世界", "", ".mp3", "start-screen-2"],
      ["第一關開始音效", "", ".mp3", "start-level-1"],
      ["跳躍", "", ".mp3", "jump"],
      ["人物腳步聲", "", ".mp3", "run"],
      ["死亡", "", ".mp3", "get-hit"],
      ["得到星星", "", ".mp3", "get-key"],
    ],
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
        <GameTableElement
          Box={Box[1]}
          Header={Header[1]}
          TableHeader={TableHeader[0]}
          TableContainer={TableContainer[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameParameter">
        <GameTableElement
          Box={Box[2]}
          Header={Header[2]}
          TableHeader={TableHeader[1]}
          TableContainer={TableContainer[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameVocal">
        <GameTableElement
          Box={Box[3]}
          Header={Header[3]}
          TableHeader={TableHeader[2]}
          TableContainer={TableContainer[2]}
        />
      </div>
    </div>
  );
};

export default GameDesign;
