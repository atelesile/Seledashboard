export default function DashBoardStats({ students }) {
    const pass = students.filter((s) => 50).length;
    const average = students.length
    ? students.reduce((sum, s) => sum + s.score, 0) / students.length: 0;
    const value = [

        ["Total students", students.length],
        ["Passed", passed],
        ["Failed", students.length - passed],
        ["Average score", average.toFixed(1)],
    ];
    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6"
        aria-label="Class statistics">

            {Values.map(([label, value]) => (
                <article key={label} className="bg-white rounded-xl p-4 shadow">
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                </article>
            ))}

        </section>
    )
}