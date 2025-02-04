import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import PlaceList from "./components/PlaceList";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // คำค้นหา
  const [places, setPlaces] = useState([]); // รายการสถานที่จาก API
  const [loading, setLoading] = useState(false); // สถานะโหลดข้อมูล

  useEffect(() => {
    if (searchQuery.trim() === "") return; // ถ้ายังไม่มีคำค้นหา ไม่ต้องเรียก API

    setLoading(true);
    fetch(`http://localhost:4001/trips?keywords=${searchQuery}`) // เรียก API ด้วยคำค้นหา
      .then((res) => res.json()) // แปลงข้อมูลเป็น JSON
      .then((data) => { // รับข้อมูลที่ได้จาก API
        setPlaces(data.data); // อัปเดตรายการสถานที่
        setLoading(false);  // ปิดสถานะโหลดข้อมูล
      })
      .catch((error) => {
        console.error("Error fetching trips:", error); // แสดงข้อผิดพลาด
        setLoading(false); // ปิดสถานะโหลดข้อมูล
      });
  }, [searchQuery]); // เรียก API เมื่อ searchQuery เปลี่ยนแปลง

  const handleTagClick = (tag) => { // ฟังก์ชันเมื่อคลิก tag
    setSearchQuery(tag); // ค้นหาด้วย tag
  };

  return (

      <div className="flex items-center flex-col">
        <div className="flex items-start flex-col py-10">
          <h1 className="text-[#2c9cda] text-[80px] font-[500]">เที่ยวไหนดี</h1>
        </div>

        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* ช่องค้นหา */}
        {searchQuery.trim() !== "" && <PlaceList places={places} onTagClick={handleTagClick} />} {/* แสดงรายการสถานที่ */}
      </div>

  );
}

export default App;
