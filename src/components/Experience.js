// Projects.js
export default function Experience() {
    return (
        <section id="experience"
            className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                My Experience
            </h2>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">

                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        NLP Engineer Intern
                    </h2>
                    <h3 className="font-bold text-center">
                        Welsh Revenue Authority (Jun'23 - Sept'23)
                    </h3>
                    <p className="text-center">
                        Led a master's dissertation to automate tax guidance for the Welsh Revenue Authority using NLP.
                        Developed a Flask API for automated data retrieval, implemented web scraping for Land Transaction Tax data,
                        and utilized Pinecone for vector storage, enhancing speed and accuracy in tax system efficiency.
                    </p>

                    <h2 className="font-bold text-3xl text-center">
                        Application Development Analyst
                    </h2>
                    <h3 className="font-bold text-center">
                        Accenture (Aug'20 - Aug'22)
                    </h3>
                    <p className="text-center">
                        Achieved an early promotion within 15 months for outstanding performance. Led re-engineering of an insurance project, enhancing user experience.
                        Optimized code to reduce website load time from 10 to 3 seconds, improved legacy systems, and accelerated project delivery by three weeks using agile methodologies.
                    </p>

                </div>
            </div>

        </section>
    );
}