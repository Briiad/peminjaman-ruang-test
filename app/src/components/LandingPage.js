export default function LandingPage() {
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
        {/* Form with Name, NIM, Room, Major, Start Date, End Date */}
        <form className="flex flex-col p-12">
          {/* Form Title */}
          <h2 className="text-2xl font-bold mb-4">Booking Peminjaman Ruangan</h2>
          {/* Form Inputs */}
          <label htmlFor="name">Nama Lengkap</label>
          <input type="text" name="name" id="name" className="w-full border-2 border-gray-300 rounded-md p-2 mb-4" />
          <label htmlFor="id-number">Nomor Induk Mahasiswa</label>
          <input type="text" name="id-number" id="id-number" className="w-full border-2 border-gray-300 rounded-md p-2 mb-4" />
          {/* Dropdown of Room and Major side by side */}
          <div className="flex justify-between w-full">
            <div className="flex flex-col w-1/2 mr-6">
              <label htmlFor="room">Ruangan</label>
              <select name="room" id="room" className="border-2 border-gray-300 rounded-md p-2 mb-4">
                <option value="room-1">Ruangan 1</option>
                <option value="room-2">Ruangan 2</option>
                <option value="room-3">Ruangan 3</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="major">Jurusan</label>
              <select name="major" id="major" className="border-2 border-gray-300 rounded-md p-2 mb-4">
                <option value="major-1">Jurusan 1</option>
                <option value="major-2">Jurusan 2</option>
                <option value="major-3">Jurusan 3</option>
              </select>
            </div>
          </div>
          {/* Make Date Side by Side */}
          <div className="flex justify-between w-full">
            <div className="flex flex-col w-1/2 mr-6">
              <label htmlFor="start-date">Tanggal Mulai</label>
              <input type="date" name="start-date" id="start-date" className="border-2 border-gray-300 rounded-md p-2 mb-4" />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="end-date">Tanggal Selesai</label>
              <input type="date" name="end-date" id="end-date" className="border-2 border-gray-300 rounded-md p-2 mb-4" />
            </div>
          </div>
          <button type="submit" className="bg-uin-green text-white rounded-sm p-4">Pinjam Ruangan</button>
        </form>
      </div>
    </section>
  )
}