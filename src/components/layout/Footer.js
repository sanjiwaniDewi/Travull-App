import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-secondary-100 w-full drop-shadow-lg">
            <div className="container mx-auto lg:px-1 px-5 py-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div>
                    <h1 className="text-4xl font-bold text-zinc-800">
                        TravulL
                    </h1>
                    <div className="flex justify-between  md:block">
                        <div className="mt-4">
                            <h2 className="font-bold mb-1">Kerjasama</h2>
                            <img
                                src="/621437638c977337188787.png"
                                alt="wonderfull indonesia logo"
                                className="w-60 object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="font-bold mt-4 mb-2">
                                Keamanan Transaksimu
                            </h2>
                            <div className="flex gap-4 flex-wrap">
                                <img
                                    src="/american.png"
                                    alt="secure payment logo"
                                    className="lg:w-24 lg:h-12 md:w-20 md:h-10 w-16 h-10"
                                />
                                <img
                                    src="/mastercard.png"
                                    alt="secure payment logo"
                                    className="lg:w-24 lg:h-12 md:w-20 md:h-10 w-16 h-10"
                                />
                                <img
                                    src="/visa.png"
                                    alt="secure payment logo"
                                    className="lg:w-24 lg:h-12 md:w-20 md:h-10 w-16 h-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-x-16 lg:mt-0 mt-12 ">
                    <div>
                        <h2 className="font-bold mb-3">Perusahaan</h2>
                        <ul className="flex flex-col gap-y-2 text-sm">
                            <li>Blog</li>
                            <li>Karier</li>
                            <li>Korporasi</li>
                            <li>Afiliasi</li>
                            <li>Perlindungan</li>
                            <li>Cicilan</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-3">Produk</h2>
                        <ul className="flex flex-col gap-y-2 text-sm">
                            <li>Promo</li>
                            <li>Aktivitas</li>
                            <li>Destinasi</li>
                            <li>Event</li>
                            <li>Bus & Travel</li>
                            <li>Sewa Mobil</li>
                            <li>Travel</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-3">Kontak</h2>
                        <ul className="flex flex-col gap-y-2 text-sm">
                            <li>FAQ</li>
                            <li>Hubungi Kami</li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-1 md:col-span-2 col-span-1 lg:mt-0 mt-12 ">
                    <div className="lg:w-fit  w-full lg:ps-3 ps-0">
                        <h2 className="font-bold mb-2 lg:text-start text-center ps-0">
                            Pembayaran
                        </h2>
                        <div className="mt-3 flex flex-wrap gap-2 lg:justify-end justify-center w-fit">
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/Logo_Indomaret.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/BNI Bank Negara Indonesia.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/Logo_Indomaret.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/BNI Bank Negara Indonesia.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/836405_720.jpg"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/png-clipart-bank-mandiri-logo-credit-card-bank-text-logo.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>{" "}
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/Logo_Indomaret.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/BNI Bank Negara Indonesia.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/836405_720.jpg"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/png-clipart-bank-mandiri-logo-credit-card-bank-text-logo.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>{" "}
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/Logo_Indomaret.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/BNI Bank Negara Indonesia.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/836405_720.jpg"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                            <div className="w-16 h-10 bg-white p-2 rounded-lg  ">
                                <img
                                    src="/png-clipart-bank-mandiri-logo-credit-card-bank-text-logo.png"
                                    alt="wonderfull indonesia logo"
                                    className="object-fit w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="mt-8 w-full flex-col lg:justify-end justify-center">
                            <h2 className="font-bold mb-2 lg:text-start text-center w-full">
                                Ikuti Kami
                            </h2>
                            <ul className="flex gap-2  lg:justify-start justify-center pt-2">
                                <li className="text-xl w-10 h-10">
                                    <FaFacebookF />
                                </li>
                                <li className="text-xl w-10 h-10">
                                    {" "}
                                    <RiInstagramFill />
                                </li>
                                <li className="text-xl w-10 h-10">
                                    <FaYoutube />
                                </li>
                                <li className="text-xl w-10 h-10">
                                    {" "}
                                    <FaTiktok />
                                </li>
                                <li className="text-xl w-10 h-10">
                                    {" "}
                                    <FaLinkedinIn />
                                </li>
                                <li className="text-xl w-10 h-10">
                                    {" "}
                                    <FaXTwitter />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
