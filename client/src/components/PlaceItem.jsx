import React, { useState } from "react";

function PlaceItem({ place, onTagClick }) { // รับข้อมูลสถานที่และฟังก์ชันเมื่อคลิก tag
    const [showFullDescription, setShowFullDescription] = useState(false); // สถานะแสดงข้อความเต็มหรือย่อ

    const toggleDescription = () => { // ฟังก์ชันเมื่อคลิก "อ่านต่อ" หรือ "ย่อข้อความ"
        setShowFullDescription(!showFullDescription); // สลับสถานะแสดงข้อความเต็มหรือย่อ
    };

    return (
        <div className="flex justify-center items-center py-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10  mx-auto p-4">
                <div className="w-full md:w-1/5">
                    <img src={place.photos[0]} alt={place.title} className="w-full h-auto rounded-lg" /> {/* แสดงรูปภาพ */}
                </div>

                <div className="w-full md:w-[700px]">
                    <h3 className="text-2xl font-bold mb-4">
                        <a href={place.url} className="hover:underline" target="_blank" rel="noopener noreferrer">  {/* ลิงก์ไปยัง URL ของสถานที่ */}
                            {place.title} {/* ชื่อสถานที่ */}
                        </a>
                    </h3>
                    <p className="text-gray-700 mb-4">
                        {showFullDescription ? place.description : `${place.description.substring(0, 100)} ...`} {/* แสดงข้อความเต็มหรือย่อ */}
                        <br />
                        <button onClick={toggleDescription} className="text-blue-600 hover:underline mt-2"> {/* ปุ่ม "อ่านต่อ" หรือ "ย่อข้อความ" */}
                            {showFullDescription ? "ย่อข้อความ" : "อ่านต่อ"} {/* ข้อความบนปุ่ม */}
                        </button>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <p>หมวด :</p>
                        {place.tags.map((tag, index) => ( // แสดง tag ทั้งหมด
                            <React.Fragment key={tag}> {/* ต้องใส่ key เมื่อใช้ map */}
                                {index > 0 && index === place.tags.length - 1 && <span>และ </span>} {/* ตรวจสอบตำแหน่งเพื่อแสดง "และ" หลัง tag สุดท้าย */}
                                <span
                                    className="text-sm font-semibold mr-2 py-0.5 rounded cursor-pointer underline"
                                    onClick={() => onTagClick(tag)} // เมื่อคลิก tag
                                >
                                    {tag}
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {place.photos.map((photo, index) => ( // แสดงรูปภาพทั้งหมด
                            <img key={index} src={photo} alt={`${place.title} ${index + 1}`} className="w-40 h-auto rounded-lg" /> // แสดงรูปภาพ
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceItem;