import React from "react";
import "./Who.scss";
import profile from "../assets/images/profile.jpg";
import icon from "../assets/images/who_icon.png";

function Who() {
  const copyEmail = () => {
    // email copy
    console.log("aa");
  };
  return (
    <div className="who flex align-center column">
      <div className="who_contents flex column notoMid">
        <div className="who_contents_icon">
          <img src={icon} alt="icon" importance="high" />
        </div>
        <div className="who_contents_box flex">
          <div className="who_contents_box_left">
            <div className="who_contents_box_left_name notoBold fs-32">
              <p>안녕하세요,</p>
              <p>프론드엔드 개발자를 꿈꾸는</p>
              <p>
                <span>이정민</span>입니다.
              </p>
            </div>
            <div className="who_contents_box_left_intro notoMid fs-16">
              <p>
                저는 <span>신입 개발자</span>입니다 :)
              </p>
              <p>
                사용자의 입장을 고려하는 개발자가 되고자, 평소 개발하며
                <span> 사용자의 입장에서 편한 서비스란 무엇인가</span>에 대해
                고민합니다.
              </p>
              <p>
                이외에도 새로운 경험과 도전을 즐겨
                <span> 프로젝트에 적극적으로 참여</span>하고 새로운 지식을
                <span> 배우는 것에 망설임이 없습니다.</span>
              </p>
              <p>
                대학에서 <span>디자인과 개발을 함께 공부</span>하였고, 그 이후
                다양한 콘텐츠 제작 경험을 쌓았습니다
              </p>
              <p>
                이에 <span>사용자 경험과 UI/UX에 큰 가치</span>를 두고 개발하고
                있습니다.
              </p>
            </div>
          </div>
          <div className="who_contents_box_right">
            <div className="who_contents_box_right_img">
              <img src={profile} alt="img" importance="high" />
            </div>
          </div>
        </div>
        <div className="who_contents_contracts flex column ">
          <p>
            💌
            <button type="button" onClick={copyEmail}>
              jmlee9707@naver.com
            </button>
          </p>
          <p>
            🔥
            <button
              type="button"
              onClick={() => {
                window.open(`https://github.com/jmlee9707`);
              }}
            >
              github
            </button>
          </p>
          <p>
            👩🏻‍💻
            <button
              type="button"
              onClick={() => {
                window.open(
                  `https://scratch-octopus-16f.notion.site/Jenny-Lee-6ac6164b3d7c4e218c4300e6ac258d18`
                );
              }}
            >
              Notion
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Who;
