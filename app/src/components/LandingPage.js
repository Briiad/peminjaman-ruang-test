import { useState } from 'react';

export default function LandingPage() {

  // State for the data to submit
  const [data, setData] = useState({
    name: "",
    nim: "",
    room: "",
    startTime: "",
    endTime: "",
    date: ""
  });

  // Submit to API w/ POST method
  const submitData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/book_room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json()
      console.log(responseData)
      alert("Data berhasil disimpan")
      setData({ name: "", nim: "", room: "", startTime: "", endTime: "", date: "" });
    } catch (error) {
      console.log(error)
    }
  }

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  return(
    <section className="w-full h-screen flex items-center justify-around bg-campus-room bg-center bg-cover">
      {/* Make bg darker with overlay */}
      <div className="z-0 w-full h-full bg-black opacity-50 absolute"></div>

      {/* Title */}
      <div className="z-10 max-w-2xl flex flex-col text-white">
        <h1 className="text-6xl font-bold">Peminjaman Ruangan Perpustakaan UIN Malang</h1>
        {/* Two Buttons */}
        <div className="flex mt-6">
          <button className="bg-uin-green text-white rounded-md p-4 px-12 mr-4">Pelajari Lebih Lanjut</button>
          <button className="bg-white text-uin-green rounded-md p-4 px-12">Daftar Ruangan</button>
        </div>
      </div>

      {/* Form */}
      <div className="z-10 w-auto h-auto flex bg-white rounded-md">
        {/* Form with Name, NIM, Room, Start Time, End time, and Date */}
        <form className="flex flex-col p-12" onSubmit={submitData}>
          <h2 className="text-2xl font-bold mb-6">Peminjaman Ruangan</h2>
          {/* Name NIM Side by side */}
          <div className="flex">
            <div className="flex flex-col mr-4">
              <label className="text-sm font-bold mb-2">Nama</label>
              <input className="border border-gray-400 rounded-md p-2" type="text" name="name" placeholder="Nama" value={data.name} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-2">NIM</label>
              <input className="border border-gray-400 rounded-md p-2" type="text" name="nim" placeholder="NIM" value={data.nim} onChange={handleInputChange} />
            </div>
          </div>
          {/* Room */}
          <div className="flex flex-col mt-4">
            <label className="text-sm font-bold mb-2">Ruangan</label>
            <select className="border border-gray-400 rounded-md p-2" name="room" value={data.room} onChange={handleInputChange}>
              <option value="room1">Room 1</option>
              <option value="room2">Room 2</option>
              <option value="room3">Room 3</option>
            </select>
          </div>
          {/* StartTime EndTime Side by Side */}
          <div className="flex mt-4">
            <div className="flex flex-col mr-4">
              <label className="text-sm font-bold mb-2">Waktu Mulai</label>
              <input className="border border-gray-400 rounded-md p-2" type="time" name="startTime" value={data.startTime} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-2">Waktu Selesai</label>
              <input className="border border-gray-400 rounded-md p-2" type="time" name="endTime" value={data.endTime} onChange={handleInputChange} />
            </div>
          </div>
          {/* Date */}
          <div className="flex flex-col mt-4">
            <label className="text-sm font-bold mb-2">Tanggal</label>
            <input className="border border-gray-400 rounded-md p-2" type="date" name="date" value={data.date} onChange={handleInputChange} />
          </div>
          {/* Submit Button */}
          <button className="bg-uin-green text-white rounded-md p-4 px-12 mt-6" type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}