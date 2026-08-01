"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md">

        {/* Profile */}

        <div className="flex flex-col items-center">

        <div className="relative w-72 h-72 rounded-full overflow-hidden border-[5px] border-violet-500 shadow-[0_0_45px_rgba(168,85,247,.9)]">
            <Image
              src="/images/profile.jpg"
              alt="Qusai Amayreh"
              fill
              priority
             className="object-cover object-top scale-105"
            />

          </div>

          <h1 className="mt-5 text-center text-5xl font-extrabold tracking-tight">
            Qusai Amayreh
          </h1>

          <p className="mt-3 text-center font-medium font-medium text-violet-400">
            IT Student
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-12 space-y-5">

          <a
            href="mailto:engqusaiamayreh@gmail.com"
            className="flex items-center justify-between rounded-3xl border border-violet-500 bg-[#141414] px-6 py-6 transition duration-300 hover:scale-[1.03]"
          >

            <div className="flex items-center gap-4">

              <FaEnvelope
                size={28}
                color="#A855F7"
              />

              <span className="text-xl">
                Email
              </span>

            </div>

            <div className="text-3xl text-white font-light">
  ›
</div>

          </a>

          <a
  href="https://wa.me/962776060615"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between rounded-3xl border border-green-500 bg-[#141414] px-6 py-6 transition duration-300 hover:scale-[1.03]"
>
  <div className="flex items-center gap-4">
    <FaWhatsapp
      size={26}
      color="#22C55E"
    />

    <span className="text-xl font-medium">
      WhatsApp
    </span>
  </div>

  <div className="text-4xl text-white font-light">
    ›
  </div>
</a>
                    <a
            href="https://www.instagram.com/qs_xr2?igsh=MWlhOWJyNDQ4eDgxMg=="
            target="_blank"
            className="flex items-center justify-between rounded-3xl border border-pink-500 bg-[#141414] px-6 py-6 transition duration-300 hover:scale-[1.03]"
          >
            <div className="flex items-center gap-4">
              <FaInstagram size={26} color="#EC4899" className="shrink-0"/>
              <span className="text-xl">Instagram</span>
            </div>

           <div className="text-4xl text-white font-light">
  ›
</div>
          </a>

          <a
            href="https://www.facebook.com/share/1EcpYXbxgn/"
            target="_blank"
           className="flex items-center justify-between rounded-3xl border border-blue-500 bg-[#141414] px-6 py-6 transition duration-300 hover:scale-[1.03]"
          >
            <div className="flex items-center gap-4">
              <FaFacebookF size={26} color="#1877F2" className="shrink-0"/>
              <span className="text-xl">Facebook</span>
            </div>

           <div className="text-4xl text-white font-light">
  ›
</div>
          </a>

          <a
            href="https://www.snapchat.com/add/qs_xr2?share_id=OKMzmAoVEyM&locale=ar-JO-u-nu-latn"
            target="_blank"
            className="flex items-center justify-between rounded-3xl border border-yellow-400 bg-[#141414] px-6 py-6 transition duration-300 hover:scale-[1.03]"
          >
            <div className="flex items-center gap-4">
              <FaSnapchatGhost size={26} color="#FFD600"className="shrink-0" />
              <span className="text-xl">Snapchat</span>
            </div>

           <div className="text-4xl text-white font-light">
  ›
</div>
          </a>

          <a
            href="https://www.linkedin.com/in/qusai-amayreh2004?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            className="flex items-center justify-between rounded-3xl border border-sky-500 bg-[#141414] px-6 py-6 transition duration-300 hover:scale-[1.03]"
          >
            <div className="flex items-center gap-4">
              <FaLinkedinIn size={26} color="#0A66C2"className="shrink-0" />
              <span className="text-xl">LinkedIn</span>
            </div>

           <div className="text-4xl text-white font-light">
  ›
</div>
          </a>

        </div>

      </div>

    </main>
  );
}