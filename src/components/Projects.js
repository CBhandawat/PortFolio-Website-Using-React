// Projects.js
export default function Projects() {
    return (
        <section id="projects"
            className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">

                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
                            "https://github.com/CBhandawat/Chat-With-Documents">
                            1. Chat With Documents Using LangChain & OpenAI
                        </a>
                    </h2>
                    <p className="text-center">
                        As the name suggests Chat With Document enables you to chat with your personal documents(PDF, TXT, DOCX) using Large Language Models like GPT.
                        While OpenAI has recently launched a fine-tuning API for GPT models, it doesn't enable the base pretrained models to learn new data, and the responses can be prone to factual hallucinations.
                        So we have used the approach to use model inputs with embedded-based search.
                    </p>

                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
                            "https://github.com/CBhandawat/End-to-End-LandTransactionTax-Analysis-Pinecone-Langchain-WebScraping">
                            2. End To End Land Transaction Tax Analysis
                        </a>
                    </h2>
                    <p className="text-center">
                        This is a sophisticated system designed to provide users with detailed insights and answers regarding land transaction taxes in Wales.
                        By leveraging advanced technologies such as GPT-3.5-turbo, OpenAI Embeddings, Pinecone's vector database, and Langchain's language processing capabilities,
                        this project enables users to interactively ask questions and receive precise information based on data scraped from relevant websites.
                    </p>

                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
                            "https://github.com/CBhandawat/Resume-Extraction-Using-Python-and-Gen-AI">
                            3. Resume Extraction Using Python and Gen AI
                        </a>
                    </h2>
                    <p className="text-center">
                        As the name suggests Resume Extraction enables you to extract information in JSON format
                        from your resume(for extensions like: .pdf, .txt, .docx) using Large Language Model GPT(gpt-4o-mini).
                        It also handle cases where specific sections (e.g., Certifications) might be missing
                        and implement fallback mechanisms if the AI model fails to extract certain details.
                    </p>

                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
                            "https://github.com/CBhandawat/Course-Creation-Copilot-Using-Gemini-and-Sarvam-API">
                            4. Course Creation Copilot Using Gemini & Sarvam API
                        </a>
                    </h2>
                    <p className="text-center">
                        The Course Creation Copilot is a Streamlit-based web app that helps instructors generate course modules,
                        scripts, and videos with voiceovers. It integrates Gemini for module generation,
                        Sarvam for voiceovers, and MoviePy for video creation, optimizing the course design process
                        and reducing development time.
                    </p>

                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
                            "https://github.com/CBhandawat/Samyatra">
                            5. Samyatra
                        </a>
                    </h2>
                    <p className="text-center">
                        Samyatra is an android based Car Pooling application.
                        This application makes user's safety its first priority as it has licence
                        and aadhar number verification during registration procedure and also Phone OTP Verification.
                        Also for the safety of the user during journey, in case of any misconduct,
                        the user can share his location their near and dear ones as well as call the police on a
                        single button click.
                    </p>
                </div>
            </div>

        </section>
    );
}