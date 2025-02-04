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
    fetch(`http://localhost:4001/trips?keywords=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data.data); // อัปเดตรายการสถานที่
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trips:", error);
        setLoading(false);
      });
  }, [searchQuery]); // เรียก API เมื่อ searchQuery เปลี่ยนแปลง

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
  };

  return (

      <div className="flex items-center flex-col">
        <div className="flex items-start flex-col py-10">
          <h1 className="text-[#2c9cda] text-[80px] font-[500]">เที่ยวไหนดี</h1>
        </div>

        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {searchQuery.trim() !== "" && <PlaceList places={places} onTagClick={handleTagClick} />}
      </div>

  );
}

export default App;
