// About.js
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-emerald-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src=
                    "./images/IMG-20221002-WA0046.jpg"
                    alt="About"
                    className="w-full h-full bg-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <div className="text-center">
                    <p>
                        I’m Chetanyaa Bhandawat, a passionate software developer with expertise in Java, Python, and C++.
                    </p>
                    <p>
                        I have experience working across frontend, backend, and full-stack projects.
                        I've developed applications using Angular, Spring Boot, and Flask.
                        My projects include building chatbots with GPT models, analyzing tax-related data, and detecting fake news using machine learning.
                        With a Master’s in Data Science from Cardiff University, I’ve sharpened my skills in NLP, machine learning, and data analysis.
                        I love solving complex problems and improving systems and I’m always excited to learn and grow in the tech world.
                    </p>
                </div>
            </div>
        </section>
    );
}
