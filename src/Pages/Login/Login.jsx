import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import Petlogo from "../../../public/Petlogo.png";
import { motion } from "framer-motion";
import png1 from "../../assets/PetShop/png1.jpg";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
    password: Yup.string().required("Mật khẩu không được để trống"),
  });

  const frmLogin = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${png1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay mờ để chữ nổi bật hơn */}
      <div className="absolute inset-0 bg-orange-100/70 backdrop-blur-[2px]" />

      {/* Nội dung chính */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-md border border-orange-100"
      >
        {/* Logo & Heading */}
        <div className="text-center mb-6">
          <img
            src={Petlogo}
            alt="PetCare Logo"
            className="w-16 h-16 mx-auto mb-3 rounded-full shadow-md"
          />
          <h2 className="text-3xl font-bold text-gray-800">PetCare Center</h2>
          <p className="text-gray-500 mt-1 text-sm">
            Yêu thương từ trái tim 🐾
          </p>
        </div>

        {/* Form */}
        <form onSubmit={frmLogin.handleSubmit} className="space-y-5">
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
                type="email"
                name="email"
                placeholder="Nhập email..."
                value={frmLogin.values.email}
                onChange={frmLogin.handleChange}
                onBlur={frmLogin.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-all ${
                  frmLogin.touched.email && frmLogin.errors.email
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-orange-300"
                }`}
              />
            </div>
            {frmLogin.touched.email && frmLogin.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {frmLogin.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
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
                type="password"
                name="password"
                placeholder="Nhập mật khẩu..."
                value={frmLogin.values.password}
                onChange={frmLogin.handleChange}
                onBlur={frmLogin.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-all ${
                  frmLogin.touched.password && frmLogin.errors.password
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-300 focus:ring-orange-300"
                }`}
              />
            </div>
            {frmLogin.touched.password && frmLogin.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {frmLogin.errors.password}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={frmLogin.isSubmitting}
            className={`w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${
              frmLogin.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {frmLogin.isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Chưa có tài khoản?{" "}
          <NavLink
            to="/register"
            className="text-orange-500 hover:underline font-semibold"
          >
            Đăng ký ngay
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
