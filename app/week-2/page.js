import StudentInfo from './student-info'; 

export default function Page() {
    return (
        <main>
            <h1>Shopping List</h1>
            <StudentInfo />  {/* Render the StudentInfo component here */}
        </main>
    );
}