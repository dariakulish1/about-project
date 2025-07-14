import Popup from "reactjs-popup";
import { AnimatedSection } from "../utils/AnimatedSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import projectScreenOne from "../img/project-screen1.png";
import projectScreenOTwo from "../img/project-screen2.png";
import projectScreenOThree from "../img/project-screen3.png";
import projectScreenOFour from "../img/project-screen4.png";
import projectScreenOFive from "../img/project-screen5.png";
import projectScreenOSix from "../img/project-screen6.png";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./CommercialProjects.scss";
import { useState, useEffect, useRef, useMemo } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import { TypeAnimation } from "react-type-animation";
import { DateRange, DateRangePicker } from "react-date-range";
import { enUS } from "date-fns/locale";
import { DataGrid } from "@mui/x-data-grid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Skeleton from "@mui/material/Skeleton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useQuery, useQueryClient } from "react-query";
import { useMediaQuery, useTheme } from "@mui/material";

const rightAnimation = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const leftAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

function PopupFirstContent({ close }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [zoomedImg, setZoomedImg] = useState(null);

  return (
    <AnimatedSection>
      <div className="commercial-projects__popup-wrapper">
        <div className="commercial-projects__more-info-one">
          <Swiper
            spaceBetween={4}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                src={projectScreenOne}
                alt="project screen"
                style={{ cursor: "zoom-in" }}
                onClick={() => setZoomedImg(projectScreenOne)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={projectScreenOTwo}
                alt="project screen"
                style={{ cursor: "zoom-in" }}
                onClick={() => setZoomedImg(projectScreenOTwo)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={projectScreenOThree}
                alt="project screen"
                style={{ cursor: "zoom-in" }}
                onClick={() => setZoomedImg(projectScreenOThree)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={projectScreenOFour}
                alt="project screen"
                style={{ cursor: "zoom-in" }}
                onClick={() => setZoomedImg(projectScreenOFour)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={projectScreenOFive}
                alt="project screen"
                style={{ cursor: "zoom-in" }}
                onClick={() => setZoomedImg(projectScreenOFive)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={projectScreenOSix}
                alt="project screen"
                style={{ cursor: "zoom-in" }}
                onClick={() => setZoomedImg(projectScreenOSix)}
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={2}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={projectScreenOne} alt="project screen" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={projectScreenOTwo} alt="project screen" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={projectScreenOThree} alt="project screen" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={projectScreenOFour} alt="project screen" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={projectScreenOFive} alt="project screen" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={projectScreenOSix} alt="project screen" />
            </SwiperSlide>
          </Swiper>
          <button
            className="button commercial-projects__close-btn"
            onClick={() => {
              close();
            }}
          >
            close
          </button>
        </div>
        {zoomedImg && (
          <div
            className="zoom-overlay"
            onClick={() => setZoomedImg(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              cursor: "zoom-out",
            }}
          >
            <img
              src={zoomedImg}
              alt="zoomed project"
              style={{
                maxWidth: "96vw",
                maxHeight: "96vh",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                background: "#fff",
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              style={{
                position: "fixed",
                top: 24,
                right: 32,
                zIndex: 10000,
                background: "#232946",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                fontSize: 24,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
              onClick={() => setZoomedImg(null)}
              aria-label="Close zoom"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

const PopupSecondContent = ({ close }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectionRange, setSelectionRange] = useState({
    startDate: (() => {
      const d = new Date();
      d.setDate(d.getDate() - 6);
      return d;
    })(),
    endDate: new Date(),
    key: "selection",
  });

  const countryCodes = useMemo(
    () => ["US", "GB", "DE", "FR", "IT", "UA", "IN", "BG", "SE", "CH"],
    []
  );

  function getDatesInRange(startDate, endDate) {
    const dates = [];
    let current = new Date(startDate);
    while (current <= endDate) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  }

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  useEffect(() => {
    let date = "2025-05-19";
    const apiKey = process.env.REACT_APP_API_KEY;
    setLoading(true);
    Promise.all(
      countryCodes.map((code) =>
        fetch(
          `https://api.api-ninjas.com/v1/publicholidays?date=${date}&country=${code}`,
          {
            method: "GET",
            headers: { "X-Api-Key": apiKey },
          }
        ).then((res) => res.json())
      )
    )
      .then((results) => {
        setData(results.flat());
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error: ", error);
        setLoading(false);
      });
  }, [countryCodes]);

  const datesInRange = getDatesInRange(
    selectionRange.startDate,
    selectionRange.endDate
  );

  const chartData = datesInRange.map((dateObj) => {
    const dateStr = dateObj.toISOString().slice(0, 10);
    const count = data.filter((item) => item.date === dateStr).length;
    return {
      date: dateStr,
      holidayCount: count,
    };
  });

  const rows = data
    .filter((item) => {
      const dateObj = new Date(item.date);
      return (
        dateObj >= selectionRange.startDate && dateObj <= selectionRange.endDate
      );
    })
    .map((holiday, idx) => ({
      id: idx,
      date: holiday.date,
      country: holiday.country,
      federal: holiday.federal,
      local_name: holiday.local_name,
      year: holiday.year,
    }));

  const dataLabels = {
    country: "Country",
    federal: "Federal",
    date: "Date",
    local_name: "Local Name",
    year: "Year",
  };

  const renderSkeletonTable = () => {
    const skeletonRows = 5;
    const columns = Object.keys(dataLabels);
    return (
      <table style={{ width: "100%", borderCollapse: "collapse", height: 400 }}>
        <thead>
          <tr>
            {columns.map((key) => (
              <th
                key={key}
                style={{
                  background: "#232946",
                  color: "white",
                  border: "1px solid #ccc",
                  padding: 8,
                  textAlign: "center",
                }}
              >
                {dataLabels[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: skeletonRows }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {columns.map((key, colIdx) => (
                <td
                  key={colIdx}
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "center",
                    height: 48,
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={32}
                    animation="wave"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <AnimatedSection>
      <div className="commercial-projects__popup-wrapper">
        <div className="commercial-projects__more-info-one">
          <p className="commercial-projects__more-info-two-text">
            <TypeAnimation
              sequence={[
                "Unfortunately, I’m unable to share the original project due to confidentiality. However, I recreated a small demo using public API data. In the demo, I visualize the number of public holidays per day on a chart to demonstrate similar functionality.",
                500,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={false}
              repeat={0}
              style={{
                fontSize: "16px",
                display: "inline-block",
                textAlign: "center",
              }}
            />
          </p>
          <div>
            {isSmallScreen ? (
              <DateRange
                ranges={[selectionRange]}
                onChange={handleSelect}
                locale={enUS}
                showMonthAndYearPickers={true}
                showDateDisplay={false}
                moveRangeOnFirstSelection={false}
                rangeColors={["#232946"]}
                showSelectionPreview={false}
                editableDateInputs={false}
              />
            ) : (
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                locale={enUS}
                showMonthAndYearPickers={true}
                showDateDisplay={false}
                moveRangeOnFirstSelection={false}
                rangeColors={["#232946"]}
                showSelectionPreview={false}
                editableDateInputs={false}
              />
            )}
          </div>
          <div
            style={{
              width: isSmallScreen ? "90%" : "70%",
              height: 250,
              marginBottom: 24,
              flexShrink: 0,
            }}
          >
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="holidayCount"
                  stroke="#232946"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div
            style={{
              height: 300,
              width: "100%",
              overflowY: "auto",
              flexShrink: 0,
            }}
          >
            {loading ? (
              renderSkeletonTable()
            ) : (
              <DataGrid
                rows={rows}
                columns={Object.keys(dataLabels).map((key) => ({
                  field: key,
                  headerName: dataLabels[key],
                  width: 150,
                  flex: 1,
                  renderCell: (params) => {
                    if (key === "federal") {
                      return params.value ? (
                        <DoneIcon style={{ color: "green" }} />
                      ) : (
                        <ClearIcon style={{ color: "red" }} />
                      );
                    }
                    return params.value;
                  },
                }))}
                pagination={false}
                pageSizeOptions={[]}
                hideFooterPagination={true}
                disableSelectionOnClick
                sx={{
                  "& .MuiDataGrid-cell": {
                    border: "1px solid #ccc",
                    textAlign: "center",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#232946",
                    color: "white",
                  },
                  "& .MuiDataGrid-columnHeader": {
                    border: "1px solid #ccc",
                    backgroundColor: "#232946",
                    color: "white",
                  },
                  "& .MuiDataGrid-columnHeaderTitle": {
                    color: "white",
                    fontWeight: "bold",
                  },
                  "& .MuiDataGrid-columnHeaderTitleContainer": {
                    color: "white",
                  },
                  "& .MuiDataGrid-sortIcon": {
                    color: "white",
                  },
                  "& .MuiDataGrid-menuIcon": {
                    color: "white",
                  },
                  "& .MuiDataGrid-columnHeader .MuiSvgIcon-root": {
                    color: "white",
                  },
                  "& .MuiDataGrid-columnHeader:focus": {
                    outline: "none",
                  },
                  "& .MuiDataGrid-columnHeader:focus-within": {
                    outline: "none",
                  },
                }}
              />
            )}
          </div>
          <button
            className="button commercial-projects__close-btn"
            onClick={() => {
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const CommercialProjects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div className="commercial-projects">
      <AnimatedSection>
        <h1 className="commercial-projects__head-one-text">
          Commercial Projects
        </h1>
        <div className="commercial-projects__projects-grid">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={leftAnimation}
            transition={{ duration: 0.7 }}
            className="commercial-projects__project-item"
          >
            <h3 className="commercial-projects__head-three-text">
              Brainly Solution
            </h3>
            <p className="commercial-projects__about-project-one">
              I developed a landing page for{" "}
              <a
                href="https://www.brainlysolution.com/"
                style={{ textDecoration: "none", color: "#232946" }}
                target="parent"
              >
                Brainly Solution
              </a>{" "}
              as part of a commercial project. The work included building a
              responsive layout based on a Figma design, implementing form
              submission using Firebase, and ensuring cross-device
              compatibility. The project focused on clean UI, usability, and
              performance.
            </p>
            <div className="commercial-projects__project-tech">
              <span>React</span>
              <span>Firebase</span>
              <span>Responsive layout</span>
            </div>
            <Popup
              trigger={
                <button className="commercial-projects__more-info-btn">
                  Show more
                </button>
              }
              modal
              nested
            >
              {(close) => <PopupFirstContent close={close} />}
            </Popup>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={rightAnimation}
            transition={{ duration: 0.7 }}
            className="commercial-projects__project-item"
          >
            <h3 className="commercial-projects__head-three-text">
              Admin Panel for a Medical Facility
            </h3>
            <p className="commercial-projects__about-project-one">
              I contributed to the development of an admin panel for a hospital
              project. My tasks included implementing interactive tables for
              managing data, integrating charts (for displaying medical
              statistics), and adding a calendar component to filter information
              by date. The panel was designed with a responsive layout to ensure
              usability across devices.
            </p>
            <div className="commercial-projects__project-tech">
              <span>React</span>
              <span>API</span>
              <span>Charts</span>
              <span>Tables</span>
            </div>
            <Popup
              trigger={
                <button className="commercial-projects__more-info-btn">
                  Show more
                </button>
              }
              modal
              nested
            >
              {(close) => <PopupSecondContent close={close} />}
            </Popup>
          </motion.div>
        </div>
        <button
          className="commercial-projects__go-back-btn"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </AnimatedSection>
    </div>
  );
};
