import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function VitalESGPlatform() {
    return (
        <PortfolioLayout>
            {(project) => (
                <>
                    <div style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        textAlign: "justify", // 核心：兩端對齊
                        textJustify: "inter-ideograph", // 針對中文字優化對齊
                        lineHeight: "1.8"
                    }}>
                        <h4 className="introduction">
                            Vital ESG 企業永續雲端平台 - 全端模組開發與架構整合
                        </h4>
                        <p>
                            在叡揚資訊 (GSS) 擔任軟體工程實習生期間，我參與了「Vital ESG」雲端平台的開發。這是一套協助企業落實 ESG（環境、社會、公司治理）指標管理與資料彙整的企業級系統。我負責全端功能的建置與優化，結合現代化前後端技術與多專案架構，協助提升系統的資料處理能力、整合性與使用者體驗。
                        </p>
                        <div style={{ margin: "25px 0", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "10px", borderLeft: "4px solid #1890ff" }}>

                            {/* 插入圖片 */}
                            <img
                                src={require("../../../images/portfolio/VitalESGPlatform/vital.png")}
                                alt="Vital 雲端生態系"
                                style={{ width: "90%", maxHeight: "350px", objectFit: "contain", marginBottom: "15px", borderRadius: "8px" }}
                            />

                            {/* 補充說明與超連結 */}
                            <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: "1.8", margin: 0 }}>
                                本專案隸屬於叡揚資訊的 <a href="https://www.gsscloud.com/tw/" target="_blank" rel="noopener noreferrer" style={{ color: "#1890ff", fontWeight: "bold", textDecoration: "none", borderBottom: "1px solid #1890ff" }}>Vital</a> 雲端服務。
                                Vital 涵蓋了客戶經營、基礎營運等多元企業系統，而我參與開發的 <strong>Vital ESG</strong> 則是其中專注於「ESG 永續指標管理」的核心服務。它不僅協助企業進行碳盤查，更涵蓋環境、社會與治理的全面數據追蹤，透過系統整合協同企業落實「數位」與「永續 (ESG)」的雙軸轉型。
                            </p>
                        </div>
                        <hr className="section-divider" />

                        <h4 className="introduction">技術架構與具體貢獻</h4>
                        <p>
                            專案採用前後端分離架構，我的貢獻涵蓋了從前端 UI 實作、核心 API 開發到資料庫管線建置的完整軟體開發生命週期：
                        </p>
                        <ul>
                            <li>
                                <strong>前端模組與頁面開發 (React + Kendo UI)：</strong>
                                與設計團隊密切協作，負責實作「計畫建立、指標管理、表單範本與佈告欄」等核心業務模組。不僅高還原 Figma 設計，更妥善處理了複雜的狀態管理與數據渲染，確保企業級應用的流暢性與 UI/UX 體驗。
                            </li>

                            <li>
                                <strong>系統多語系 (i18n) 與微服務架構：</strong>
                                運用 Aspire AppHost SDK 串接多專案解決方案 (Multi-project solutions)，優化微服務間的協作與依賴關係。同時參與系統的 i18n 作業，讓平台具備支援跨國企業的高擴充性，大幅降低多語系維護成本。
                            </li>
                            <li>
                                <strong>資料庫架構與組織管理 (SQL Server)：</strong>
                                針對龐大的 ESG 永續數據，設計高擴充性的資料表結構 (Schemas) 與預存程序 (Stored Procedures)。並實作企業「組織 / 群組 (Organizations/Groups)」層級對應與權限隔離，確保資料處理的精準度與系統安全性。
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </PortfolioLayout>
    );
}