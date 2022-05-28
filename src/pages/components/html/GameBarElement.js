import Button from "@mui/material/Button";
import $ from "jquery";

const GameBarElement = () => {
  return (
    <div className="GameBar">
      <Button
        variant="contained"
        onClick={() => {
          $("html, body").animate(
            {
              scrollTop: $("#GameIntro").offset().top - 100,
            },
            { duration: 500, easing: "swing" }
          );
        }}
      >
        遊戲介紹
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          $("html, body").animate(
            {
              scrollTop: $("#GameContent").offset().top - 100,
            },
            { duration: 700, easing: "swing" }
          );
        }}
      >
        遊戲設計
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          $("html, body").animate(
            {
              scrollTop: $("#GameStructure").offset().top - 100,
            },
            { duration: 900, easing: "swing" }
          );
        }}
      >
        遊戲架構
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          $("html, body").animate(
            {
              scrollTop: $("#GameScene").offset().top - 100,
            },
            { duration: 1100, easing: "swing" }
          );
        }}
      >
        遊戲場景設計
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          $("html, body").animate(
            {
              scrollTop: $("#GameDesign").offset().top - 100,
            },
            { duration: 1300, easing: "swing" }
          );
        }}
      >
        遊戲美術設計
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          $("html, body").animate(
            {
              scrollTop: $("#TimingGantt").offset().top - 100,
            },
            { duration: 1500, easing: "swing" }
          );
        }}
      >
        時間規劃
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          $("html, body").animate(
            {
              scrollTop: $("#GroupDivision").offset().top - 100,
            },
            { duration: 1700, easing: "swing" }
          );
        }}
      >
        小組分工
      </Button>
    </div>
  );
};

export default GameBarElement;
