import React from "react";
import { Pagination } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import portfolioData from "../data/portfolioData.json";

export default function PaginationBut() {
  const navigate = useNavigate();
  const location = useLocation();

  const match = location.pathname.match(/\/portfolio\/(\d+)/);
  const currentPage = match ? parseInt(match[1]) : 1;

  const itemsPerPage = 1;
  const totalItems = portfolioData.length;

  const handlePaginationChange = (page) => {
    navigate(`/portfolio/${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
