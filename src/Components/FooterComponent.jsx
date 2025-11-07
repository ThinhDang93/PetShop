import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Petlogo from "../../public/Petlogo.png";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Cột 1: Logo và giới thiệu */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={Petlogo} alt="PetCare Logo" className="h-10" />
            <h2 className="text-xl font-bold text-orange-600">
              PetCare Center
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Nơi chăm sóc và yêu thương thú cưng của bạn như người thân. Dịch vụ
            toàn diện từ spa, thức ăn, thời trang đến chăm sóc sức khỏe.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Liên kết nhanh
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-orange-500">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/fashion" className="hover:text-orange-500">
                Thời trang thú cưng
              </NavLink>
            </li>
            <li>
              <NavLink to="/food" className="hover:text-orange-500">
                Thức ăn
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-orange-500">
                Dịch vụ chăm sóc
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-orange-500">
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Cột 3: Thông tin liên hệ */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Thông tin liên hệ
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>123 Trần Hưng Đạo, Quận 1, TP.HCM</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              <span>0909 123 456</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              <span>support@petcare.vn</span>
            </li>
          </ul>
        </div>

        {/* Cột 4: Mạng xã hội */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Kết nối với chúng tôi
          </h3>
          <div className="flex gap-4 text-orange-500 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © 2025 PetCare Center — Yêu thương từ trái tim 🐾
      </div>
    </footer>
  );
};

export default FooterComponent;
