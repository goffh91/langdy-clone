import React from "react";
import { CheckCircleOutlined, CloseOutlined } from "@ant-design/icons";
import { IndexBadge } from "../styled";
import { Lesson } from "../types";
import {
  BodySection,
  HeadSection,
  RemoveButton,
  SelectedLesson,
} from "./styled";

type Props = {
  index: number;
  lesson: Lesson;
  removeLesson: (id: string | number) => void;
};

const SelectedItem = (props: Props) => {
  const { lesson, index, removeLesson } = props;
  const handleClickRemoveButton = () => {
    removeLesson(lesson.id);
  };
  return (
    <SelectedLesson>
      <HeadSection>
        <CheckCircleOutlined />
        강의 {index}
        <RemoveButton
          type="link"
          icon={<CloseOutlined />}
          onClick={handleClickRemoveButton}
        />
      </HeadSection>
      <BodySection>
        <IndexBadge index={Number(lesson.id)} />
        <p>{lesson.title}</p>
      </BodySection>
    </SelectedLesson>
  );
};

export default SelectedItem;
