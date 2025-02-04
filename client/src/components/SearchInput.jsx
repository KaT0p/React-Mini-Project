import React from "react";

function SearchInput({ searchQuery, setSearchQuery }) { // รับคำค้นหาและฟังก์ชันเมื่อเปลี่ยนคำค้นหา
  return (
    <div className="w-full md:w-[900px] mx-auto p-4">
      <p className="text-[18px]">ค้นหาที่เที่ยว</p>
      <input
        type="text"
        value={searchQuery} // ค่าคำค้นหา
        onChange={(e) => setSearchQuery(e.target.value)} // เมื่อเปลี่ยนคำค้นหา
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        className="search-input text-center justify-center w-full h-12 px-4 text-lg"
      />
      <div class="border-t border-gray-200"></div>
    </div>
  );
}

export default SearchInput;