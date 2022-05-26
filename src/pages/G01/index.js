import "../components/css/GroupHome.css";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import GameIntro from "./components/GameIntro";
import GameContent from "./components/GameContent";
import GameDesign from "./components/GameDesign";
import GameStructure from "./components/GameStructure";
import GameScene from "./components/GameScene";
import GameTimingGantt from "./components/GameTimingGantt";
import GameGroupDivision from "./components/GameGroupDivision";
import HomeMenu from "../components/html/HomeMenu";

import $ from "jquery";
import { useEffect, useState } from "react";

const GroupOneHome = ({ User }) => {
  const [Scroll, setScroll] = useState("");
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, 300);
  }, []);

  $(window).scroll(function () {
    //為了保證相容性，這裡取兩個值，哪個有值取哪一個
    setScroll(document.documentElement.scrollTop || document.body.scrollTop);
    //scrollTop就是觸發滾輪事件時滾輪的高度
  });

  useEffect(() => {}, [Scroll]);
  function iframe() {
    return {
      __html: `<iframe id="Iframe" src="./Project/G02/index.html" frameborder="0" width="100%" height="100%"/>`,
    };
  }
  const PlayGame = (e) => {
    e.preventDefault();
    $(".GameContainer").fadeIn(500);
    $("html, body").animate({ scrollTop: 0 }, 100);
    $("#HomeMenu").animate({ opacity: 0, zIndex: -1000 }, 100);
    $("#Iframe").volume = 100;
  };
  const OutGame = (e) => {
    e.preventDefault();
    $(".GameContainer").fadeOut(500);
    $("#HomeMenu").animate({ opacity: 1, zIndex: 1000 }, 100);
    $("#Iframe").volume = 0;
  };
  const GoIntro = (e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 800 }, 1000);
  };

  return (
    <div id="HomeContainer">
      <div id="HomeMenu">
        <HomeMenu User={User} />
      </div>
      <div className="GameContainer">
        <Button
          id="GroupHome_PlayButton"
          onClick={OutGame}
          variant="contained"
          startIcon={<PlayArrowIcon />}
        >
          結束遊玩
        </Button>
        <div className="Gaming" dangerouslySetInnerHTML={iframe()} />
      </div>
      <div className="GroupHome">
        <div className="GroupHome_Main">
          <div className="GroupHome_MainText">
            <div className="GroupHome_Cover" />
            <h1 className="GroupHome_GroupNumber">Group. 01</h1>
            <h1 className="GroupHome_GroupName">叫我大總裁</h1>
            <p className="GroupHome_GroupMember">
              1082020 洪立恒 // 1082020 洪立恒 // 1082020 洪立恒
            </p>
            <Button
              id="GroupHome_PlayButton"
              onClick={PlayGame}
              variant="contained"
              startIcon={<PlayArrowIcon />}
            >
              開始遊玩
            </Button>
          </div>
          <div className="GroupHome_Image"></div>
        </div>
        <h3 className="GroupHome_GoIntro" onClick={GoIntro}>
          下滑看介紹
        </h3>
      </div>
      <div className="GroupHome_Container">
        <GameIntro />
        <GameContent />
        <GameStructure />
        <GameScene />
        <GameDesign />
        <GameTimingGantt />
        <GameGroupDivision />
      </div>
    </div>
  );
};

export default GroupOneHome;
