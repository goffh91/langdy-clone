import React from "react";
import { useNavigate } from "react-router-dom";

import { Path } from "../../utils/routes";
import { lessonStorage } from "../../utils/storage";
import { ContentItem, IndexBadge } from "./styled";
import { Lesson } from "./types";

type Props = {
  lesson: Lesson;
  close: () => void;
};

const ContentLesson = (props: Props) => {
  const { lesson, close } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    if (lessonStorage.has("selectedLessons")) {
      const selectedLessons = lessonStorage.get("selectedLessons");
      const alreadyExists = selectedLessons.find(
        (selectedLesson) => selectedLesson.id === lesson.id
      );
      if (!alreadyExists) {
        lessonStorage.set("selectedLessons", [...selectedLessons, lesson]);
      }
    } else {
      lessonStorage.set("selectedLessons", [lesson]);
    }
    close();
    navigate(Path.SELECTED_LESSON);
  };
  return (
    <ContentItem onClick={handleClick}>
      <IndexBadge index={Number(lesson.id)} />
      <p>{lesson.title}</p>
    </ContentItem>
  );
};

export default ContentLesson;
