import React, { useState } from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

// Swiper 核心組件與樣式
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Lightbox 組件與樣式
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ToppointLogisticsPlatform() {
    // Lightbox 狀態管理
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    // 用於存放 Lightbox 當下要顯示哪些圖片
    const [lightboxSlides, setLightboxSlides] = useState([]);

    // 定義頂部輪播圖清單
    const mainSlides = [
        { src: require("../../../images/portfolio/Toppoint/analysis.png"), title: "使用者分析" },
        { src: require("../../../images/portfolio/Toppoint/yards.png"), title: "物流場站 (Yards) 業務管理模組" },
        { src: require("../../../images/portfolio/Toppoint/login.png"), title: "多角色權限登入系統" }
    ];

    // 處理圖片放大開啟
    const handleOpenLightbox = (index, slides) => {
        setLightboxSlides(slides);
        setPhotoIndex(index);
        setOpen(true);
    };

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
                            Toppoint Inc. 物流平台 - 後端核心架構與模組開發
                        </h4>
                        <div>
                            擔任 Toppoint Inc. 的遠端後端開發實習生期間，我參與了企業級物流與車隊調度平台的後端 API 開發。該系統支撐了複雜的跨國物流業務，包含訂單全生命週期、派車調度、司機任務與車輛維修閉環。透過導入現代化的架構設計與微服務整合，大幅提升了系統的擴充性、即時性與資料一致性。
                        </div>

                        {/* --- 縮小後的頂部輪播區塊 --- */}
                        <div style={{
                            margin: "20px auto",
                            maxWidth: "800px", // 限制最大寬度，避免圖片撐得太開
                            padding: "15px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "10px",
                            border: "1px solid #eee"
                        }}>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={15}
                                slidesPerView={1}
                                navigation={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                style={{ paddingBottom: "35px", cursor: "zoom-in" }}
                            >
                                {mainSlides.map((slide, i) => (
                                    <SwiperSlide key={i} onClick={() => handleOpenLightbox(i, mainSlides)}>
                                        <div style={{ textAlign: "center" }}>
                                            <img
                                                src={slide.src}
                                                alt={slide.title}
                                                style={{
                                                    width: "auto",
                                                    maxWidth: "80%",
                                                    maxHeight: "300px", // 限制高度在 300px，保持精簡
                                                    borderRadius: "6px",
                                                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                                }}
                                            />
                                            <div style={{ fontSize: "0.85rem", color: "#666", marginTop: "8px" }}>{slide.title}</div    >
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div style={{ padding: "10px 0", textAlign: "center" }}>
                            <p style={{ fontSize: "0.95rem", color: "#555", fontStyle: "italic" }}>
                                本平台採用 <strong>.NET 8</strong> 生態系，並透過 <strong>RabbitMQ + SignalR</strong> 實現高效能異步通訊。
                            </p>
                        </div>

                        <hr className="section-divider" />

                        {/* --- 技術深度區塊 --- */}
                        <h4 className="introduction">技術深度與具體貢獻</h4>
                        <ul>
                            <li style={{ marginBottom: "25px" }}>
                                <strong>整潔架構與核心業務開發 (Clean Architecture)：</strong>
                                落實分層架構與 UseCase 模式，開發訂單與調度核心邏輯。
                            </li>

                            <li style={{ marginBottom: "25px" }}>
                                <strong>系統國際化與 API 標準化：</strong>
                                實作 <code>SuccessCode</code> 機制，全面支援多語系。
                                <div style={{ marginTop: "12px" }}>
                                    <img
                                        src={require("../../../images/portfolio/Toppoint/successcode.png")}
                                        alt="API SuccessCode"
                                        onClick={() => handleOpenLightbox(0, [{ src: require("../../../images/portfolio/Toppoint/successcode.png") }])}
                                        style={{ width: "100%", maxWidth: "500px", borderRadius: "8px", border: "1px solid #ddd", cursor: "zoom-in" }}
                                    />
                                </div>
                            </li>

                            <li style={{ marginBottom: "15px" }}>
                                <strong>核心維修模組開發與資料庫重構：</strong>
                                主導維修模組正規化重構，降低系統耦合度。
                                <div style={{ marginTop: "12px", textAlign: "left" }}>
                                    <img
                                        src={require("../../../images/portfolio/Toppoint/maintenance.png")}
                                        alt="維修模組資料庫重構"
                                        onClick={() => handleOpenLightbox(0, [{ src: require("../../../images/portfolio/Toppoint/maintenance.png") }])}
                                        style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", border: "1px solid #eee", cursor: "zoom-in" }}
                                    />
                                </div>
                            </li>
                        </ul>
                        {/* --- 全域 Lightbox --- */}
                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            index={photoIndex}
                            slides={lightboxSlides}
                            // 加入這段：強制不渲染上一張/下一張按鈕
                            render={{
                                buttonPrev: () => null,
                                buttonNext: () => null,
                            }}
                        />
                    </div>
                </>
            )}
        </PortfolioLayout>
    );
}