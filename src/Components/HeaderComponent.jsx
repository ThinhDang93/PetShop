import { NavLink, useNavigate } from "react-router-dom";
import Petlogo from "../../public/Petlogo.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export const HeaderComponent = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isRolled, setIsRolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fashionOpen, setFashionOpen] = useState(false);
  const [foodOpen, setFoodOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsRolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setOpen(!open);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuItems = [
    { label: "Trang chủ", to: "home" },
    { label: "Giới thiệu", to: "about" },
    {
      label: "Thời trang",
      type: "dropdown",
      open: fashionOpen,
      toggle: () => setFashionOpen(!fashionOpen),
      items: ["Phụ kiện", "Quần áo", "Vòng cổ", "Giày dép"],
    },
    {
      label: "Thức ăn",
      type: "dropdown",
      open: foodOpen,
      toggle: () => setFoodOpen(!foodOpen),
      items: ["Thức ăn cho chó", "Thức ăn cho mèo", "Vitamin", "Snack"],
    },
    { label: "Dịch vụ", to: "services" },
    { label: "Thư viện", to: "lib" },
    { label: "Liên hệ", to: "contact" },
  ];

  return (
    <>
      {/* Header - Ẩn khi sidebar mở */}
      {!sidebarOpen && (
        <header
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isRolled ? "bg-white shadow-md py-2" : "bg-white py-3"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
            {/* Left: Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden block text-orange-600 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <NavLink to="/" className="flex items-center gap-2">
                <img src={Petlogo} alt="Logo" className="h-9" />
                <span className="font-bold text-xl text-orange-600">
                  PetCare Center
                </span>
              </NavLink>
            </div>

            {/* Menu lớn cho desktop */}
            <nav className="hidden lg:flex gap-6 font-medium text-gray-700">
              {menuItems.map((item, index) =>
                item.type === "dropdown" ? (
                  <div key={index} className="relative group">
                    <button
                      onClick={item.toggle}
                      className="hover:text-orange-500 transition flex items-center gap-1"
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {item.open && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="absolute bg-white shadow-lg rounded-lg mt-2 w-40 overflow-hidden"
                        >
                          {item.items.map((sub, i) => (
                            <button
                              key={i}
                              className="block w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition"
                            >
                              {sub}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    activeClass="text-orange-500 font-semibold"
                    className="cursor-pointer hover:text-orange-500 transition"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Auth / Avatar Section */}
            <div className="flex items-center gap-3">
              {/* Desktop: Nút Đăng nhập */}
              <div className="hidden md:block">
                <button
                  onClick={() => navigate("/login")}
                  className="px-5 py-2 bg-orange-500 text-white font-medium rounded-full shadow-sm hover:bg-orange-600 hover:shadow-md transition-all duration-300"
                >
                  Đăng nhập
                </button>
              </div>

              {/* Mobile & Tablet: Logo thay thế */}
              <div className="block md:hidden">
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full hover:bg-orange-200 transition-all duration-300"
                >
                  <img
                    src={Petlogo}
                    alt="PetCare Logo"
                    className="w-7 h-7 object-cover"
                  />
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Sidebar cho mobile/tablet */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-50 flex flex-col p-6 overflow-y-auto"
          >
            {/* Header nhỏ trong sidebar */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <img src={Petlogo} alt="Logo" className="h-8" />
                <span className="font-bold text-xl text-orange-600">
                  PetCare Center
                </span>
              </div>
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-orange-600 transition"
              >
                ✕
              </button>
            </div>

            {/* Menu trong sidebar */}
            <nav className="flex flex-col gap-3 text-gray-700 font-medium">
              {menuItems.map((item, index) =>
                item.type === "dropdown" ? (
                  <div key={index}>
                    <button
                      onClick={item.toggle}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
                    >
                      {item.label}
                      <span>{item.open ? "▲" : "▼"}</span>
                    </button>
                    <AnimatePresence>
                      {item.open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 mt-1 flex flex-col gap-2"
                        >
                          {item.items.map((sub, i) => (
                            <span
                              key={i}
                              className="block px-3 py-2 rounded-lg hover:bg-orange-100 hover:text-orange-700 transition"
                            >
                              {sub}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={item.to}
                    smooth
                    duration={500}
                    spy
                    offset={-80}
                    onClick={toggleSidebar}
                    className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderComponent;
