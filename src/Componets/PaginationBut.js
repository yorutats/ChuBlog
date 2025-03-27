import React from "react";
import { Pagination, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PaginationBut() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = parseInt(location.pathname.replace("/page", ""));

  const handlePaginationChange = (page) => {
    navigate(`/page${page}`);
  };

  return (
    <div>
      <div className="parent-container">
        {" "}
        <Pagination
          defaultCurrent={currentPage}
          total={50}
          onChange={handlePaginationChange}
          style={{ colorBorder: "black" }}
        />
      </div>
    </div>
  );
}
