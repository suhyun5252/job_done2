import { useEffect, useRef } from "react";
// apis 및 상태관리
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { businessDetailState } from "../../atoms/businessAtom";
import { PortfolioListState } from "../../atoms/portfolioAtom";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PortfolioListItem, PortfolioSwiperDiv } from "./serviceDetail";
// import required modules
import { Navigation } from "swiper/modules";
import { BASE_URL } from "../../constants/constants";

const ContPortfolioList = ({ handleImageClick }) => {
  const businessDetail = useRecoilValue(businessDetailState);
  const businessId = businessDetail.businessId;

  const [portfolioListState, setPortfolioListState] =
    useRecoilState(PortfolioListState);
  const getPortFolioList = async businessId => {
    try {
      // /api/portfolio?categoryId=1&detailTypeId=1&businessId=1
      const res = await axios.get(`/api/portfolio?businessId=${businessId}`);
      setPortfolioListState(res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPortFolioList(businessId);
  }, [businessId]);

  // swiper
  const swiperRef = useRef(null);
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  return (
    <PortfolioSwiperDiv>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {portfolioListState.map(portfolio => (
          <SwiperSlide key={portfolio.portfolioId}>
            <PortfolioListItem>
              <div
                className="imgbox"
                onClick={() => handleImageClick(portfolio.portfolioId)}
              >
                <img
                  src={`${BASE_URL}${portfolio.thumbnail}`}
                  alt={portfolio.title}
                />
              </div>
              <h3>{portfolio.title}</h3>
            </PortfolioListItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="btn-area">
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </PortfolioSwiperDiv>
  );
};

export default ContPortfolioList;
