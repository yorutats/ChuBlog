import React from "react";
import { Pagination } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import portfolioData from "../data/portfolioData.json";

export default function PaginationBut() {
  const navigate = useNavigate();
  const location = useLocation();

  const slugMatch = location.pathname.match(/\/portfolio\/([^/]+)/);
  const currentSlug = slugMatch ? slugMatch[1] : "";

  // 找出目前是第幾筆
  const currentIndex = portfolioData.findIndex(
    (item) => item.slug === currentSlug
  );
  const currentPage = currentIndex !== -1 ? currentIndex + 1 : 1;

  const itemsPerPage = 1;
  const totalItems = portfolioData.length;

  const handlePaginationChange = (page) => {
    const targetProject = portfolioData[page - 1]; // page從1開始，index從0開始
    if (targetProject) {
      navigate(`/portfolio/${targetProject.slug}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="parent-container">
      <Pagination
        current={currentPage}
        total={totalItems}
        pageSize={itemsPerPage}
        onChange={handlePaginationChange}
      />
    </div>
  );
}
