import React from "react";
import MobileLayout from "../components/Layout";
import LessonCard from "../components/Lesson/Card/LessonCard";
import LeftFullModal from "../components/Modal/LeftFullModal";
import { Lesson } from "../components/Lesson/types";
import LessonContent from "./LessonContent";
import Menu from "../components/Header/Menu";
import { LessonTopBanner } from "../components/Lesson/styled";

const LessonPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedLesson, setSelectedLesson] = React.useState<Lesson>(null);

  const createClickHandler = (lesson: Lesson) => () => {
    setSelectedLesson(lesson);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedLesson(null);
    setShowModal(false);
  };

  return (
    <MobileLayout>
      <Menu />
      <LessonTopBanner />
      {DATA.map((lesson) => (
        <LessonCard
          key={lesson.id}
          level={lesson.level}
          title={lesson.title}
          desc={lesson.desc}
          target={lesson.target}
          onClick={createClickHandler(lesson)}
        />
      ))}
      <LeftFullModal show={showModal}>
        <LessonContent lesson={selectedLesson} close={closeModal} />
      </LeftFullModal>
    </MobileLayout>
  );
};

const DATA: Lesson[] = [
  {
    id: "1",
    level: 3,
    title: "디테일로 익히는 기초",
    desc: "병원 '예약'은 reservation이 아니라고?",
    target: "아주 간단한 대화만 가능한 분",
  },
  {
    id: "2",
    level: 4,
    title: "디테일로 살리는 회화",
    desc: "hard to me와 hard for me의 차이는?",
    target: "일상 생활 속 대화가 가능한 분",
  },
  {
    id: "3",
    level: 5,
    title: "디테일로 완성하는 회화",
    desc: "around로 '반대로'를 말할 수 있다고?",
    target: "익숙한 주제의 대화가 가능한 분",
  },
];

export default LessonPage;
