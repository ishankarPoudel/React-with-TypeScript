
// Defining the Student type
type Student = {
  name: string;
  subjects: {
    subjectName: string;
    score: number;
  }[];
};

const ComplexArray = () => {
  // Array of students with subjects and scores
  const students: Student[] = [
    {
      name: "Shankar",
      subjects: [
        { subjectName: "Math", score: 85 },
        { subjectName: "English", score: 78 },
        { subjectName: "Science", score: 92 }
      ]
    },
    {
      name: "Sharma",
      subjects: [
        { subjectName: "Math", score: 90 },
        { subjectName: "English", score: 82 },
        { subjectName: "Science", score: 88 }
      ]
    },
    {
      name: "Poudel",
      subjects: [
        { subjectName: "Math", score: 70 },
        { subjectName: "English", score: 75 },
        { subjectName: "Science", score: 65 }
      ]
    }
  ];

  // Helper function to calculate average score for each student
  const calculateAverage = (subjects: { subjectName: string; score: number }[]): number => {
    const total = subjects.reduce((acc, curr) => acc + curr.score, 0);
    return total / subjects.length;
  };

  // Filter students who scored above 80 in every subject
  const studentsWithHighScores = students.filter((student) =>
    student.subjects.every((subject) => subject.score > 80)
  );

  return (
    <div>
      <h1>Student Grades</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>{student.name}</strong> - Average Score: {calculateAverage(student.subjects).toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Students Scoring Above 80 in Every Subject</h2>
      <ul>
        {studentsWithHighScores.length > 0 ? (
          studentsWithHighScores.map((student, index) => (
            <li key={index}>{student.name}</li>
          ))
        ) : (
          <li>No students scored above 80 in every subject.</li>
        )}
      </ul>
    </div>
  );
};

export default ComplexArray;
