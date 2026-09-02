import { type CourseNoteGroup } from "../courseNotesData";

type NotesPageProps = {
  courseNoteGroups: CourseNoteGroup[];
};

export const NotesPage = ({ courseNoteGroups }: NotesPageProps) => (
  <main className="site-shell">
    <div className="notes-page-shell">
      <div className="notes-header-row">
        <p className="eyebrow">Course notes</p>
      </div>
      <h2 className="notes-title">Selected Coursework</h2>
      <div className="note-groups">
        {courseNoteGroups.map((group) => (
          <div key={group.label} className="note-group">
            <h3>{group.label}</h3>
            <div className="course-note-grid">
              {group.courses.map((course) => (
                <article key={course.name} className="course-note-card">
                  <h4>{course.name}</h4>
                  <div className="course-note-list">
                    {course.notes.map((note) => (
                      <a
                        key={note.name}
                        className="course-note-link"
                        href={note.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {note.name}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);
