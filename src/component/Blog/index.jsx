import { useState } from "react";
import React from "react";
import "./index.css"

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Getting Started with React",
            date: "2025-05-01",
            summary:
                "Learn the basics of React, including components, props, and state management.",
            image: "https://code.visualstudio.com/assets/docs/nodejs/reactjs/breakpoint.png", // letakkan gambar di public/images
            link: "#",
        },
        {
            id: 2,
            title: "Understanding JavaScript Closures",
            date: "2025-04-15",
            summary:
                "A deep dive into closures in JavaScript and how to use them effectively.",
            image: "https://miro.medium.com/v2/resize:fit:1050/1*FCaZ4gt5ie70g_dITtQ1OA.png",
            link: "#",
        },
        {
            id: 3,
            title: "CSS Grid vs Flexbox: When to Use What",
            date: "2025-03-20",
            summary:
                "Compare CSS Grid and Flexbox layouts and learn best practices for each.",
            image: "https://uipencil.com/wp-content/uploads/2023/02/post_feature_flexvsgrid.webp",
            link: "#",
        },
        {
            id: 4,
            date: "Januari 2025",
            title: "Mulai Belajar Docker dan Kubernetes",
            image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240919165750/Kubernetes-vs-Docker.webp',
            summary:
                "Memulai belajar teknologi containerisasi Docker dan orkestrasi Kubernetes untuk pengelolaan aplikasi yang lebih efisien.",
        },
        {
            id: 5,
            date: "Februari 2025",
            title: "Belajar Python dalam Konteks Machine Learning, EDA, dan Big Data",
            image: 'https://idbigdata.com/official/wp-content/uploads/2017/12/Belajar-Machine-Learning-2_loading_dan_eksplorasi.png',
            summary:
                "Mendalami penggunaan Python khususnya untuk analisis data eksplorasi (EDA), machine learning, dan pengolahan big data.",
        },
        {
            id: 6,
            date: "Maret 2025",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkds5VWh1W0onnzdoXJNuNs39Kj4pkxu_LZg&s',
            title: "Belajar Jenkins dan CI/CD",
            summary:
                "Memahami proses otomatisasi deployment menggunakan Jenkins dan praktik Continuous Integration & Continuous Deployment (CI/CD).",
        },
        {
            id: 7,
            date: "Maret 2025",
            title: "Membangun Aplikasi Web dengan Next.js",
            image:'https://miro.medium.com/v2/resize:fit:1400/1*XSBGbUBqm4SGgDfzZiGfrA.png',
            summary:
                "Mengembangkan aplikasi fullstack dengan framework React modern: Next.js, serta memahami server-side rendering.",
        },
        {
            id: 8,
            date: "April 2025",
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT43wUlSYosdATGO_EcUr5LUja7DFNHdgCSYA&s',
            title: "Menerapkan GraphQL dan REST API",
            summary:
                "Belajar cara kerja API modern menggunakan GraphQL dan perbandingannya dengan REST API dalam proyek nyata.",
        },
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = blogPosts.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    return (
        <section id="blog" className="blog-section">
            <div className="division"></div>
            <h2 className="section-title">My Blog</h2>
            <div className="blog-posts">
                {currentItems.map(({ id, title, date, summary, image, link }) => (
                    <article key={id} className="blog-post">
                        <img
                            src={image}
                            alt={title}
                            className="blog-image"
                            loading="lazy"
                        />
                        <div className="blog-content">
                            <h3 className="blog-title">
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {title}
                                </a>
                            </h3>
                            <time className="blog-date" dateTime={date}>
                                {new Date(date).toLocaleDateString()}
                            </time>
                            <p className="blog-summary">{summary}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div className="pagination-controls">
                <button onClick={handlePrev} disabled={currentPage === 1}>
                    Prev
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </section>
    );
};

export default BlogSection;