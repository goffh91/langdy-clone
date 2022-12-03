import React from "react";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import {
  ContentHeader,
  ContentList,
  ContentTitle,
  LevelBadge,
} from "../components/Lesson/styled";
import { Lesson } from "../components/Lesson/types";
import ContentLesson from "../components/Lesson/ContentLesson";

type Props = {
  lesson?: Lesson;
  close: () => void;
};

const LessonContent = (props: Props) => {
  const { lesson, close } = props;

  return (
    lesson && (
      <>
        <ContentHeader>
          <Button type="link" onClick={close} icon={<LeftOutlined />} />
          <ContentTitle>
            <LevelBadge level={lesson.level} />
            {lesson.title}
          </ContentTitle>
        </ContentHeader>
        {DATA.length > 0 && (
          <ContentList>
            {DATA.map((lesson, idx) => (
              <ContentLesson key={idx} lesson={lesson} close={close} />
            ))}
          </ContentList>
        )}
      </>
    )
  );
};

const DATA: Lesson[] = Array(15)
  .fill({})
  .map((_data, idx) => {
    return {
      id: idx + 1,
      title: String("A").repeat(idx + 1),
    };
  });

export default LessonContent;
