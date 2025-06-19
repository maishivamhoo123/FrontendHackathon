import React, { useEffect, useState } from "react";
import "./seller.css";

const sellers = [
  {
    id: "S001",
    name: "Priya Sharma",
    comment: "Selling on this platform has boosted my business beyond expectations!"
  },
  {
    id: "S002",
    name: "Amit Verma",
    comment: "The support and visibility I get here is unmatched."
  },
  {
    id: "S003",
    name: "Sara Khan",
    comment: "User-friendly interface and prompt payments—love it!"
  },
  {
    id: "S004",
    name: "Rahul Mehta",
    comment: "A great place for sellers to grow and connect with customers."
  }
];

const SellerSection = () => {
  const [separated, setSeparated] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    // Separate the words after 0.5s
    const sepTimeout = setTimeout(() => setSeparated(true), 500);
    // Show comments after 1.5s
    const showTimeout = setTimeout(() => setShowComments(true), 1500);
    return () => {
      clearTimeout(sepTimeout);
      clearTimeout(showTimeout);
    };
  }, []);

  return (
    <section className="seller-section">
      <div className={`seller-headline${separated ? " separated" : ""}`}>
        <span className="word word-our">Our</span>
        <span className="word word-sellers">Sellers</span>
      </div>
      <div className={`seller-comments${showComments ? " show" : ""}`}>
        {sellers.map(seller => (
          <div className="seller-card" key={seller.id}>
            <div className="seller-comment">"{seller.comment}"</div>
            <div className="seller-meta">
              <span className="seller-name">{seller.name}</span>
              <span className="seller-id">ID: {seller.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellerSection;
