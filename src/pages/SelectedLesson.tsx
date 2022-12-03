import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../components/Layout";
import SelectedItem from "../components/Lesson/Selected/SelectedItem";
import { EmptyList, SelectedList } from "../components/Lesson/Selected/styled";
import { BottomArea, SelectedTitle } from "../components/Lesson/styled";
import { Lesson } from "../components/Lesson/types";
import { lessonStorage } from "../utils/storage";
import { Path } from "../utils/routes";

const SelectedLesson = () => {
  const navigate = useNavigate();
  const [lessons, setLessons] = React.useState<Lesson[]>([]);
  const removeLesson = (id: string | number) => {
    const removed = lessons.filter((lesson) => lesson.id !== id);
    lessonStorage.set("selectedLessons", removed);
    setLessons(removed);
  };
  const goToLesson = () => {
    navigate(Path.LESSON);
  };
  React.useEffect(() => {
    const selectedLessons = lessonStorage.get("selectedLessons");
    setLessons(selectedLessons);
  }, []);
  return (
    <MobileLayout>
      <SelectedTitle>선택한 강의 목록</SelectedTitle>
      {lessons && lessons.length > 0 ? (
        <SelectedList>
          {lessons.map((lesson, idx) => (
            <SelectedItem
              key={idx}
              index={idx + 1}
              lesson={lesson}
              removeLesson={removeLesson}
            />
          ))}
        </SelectedList>
      ) : (
        <EmptyList>선택된 강의가 없습니다.</EmptyList>
      )}
      <BottomArea>
        <Button type="primary" onClick={goToLesson}>
          계속 신청하기
        </Button>
        <Button type="primary">신청 완료하기</Button>
      </BottomArea>
    </MobileLayout>
  );
};

export default SelectedLesson;
