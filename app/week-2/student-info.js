import Link from "next/link";

const StudentInfo = () => {
    return (
        <div>
            <h1>Surendra Ghimire</h1>
            <p>
                <Link href="https://github.com/SurendraGhimire">
                    My GitHub Repository
                </Link>
            </p>
        </div>
    );
};

export default StudentInfo;