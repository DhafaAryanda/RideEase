import Image from "next/image";
import Link from "next/link";
import { getCityFilter } from "./lib/data";
import Navbar from "../components/navbar";
import { searchJourney } from "./lib/actions";
import {
  Award,
  BusFront,
  CalendarSearch,
  House,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default async function HomePage() {
  const filter = await getCityFilter();
  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/bus.jpg')] bg-no-repeat bg-cover bg-left-top -z-10"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0">
          <Navbar />
          <div className="hero-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[90px] mt-[103px]">
            <div className="title flex flex-col gap-[30px]">
              <h1 className="font-extrabold text-[80px] leading-[90px]">
                Perjalanan Terbaik. <br />
                Harga Terjangkau.
              </h1>
              <p className="font-medium text-lg leading-[36px]">
                Pesan tiket dengan mudah, tanpa ribet dan antri panjang. <br />
                Nikmati kemudahan memesan dari mana saja dan kapan saja.
              </p>
            </div>
            <div className="mb-10 bg-white/80 backdrop-blur-md text-rideease-black w-full rounded-[20px] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="font-semibold text-2xl leading-relaxed mx-2 mb-4 text-center">
                🚌 Tiket Bus & Shuttle
              </h2>
              <form
                action={searchJourney}
                className="flex flex-col md:flex-row justify-between items-center gap-6"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center p-5 w-full">
                  <div className="flex flex-col justify-center gap-3 w-full md:w-auto">
                    <label htmlFor="departure" className="text-lg font-medium">
                      Keberangkatan
                    </label>
                    <div className="group flex gap-3 p-3 bg-white rounded-xl border-2 border-transparent hover:border-rideease-light-purple transition-all">
                      <div className="flex items-center w-8 h-8 shrink-0 text-rideease-light-purple">
                        <BusFront className="group-hover:scale-110 transition-transform" />
                      </div>
                      <select
                        name="departure"
                        id="departure"
                        className=" w-full focus:outline-none appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-8"
                      >
                        <option value="" disabled selected>
                          Pilih Keberangkatan
                        </option>
                        {filter?.map((val, key) => (
                          <option
                            key={`${key} ${val.departureCity}`}
                            value={val.departureCity}
                          >
                            {val.departureCity}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="hidden md:block h-14 w-px bg-rideease-light-purple/30" />

                  <div className="flex flex-col justify-center gap-3 w-full md:w-auto">
                    <label htmlFor="arrival" className="text-lg font-medium">
                      Kedatangan
                    </label>
                    <div className="group flex gap-3 p-3 bg-white rounded-xl border-2 border-transparent hover:border-rideease-light-purple transition-all">
                      <div className="flex items-center w-8 h-8 shrink-0 text-rideease-light-purple">
                        <BusFront className="group-hover:scale-110 transition-transform rotate-180" />
                      </div>
                      <select
                        name="arrival"
                        id="arrival"
                        className=" w-full focus:outline-none appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-8"
                      >
                        <option value="" disabled selected>
                          Pilih Kedatangan
                        </option>
                        {filter?.map((val, key) => (
                          <option
                            key={`${key} ${val.destinationCity}`}
                            value={val.destinationCity}
                          >
                            {val.destinationCity}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="hidden md:block h-14 w-px bg-rideease-light-purple/30" />

                  <div className="flex flex-col justify-center gap-3 w-full md:w-auto">
                    <label htmlFor="date" className="text-lg font-medium">
                      Tanggal Keberangkatan
                    </label>
                    <div className="group flex gap-3 p-3 bg-white rounded-xl border-2 border-transparent hover:border-rideease-light-purple transition-all">
                      <div className="flex items-center w-8 h-8 shrink-0 text-rideease-light-purple">
                        <CalendarSearch className="group-hover:scale-110 transition-transform" />
                      </div>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className=" w-full focus:outline-none bg-transparent [&::-webkit-calendar-picker-indicator]:bg-rideease-light-purple/20 [&::-webkit-calendar-picker-indicator]:rounded-lg [&::-webkit-calendar-picker-indicator]:hover:bg-rideease-light-purple/40 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto font-bold text-xl px-8 py-4 text-white bg-gradient-to-r from-rideease-light-purple to-purple-500 rounded-xl hover:shadow-[0_10px_20px_0_#B88DFF] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Cari Tiket
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Services"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px] px-4"
      >
        <h2 className="font-bold text-[40px] leading-[48px] text-center bg-gradient-to-r from-rideease-light-purple to-purple-500 text-transparent bg-clip-text">
          Kami Pastikan Perjalanan <br />
          Anda Nyaman Bersama Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-[30px] w-full p-6 rounded-2xl hover:bg-rideease-bg-purple transition-all duration-300 group">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-rideease-light-purple group-hover:scale-110 transition-transform">
              <UserCheck className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl leading-[36px] group-hover:text-rideease-light-purple transition-colors">
                Kru Berpengalaman
              </p>
              <p className="leading-[30px] text-rideease-off-purple">
                Kru kami sangat berpengalaman dan profesional dalam melayani
                pelanggan dengan lebih dari 5 tahun pengalaman.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] w-full p-6 rounded-2xl hover:bg-rideease-bg-purple transition-all duration-300 group">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-rideease-light-purple group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl leading-[36px] group-hover:text-rideease-light-purple transition-colors">
                Keamanan Terjamin
              </p>
              <p className="leading-[30px] text-rideease-off-purple">
                Kami menjamin 100% keamanan dan kenyamanan Anda dengan asuransi
                perjalanan lengkap.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] w-full p-6 rounded-2xl hover:bg-rideease-bg-purple transition-all duration-300 group">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-rideease-light-purple group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl leading-[36px] group-hover:text-rideease-light-purple transition-colors">
                Penghargaan Terbaik
              </p>
              <p className="leading-[30px] text-rideease-off-purple">
                Pemenang &quot;Best Transportation Service&quot; 3 tahun
                berturut-turut.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] w-full p-6 rounded-2xl hover:bg-rideease-bg-purple transition-all duration-300 group">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-rideease-light-purple group-hover:scale-110 transition-transform">
              <House className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl leading-[36px] group-hover:text-rideease-light-purple transition-colors">
                Jemput di Rumah
              </p>
              <p className="leading-[30px] text-rideease-off-purple">
                Layanan antar jemput door-to-door 24/7 untuk kenyamanan maksimal
                Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Testimonials"
        className="w-full flex flex-col pt-[100px] gap-[30px] bg-gradient-to-r from-rideease-light-purple to-purple-500 text-transparent bg-clip-text"
      >
        <div className="flex flex-col gap-[6px] items-center">
          <h2 className="font-bold text-[42px] leading-[48px] text-center bg-gradient-to-r from-rideease-light-purple to-purple-600 bg-clip-text text-transparent">
            Apa Kata Mereka?
          </h2>
          <p className="font-medium text-rideease-off-purple text-lg">
            Dengarkan pengalaman luar biasa dari pelanggan setia kami
          </p>
        </div>
        <div className="testimonial-slider w-full overflow-hidden py-10">
          <div className="slider flex shrink-0 w-max">
            <div className="animate-[slide_20s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[250px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-[20px] overflow-hidden border border-rideease-light-purple/20">
                <div className="flex justify-between items-start">
                  <p className="review leading-[30px] h-[90px] w-[305px] italic text-gray-700">
                    &quot;Pelayanan sangat memuaskan, sopir ramah dan
                    profesional. Bus nyaman dan bersih. Terima kasih
                    RideEase!&quot;
                  </p>
                  <span className="text-4xl text-rideease-light-purple">
                    &quot;
                  </span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[60px] h-[60px] overflow-hidden border-2 border-rideease-light-purple">
                    <Image
                      width={60}
                      height={60}
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg text-rideease-light-purple">
                      Budi Santoso
                    </p>
                    <p className="text-sm text-rideease-off-purple font-medium">
                      Pengusaha
                    </p>
                  </div>
                </div>
              </div>

              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-[20px] overflow-hidden border border-rideease-light-purple/20">
                <div className="flex justify-between items-start">
                  <p className="review leading-[30px] h-[90px] w-[305px] italic text-gray-700">
                    &quot;Tepat waktu dan perjalanan yang nyaman. Harga sangat
                    terjangkau untuk layanan sebagus ini.&quot;
                  </p>
                  <span className="text-4xl text-rideease-light-purple">
                    &quot;
                  </span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[60px] h-[60px] overflow-hidden border-2 border-rideease-light-purple">
                    <Image
                      width={60}
                      height={60}
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg text-rideease-light-purple">
                      Siti Rahma
                    </p>
                    <p className="text-sm text-rideease-off-purple font-medium">
                      Dosen
                    </p>
                  </div>
                </div>
              </div>

              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-[20px] overflow-hidden border border-rideease-light-purple/20">
                <div className="flex justify-between items-start">
                  <p className="review leading-[30px] h-[90px] w-[305px] italic text-gray-700">
                    &quot;Sistem pemesanan yang mudah dan customer service
                    sangat membantu. Recommended!&quot;
                  </p>
                  <span className="text-4xl text-rideease-light-purple">
                    &quot;
                  </span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[60px] h-[60px] overflow-hidden border-2 border-rideease-light-purple">
                    <Image
                      width={60}
                      height={60}
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg text-rideease-light-purple">
                      Ahmad Ridwan
                    </p>
                    <p className="text-sm text-rideease-off-purple font-medium">
                      Mahasiswa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_20s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[250px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-[20px] overflow-hidden border border-rideease-light-purple/20">
                <div className="flex justify-between items-start">
                  <p className="review leading-[30px] h-[90px] w-[305px] italic text-gray-700">
                    &quot;Pelayanan sangat memuaskan, sopir ramah dan
                    profesional. &quot;Pelayanan sangat memuaskan, sopir ramah
                    dan profesional. Bus nyaman dan bersih. Terima kasih
                    RideEase!&quot;
                  </p>
                  <span className="text-4xl text-rideease-light-purple">
                    &quot;
                  </span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[60px] h-[60px] overflow-hidden border-2 border-rideease-light-purple">
                    <Image
                      width={60}
                      height={60}
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg text-rideease-light-purple">
                      Budi Santoso
                    </p>
                    <p className="text-sm text-rideease-off-purple font-medium">
                      Pengusaha
                    </p>
                  </div>
                </div>
              </div>

              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-[20px] overflow-hidden border border-rideease-light-purple/20">
                <div className="flex justify-between items-start">
                  <p className="review leading-[30px] h-[90px] w-[305px] italic text-gray-700">
                    &quot;Tepat waktu dan perjalanan yang nyaman. Harga sangat
                    terjangkau untuk layanan sebagus ini.&quot;
                  </p>
                  <span className="text-4xl text-rideease-light-purple">
                    &quot;
                  </span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[60px] h-[60px] overflow-hidden border-2 border-rideease-light-purple">
                    <Image
                      width={60}
                      height={60}
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg text-rideease-light-purple">
                      Siti Rahma
                    </p>
                    <p className="text-sm text-rideease-off-purple font-medium">
                      Dosen
                    </p>
                  </div>
                </div>
              </div>

              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-[20px] overflow-hidden border border-rideease-light-purple/20">
                <div className="flex justify-between items-start">
                  <p className="review leading-[30px] h-[90px] w-[305px] italic text-gray-700">
                    &quot;Sistem pemesanan yang mudah dan customer service
                    sangat membantu. Recommended!&quot;
                  </p>
                  <span className="text-4xl text-rideease-light-purple">
                    &quot;
                  </span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[60px] h-[60px] overflow-hidden border-2 border-rideease-light-purple">
                    <Image
                      width={60}
                      height={60}
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg text-rideease-light-purple">
                      Ahmad Ridwan
                    </p>
                    <p className="text-sm text-rideease-off-purple font-medium">
                      Mahasiswa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative flex flex-col justify-between mt-[150px] border-t-[6px] border-rideease-light-purple bg-gradient-to-b from-white to-purple-50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container max-w-[1130px] mx-auto flex flex-col md:flex-row justify-between p-[100px_10px_30px] relative">
          <div className="flex flex-col gap-6 mb-10 md:mb-0 z-10">
            <Image
              width={150}
              height={70}
              src="/assets/images/logos/logo-black.svg"
              alt="RideEase Logo"
              className="hover:scale-105 transition-transform"
            />
            <p className="max-w-xs text-gray-600">
              Memberikan pengalaman perjalanan terbaik dengan kenyamanan dan
              keamanan yang terjamin.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-[60px] z-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg text-rideease-light-purple">
                Explore
              </p>
              <div className="flex flex-col gap-4">
                {["Services", "Testimonials", "Pricing", "About"].map(
                  (item) => (
                    <Link
                      key={item}
                      href=""
                      className="font-medium text-gray-600 hover:text-rideease-light-purple hover:translate-x-2 transition-all duration-300"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg text-rideease-light-purple">
                Services
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Pickup at Home",
                  "First Lounge Plus",
                  "Business Room",
                  "Bentley Power",
                ].map((item) => (
                  <Link
                    key={item}
                    href=""
                    className="font-medium text-gray-600 hover:text-rideease-light-purple hover:translate-x-2 transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg text-rideease-light-purple">
                About
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Company Profile",
                  "Our Investors",
                  "Media Press",
                  "Careers",
                ].map((item) => (
                  <Link
                    key={item}
                    href=""
                    className="font-medium text-gray-600 hover:text-rideease-light-purple hover:translate-x-2 transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg text-rideease-light-purple">
                Connect
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  href=""
                  className="font-medium text-gray-600 hover:text-rideease-light-purple transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="p-2 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                    <Image
                      width={24}
                      height={24}
                      src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
                      alt="Phone"
                      className="w-6 h-6"
                    />
                  </div>
                  +62 812 3456 7890
                </Link>
                <Link
                  href=""
                  className="font-medium text-gray-600 hover:text-rideease-light-purple transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="p-2 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                    <Image
                      width={24}
                      height={24}
                      src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </div>
                  @rideease.id
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-100 mt-16">
          <p className="container max-w-[1130px] mx-auto py-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} RideEase. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
