import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Path } from "./utils/routes";
import LessonPage from "./pages/Lesson";
import SelectedLesson from "./pages/SelectedLesson";

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.ROOT} element={<LessonPage />} />
        <Route path={Path.LESSON} element={<LessonPage />} />
        <Route path={Path.SELECTED_LESSON} element={<SelectedLesson />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
