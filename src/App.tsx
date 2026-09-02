import "./App.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import faviconSvg from "../public/favicon.svg";
import { ArrowIcon } from "./components/icons";
import { EcoPage } from "./components/EcoPage";
import { HomePage } from "./components/HomePage";
import { NotesPage } from "./components/NotesPage";
import {
  fallbackCourseNoteGroups,
  type CourseNoteGroup,
} from "./courseNotesData";

const App = () => {
  const location = useLocation();
  const [courseNoteGroups, setCourseNoteGroups] = useState<CourseNoteGroup[]>(
    fallbackCourseNoteGroups,
  );
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const response = await fetch("/course-notes.json");
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { groups?: CourseNoteGroup[] };
        if (Array.isArray(data.groups) && data.groups.length > 0) {
          setCourseNoteGroups(data.groups);
        }
      } catch (error) {
        console.warn("Unable to load course notes JSON.", error);
      }
    };

    void loadNotes();
  }, []);

  return (
    <div className="app-container">
      <Link
        to="/"
        className="home-button"
        aria-label={isHomePage ? "Home" : "Back to home"}
      >
        {isHomePage ? (
          <img src={faviconSvg} alt="Home" />
        ) : (
          <ArrowIcon className="back-arrow-icon" />
        )}
      </Link>
      <Routes>
        <Route
          path="/"
          element={<HomePage courseNoteGroups={courseNoteGroups} />}
        />
        <Route
          path="/notes"
          element={<NotesPage courseNoteGroups={courseNoteGroups} />}
        />
        <Route path="/eco" element={<EcoPage />} />
      </Routes>
    </div>
  );
};

export default App;
