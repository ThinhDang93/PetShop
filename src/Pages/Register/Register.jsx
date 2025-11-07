import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Petlogo from "../../../public/Petlogo.png";
import png2 from "../../assets/PetShop/png2.jpg";

const Register = () => {
  const frmRegister = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "USER",
      id: -1,
      avatar: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập họ tên"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
      password: Yup.string()
        .min(6, "Mật khẩu tối thiểu 6 ký tự")
        .required("Vui lòng nhập mật khẩu"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Số điện thoại chỉ được chứa số")
        .required("Vui lòng nhập số điện thoại"),
      birthday: Yup.string().required("Vui lòng nhập ngày sinh"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${png2})`,
      }}
    >
      {/* Overlay làm mờ nhẹ */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* Form đăng ký */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-orange-100"
      >
        {/* Logo & Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <img
            src={Petlogo}
            alt="PetCare Logo"
            className="w-16 h-16 mx-auto mb-3 rounded-full shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800">PetCare Center</h2>
          <p className="text-gray-500 text-sm mt-1">
            Đăng ký để cùng yêu thương thú cưng 🐾
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={frmRegister.handleSubmit} className="space-y-5">
          {/* Họ và tên */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Họ và tên
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nguyễn Văn A"
                value={frmRegister.values.name}
                onChange={frmRegister.handleChange}
                onBlur={frmRegister.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-all ${
                  frmRegister.touched.name && frmRegister.errors.name
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-orange-300"
                }`}
              />
            </div>
            {frmRegister.touched.name && frmRegister.errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {frmRegister.errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={frmRegister.values.email}
                onChange={frmRegister.handleChange}
                onBlur={frmRegister.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-all ${
                  frmRegister.touched.email && frmRegister.errors.email
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-orange-300"
                }`}
              />
            </div>
            {frmRegister.touched.email && frmRegister.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {frmRegister.errors.email}
              </p>
            )}
          </div>

          {/* Mật khẩu */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={frmRegister.values.password}
                onChange={frmRegister.handleChange}
                onBlur={frmRegister.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-all ${
                  frmRegister.touched.password && frmRegister.errors.password
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-orange-300"
                }`}
              />
            </div>
            {frmRegister.touched.password && frmRegister.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {frmRegister.errors.password}
              </p>
            )}
          </div>

          {/* Số điện thoại */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1">
              Số điện thoại
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa-solid fa-phone"></i>
              </span>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="0123456789"
                value={frmRegister.values.phone}
                onChange={frmRegister.handleChange}
                onBlur={frmRegister.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-all ${
                  frmRegister.touched.phone && frmRegister.errors.phone
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-orange-300"
                }`}
              />
            </div>
            {frmRegister.touched.phone && frmRegister.errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {frmRegister.errors.phone}
              </p>
            )}
          </div>

          {/* Ngày sinh */}
          <div>
            <label htmlFor="birthday" className="block text-gray-700 mb-1">
              Ngày sinh
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <i className="fa-solid fa-cake-candles"></i>
              </span>
              <input
                id="birthday"
                name="birthday"
                type="date"
                value={frmRegister.values.birthday}
                onChange={frmRegister.handleChange}
                onBlur={frmRegister.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-all ${
                  frmRegister.touched.birthday && frmRegister.errors.birthday
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-orange-300"
                }`}
              />
            </div>
            {frmRegister.touched.birthday && frmRegister.errors.birthday && (
              <p className="text-red-500 text-sm mt-1">
                {frmRegister.errors.birthday}
              </p>
            )}
          </div>

          {/* Giới tính */}
          <div>
            <span className="block text-gray-700 mb-1">Giới tính</span>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="true"
                  checked={frmRegister.values.gender === true}
                  onChange={() => frmRegister.setFieldValue("gender", true)}
                  className="accent-orange-500"
                />
                Nam
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="false"
                  checked={frmRegister.values.gender === false}
                  onChange={() => frmRegister.setFieldValue("gender", false)}
                  className="accent-orange-500"
                />
                Nữ
              </label>
            </div>
          </div>

          {/* Nút đăng ký */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={frmRegister.isSubmitting}
            className={`w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${
              frmRegister.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {frmRegister.isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Đã có tài khoản?{" "}
          <NavLink
            to="/login"
            className="text-orange-500 hover:underline font-semibold"
          >
            Đăng nhập ngay
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
