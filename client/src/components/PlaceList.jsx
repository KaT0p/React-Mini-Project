import React from "react";
import PlaceItem from "./PlaceItem";

function PlaceList({ places, onTagClick }) { // รับรายการสถานที่และฟังก์ชันเมื่อคลิก tag
  return (
    <div className="flex flex-col gap-5">
      {places.map((place) => ( // แสดงสถานที่ทั้งหมด
        <PlaceItem key={place.id} place={place} onTagClick={onTagClick} /> // แสดงสถานที่แต่ละแห่ง
      ))}
    </div>
  );
}

export default PlaceList;