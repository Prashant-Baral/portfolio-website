import { Award, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

type Certificate = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    verifyLink?: string;
};

const certificates: Certificate[] = [
    {
        id: 1,
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "Oct 2025",
        image: "/assets/certificates/nptel_cloud.jpg",
    },
    {
        id: 2,
        title: "FastAPI - The Complete Course 2026 (Beginner + Advanced)",
        issuer: "Udemy",
        date: "Nov 2025",
        image: "/assets/certificates/fastapi.jpg",
        verifyLink: "https://www.udemy.com/certificate/UC-47a8e984-053d-4af1-b646-31407294171d/",
    },
    {
        id: 3,
        title: "Full Stack with AI Agents",
        issuer: "Angaar+3 2025 (W3grads)",
        date: "Jul 2025",
        image: "/assets/certificates/summer_training.jpg",
    },
    {
        id: 4,
        title: "Packet Switching Networks and Algorithms",
        issuer: "University of Colorado System (Coursera)",
        date: "Oct 2024",
        image: "/assets/certificates/Coursera AY3AT4TWPREX.jpg",
        verifyLink: "https://coursera.org/verify/AY3AT4TWPREX",
    },
    {
        id: 5,
        title: "Peer-to-Peer Protocols and Local Area Networks",
        issuer: "University of Colorado System (Coursera)",
        date: "Oct 2024",
        image: "/assets/certificates/Coursera JQ7RROWZ29KF.jpg",
        verifyLink: "https://coursera.org/verify/JQ7RROWZ29KF",
    },
    {
        id: 6,
        title: "Digital Systems: From Logic Gates to Processors",
        issuer: "Universitat Autònoma de Barcelona (Coursera)",
        date: "Oct 2024",
        image: "/assets/certificates/Coursera EQO54M75QKY0.jpg",
        verifyLink: "https://coursera.org/verify/EQO54M75QKY0",
    },
    {
        id: 7,
        title: "Introduction to Hardware and Operating Systems",
        issuer: "IBM (Coursera)",
        date: "Sep 2024",
        image: "/assets/certificates/Coursera CP3VGU4VH70Z-1.png",
        verifyLink: "https://coursera.org/verify/CP3VGU4VH70Z",
    },
    {
        id: 8,
        title: "Fundamentals of Network Communication",
        issuer: "University of Colorado System (Coursera)",
        date: "Sep 2024",
        image: "/assets/certificates/Coursera 42RYEK72R5JH-1.png",
        verifyLink: "https://coursera.org/verify/42RYEK72R5JH",
    },
    {
        id: 9,
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google (Coursera)",
        date: "Sep 2024",
        image: "/assets/certificates/Coursera DS87NRHCWK1V-1.png",
        verifyLink: "https://coursera.org/verify/DS87NRHCWK1V",
    },
    {
        id: 10,
        title: "Unrevealing Basic Python towards ML/AI",
        issuer: "CSE Pathshala",
        date: "Mar 2024",
        image: "/assets/certificates/CP-20240203-PY439.png",
    },
];

export function Certifications() {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    return (
        <main className="flex-1 overflow-auto">
            <div className="max-w-[1000px] mx-auto px-6 py-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl mb-2">Certifications</h1>
                    <p className="text-gray-600 text-sm">
                        Professional certificates and courses completed
                    </p>
                </div>

                {/* Certificates Grid with Image Previews */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => setSelectedCertificate(cert)}
                            className="group cursor-pointer border border-gray-200 rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Certificate Image Preview */}
                            <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Certificate';
                                    }}
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View Certificate
                                    </span>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-4">
                                <h3 className="text-base font-bold mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-xs text-gray-600 mb-2">
                                    {cert.issuer}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-mono">
                                        {cert.date}
                                    </span>
                                    {cert.verifyLink && (
                                        <a
                                            href={cert.verifyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-purple-600 hover:text-purple-700 transition-colors"
                                            title="Verify Certificate"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal - Compact Design */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 backdrop-blur-[4px] flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full relative shadow-2xl border border-gray-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Mac-style Close Button */}
                        <button
                            onClick={() => setSelectedCertificate(null)}
                            className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-all z-10 shadow-md flex items-center justify-center"
                        >
                            <X className="w-2 h-2 text-white" strokeWidth={3} />
                        </button>

                        {/* Certificate content */}
                        <div className="p-6">
                            <div className="mb-4 pl-6">
                                <h2 className="text-xl font-bold mb-1">{selectedCertificate.title}</h2>
                                <p className="text-sm text-gray-600">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
                            </div>

                            {/* Certificate Image */}
                            <img
                                src={selectedCertificate.image}
                                alt={selectedCertificate.title}
                                className="w-full h-auto rounded-xl border border-gray-200"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Certificate+Image';
                                }}
                            />

                            {/* Verify Link */}
                            {selectedCertificate.verifyLink && (
                                <div className="mt-4 flex justify-center">
                                    <a
                                        href={selectedCertificate.verifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Verify Certificate
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}