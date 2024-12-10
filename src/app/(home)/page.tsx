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
            <form
              action={searchJourney}
              className="bg-white text-rideease-black w-full flex justify-between items-center rounded-[20px] p-5"
            >
              <div className="flex gap-[50px] items-center p-5">
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="departure" className="text-lg">
                    Keberangkatan
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <BusFront />
                    </div>
                    <select
                      name="departure"
                      id="departure"
                      className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                    >
                      <option value="" disabled selected>
                        Departure
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
                <hr className="border border-[#EDE8F5] h-[60px]" />
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="arrival" className="text-lg">
                    Kedatangan
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <BusFront />
                    </div>
                    <select
                      name="arrival"
                      id="arrival"
                      className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                    >
                      <option value="" disabled selected>
                        Arrival
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
                <hr className="border border-[#EDE8F5] h-[60px]" />
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="date" className="text-lg">
                    Tanggal Keberangkatan
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <CalendarSearch />
                    </div>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="relative font-semibold text-[22px] leading-[26.63px] w-[157px] bg-transparent focus:outline-none appearance-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="font-bold text-2xl leading-9 text-rideease-black text-center bg-rideease-light-purple rounded-[18px] p-[12px_30px] flex shrink-0 items-center h-[108px]  transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
              >
                Explore Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <section
        id="Services"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <h2 className="font-bold text-[32px] leading-[48px] text-center">
          Kami Pastikan Perjalanan <br />
          Anda Nyaman Bersama Kami
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-rideease-light-purple">
              <UserCheck className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Kru Berpengalaman
              </p>
              <p className="leading-[30px] text-rideease-off-purple">
                Kru kami sangat berpengalaman dan profesional dalam melayani
                pelanggan.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-rideease-light-purple">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Keamanan Terjamin
              </p>
              <p className="leading-[30px] text-rideease-off-purple">
                Kami menjamin keamanan dan kenyamanan Anda selama perjalanan.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-rideease-light-purple">
              <Award className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Penghargaan Terbaik
              </p>
              <p className="leading-[30px] text-rideease-off-purple">
                Kami telah menerima berbagai penghargaan atas pelayanan terbaik
                kami.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-rideease-light-purple">
              <House className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Jemput di Rumah
              </p>
              <p className="leading-[30px] text-rideease-off-purple">
                Kami siap menjemput Anda langsung dari rumah untuk kenyamanan
                perjalanan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Testimonials"
        className="w-full flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex flex-col gap-[6px] items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Testimoni Pelanggan
          </h2>
          <p className="font-medium text-rideease-off-purple">
            Kami memberikan pengalaman terbaik untuk setiap pelanggan
          </p>
        </div>
        <div className="testimonial-slider w-full overflow-hidden">
          <div className="slider flex shrink-0 w-max">
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-rideease-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Pelayanan sangat memuaskan, sopir ramah dan profesional. Bus
                  nyaman dan bersih. Terima kasih RideEase!
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-5 h-5"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={50}
                      height={50}
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Budi Santoso</p>
                    <p className="text-sm text-rideease-off-purple">
                      Pengusaha
                    </p>
                  </div>
                </div>
              </div>

              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-rideease-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Tepat waktu dan perjalanan yang nyaman. Harga sangat
                  terjangkau untuk layanan sebagus ini.
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-5 h-5"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={50}
                      height={50}
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Siti Rahma</p>
                    <p className="text-sm text-rideease-off-purple">Dosen</p>
                  </div>
                </div>
              </div>

              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-rideease-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Sistem pemesanan yang mudah dan customer service sangat
                  membantu. Recommended!
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-5 h-5"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={50}
                      height={50}
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Ahmad Ridwan</p>
                    <p className="text-sm text-rideease-off-purple">
                      Mahasiswa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-rideease-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Pelayanan sangat memuaskan, sopir ramah dan profesional. Bus
                  nyaman dan bersih. Terima kasih RideEase!
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-5 h-5"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={50}
                      height={50}
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Budi Santoso</p>
                    <p className="text-sm text-rideease-off-purple">
                      Pengusaha
                    </p>
                  </div>
                </div>
              </div>

              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-rideease-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Tepat waktu dan perjalanan yang nyaman. Harga sangat
                  terjangkau untuk layanan sebagus ini.
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-5 h-5"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={50}
                      height={50}
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Siti Rahma</p>
                    <p className="text-sm text-rideease-off-purple">Dosen</p>
                  </div>
                </div>
              </div>

              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-rideease-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  Sistem pemesanan yang mudah dan customer service sangat
                  membantu. Recommended!
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      width={30}
                      height={30}
                      src="../assets/images/icons/Star.svg"
                      className="w-5 h-5"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={50}
                      height={50}
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Ahmad Ridwan</p>
                    <p className="text-sm text-rideease-off-purple">
                      Mahasiswa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col justify-between mt-[150px] border-t-[6px] border-rideease-light-purple p-[100px_10px_30px]">
        <div className="container max-w-[1130px] mx-auto flex justify-between relative">
          <Image
            width={300}
            height={300}
            src="/assets/images/icons/Ellipse 4.png"
            className="absolute h-[300px] -top-[45px] -left-[20px] z-0"
            alt="icon"
          />
          <div className="flex shrink-0 h-fit z-10">
            <Image
              width={150}
              height={70}
              src="/assets/images/logos/logo.svg"
              alt=""
            />
          </div>
          <div className="flex gap-[100px] z-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Explore</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Services
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Testimonials
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Pricing
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Services</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Pickup at Home
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                First Lounge Plus
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Business Room
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Bentley Power
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">About</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Company Profile
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Our Investors
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Media Press
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300"
              >
                Careers
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Connect</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/call.svg"
                  alt="icon"
                />
                +1 2208 1996
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/dribbble.svg"
                  alt="icon"
                />
                buildwithangga
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-rideease-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/sms.svg"
                  alt="icon"
                />
                team@bwa.com
              </Link>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-[60px] text-[#A0A0AC] text-sm z-10">
          All Rights Reserved. Copyright BuildWithAngga 2024.
        </p>
      </footer>
    </>
  );
}
