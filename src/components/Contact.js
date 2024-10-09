// Contact.js
export default function Contact() {
    return (
        <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center my-10">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href="https://www.linkedin.com/in/chetanyaabhandawat/"
                >
                    LinkedIn:
                    <span className="font-bold">@chetanyaabhandawat</span>
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href="https://github.com/CBhandawat"
                >
                    GitHub:
                    <span className="font-bold">@CBhandawat</span>
                </a>
            </div>
            <div className="text-center my-10">
                <p className="text-lg mb-4">Having an Idea or a Project in Mind?</p>
                <a
                    href="mailto:chetanyaabhandawat@gmail.com"
                    className="bg-emerald-500 text-white font-bold py-2 px-4 rounded hover:bg-emerald-600 transition duration-300"
                >
                    Let's Discuss
                </a>
            </div>
        </section>
    );
}
