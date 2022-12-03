import React from "react";
import MobileLayout from "../components/Layout";
import SelectedItem from "../components/Lesson/Selected/SelectedItem";
import { EmptyList, SelectedList } from "../components/Lesson/Selected/styled";
import { SelectedTitle } from "../components/Lesson/styled";
import { Lesson } from "../components/Lesson/types";
import { lessonStorage } from "../utils/storage";

const SelectedLesson = () => {
  const [lessons, setLessons] = React.useState<Lesson[]>([]);
  const removeLesson = (id: string | number) => {
    const removed = lessons.filter((lesson) => lesson.id !== id);
    lessonStorage.set("selectedLessons", removed);
    setLessons(removed);
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
    </MobileLayout>
  );
};

export default SelectedLesson;
