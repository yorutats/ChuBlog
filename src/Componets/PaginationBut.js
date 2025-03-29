import React from "react";
import { Pagination } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import portfolioData from "../data/portfolioData.json"; // 匯入資料

export default function PaginationBut() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = parseInt(location.pathname.replace("/page", "")) || 1;

  const itemsPerPage = 1; // 每頁顯示筆數
  const totalItems = portfolioData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 自動計算頁數

  const handlePaginationChange = (page) => {
    navigate(`/page${page}`);
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
