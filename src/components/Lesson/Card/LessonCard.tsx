import React from "react";
import { LevelBadge } from "../styled";
import { Wrap, ThumbContainer, Thumbnail, InfoArea } from "./styled";

type Props = {
  level: number;
  title: string;
  desc: string;
  target: string;
  onClick: () => void;
};

const LessonCard = (props: Props) => {
  const { level, target, title, desc, onClick } = props;
  return (
    <Wrap onClick={onClick}>
      <ThumbContainer>
        <Thumbnail />
      </ThumbContainer>
      <InfoArea>
        <div>
          <LevelBadge level={level} />
          {title}
        </div>
        <p>{desc}</p>
        <p>{target}</p>
      </InfoArea>
    </Wrap>
  );
};

export default LessonCard;
