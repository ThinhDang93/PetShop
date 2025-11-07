import { motion } from "framer-motion";
import {
  PawPrint,
  Heart,
  Phone,
  Ambulance,
  HouseHeart,
  SquareBottomDashedScissors,
  GraduationCap,
} from "lucide-react";
import ShopSlideshow from "../../Components/ShopSlideShow";

const Home = () => {
  const images = import.meta.glob("../../assets/img/cute/*.{jpg,jpeg,png}", {
    eager: true,
  });
  const Shopimages = import.meta.glob(
    "../../assets/img/PetShop/*.{jpg,jpeg,png}",
    {
      eager: true,
    }
  );

  const imageList = Object.values(images).map((img) => img.default);

  return (
    <div className="min-h-screen bg-gradient-to from-orange-50 to-white text-gray-800">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center py-20 px-5"
        id="home"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-orange-600"
        >
          🐶 PetCare Center
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg max-w-xl"
        >
          Dịch vụ chăm sóc thú cưng toàn diện: tắm, spa, khám sức khỏe, huấn
          luyện, và khách sạn thú cưng an toàn – giúp thú cưng của bạn luôn khỏe
          mạnh & hạnh phúc!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-md hover:bg-orange-600 transition"
        >
          Đặt lịch ngay
        </motion.button>
      </section>
      {/* Giới thiệu */}
      <section
        id="about"
        className="py-20 px-8 bg-gradient-to-l from-orange-100 to-white text-gray-700"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 items-center">
          {/* Ảnh minh họa (Slideshow) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative overflow-hidden rounded-3xl shadow-lg w-full md:w-4/5 h-[400px] md:h-[500px]"
          >
            <ShopSlideshow
              images={Object.values(Shopimages).map((img) => img.default)}
            />
          </motion.div>

          {/* Nội dung */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
              Về PetCare Center
            </h2>
            <p className="text-lg leading-relaxed">
              Tại <span className="font-semibold">PetCare Center</span>, chúng
              tôi tin rằng thú cưng không chỉ là bạn đồng hành – mà là một thành
              viên thực thụ trong gia đình. Với đội ngũ chuyên gia yêu thú cưng
              và không gian thân thiện, hiện đại, chúng tôi mang đến những trải
              nghiệm chăm sóc toàn diện cho bé yêu.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <PawPrint className="text-orange-500" size={22} />
                <span>Không gian sạch sẽ, an toàn và thoải mái.</span>
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-orange-500" size={22} />
                <span>
                  Nhân viên tận tâm, yêu thương thú cưng như chính của mình.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HouseHeart className="text-orange-500" size={22} />
                <span>
                  Dịch vụ đa dạng: tắm, spa, huấn luyện, lưu trú và khám chữa
                  bệnh.
                </span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-md hover:bg-orange-600 transition"
            >
              Tìm hiểu thêm
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Dịch vụ */}
      <section className="py-16 px-8 bg-white" id="services">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">
          Dịch vụ nổi bật
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <PawPrint size={40} className="text-orange-500" />,
              title: "Tắm & Spa",
              desc: "Giúp thú cưng sạch sẽ, thơm tho và thư giãn tuyệt đối.",
            },
            {
              icon: <Heart size={40} className="text-orange-500" />,
              title: "Khám sức khỏe",
              desc: "Theo dõi sức khỏe định kỳ với đội ngũ bác sĩ thú y tận tâm.",
            },
            {
              icon: <Phone size={40} className="text-orange-500" />,
              title: "Khách sạn thú cưng",
              desc: "Không gian an toàn, tiện nghi khi bạn đi công tác hoặc du lịch.",
            },
            {
              icon: <GraduationCap size={40} className="text-orange-500" />,
              title: "Huấn luyện thú cưng",
              desc: "Huấn luyện thú cưng của bạn từ cơ bản đến nâng cao , biết tuân lệnh , thực hiện các hành động theo chỉ dẫn của bạn",
            },
            {
              icon: (
                <SquareBottomDashedScissors
                  size={40}
                  className="text-orange-500"
                />
              ),
              title: "Cắt tỉa lông thú cưng",
              desc: "Bạn muốn tạo hình , tạo kiểu cho thú cưng của mình , liên hệ ngay bên chúng tôi để được tư vấn những mode hiện đại nhất cho pet của bạn",
            },
            {
              icon: <Ambulance size={40} className="text-orange-500" />,
              title: "Cứu hộ thú cưng",
              desc: "Các bé có vấn đề về sức khoẻ , đừng lo lắng , chỉ cần bạn gọi chúng tôi sẽ có mặt 24/24",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 bg-orange-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Thư viện */}
      <section className="py-16 px-8 bg-white" id="lib">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">
          Thư viện hình ảnh
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {imageList.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition-all"
            >
              <img
                src={src}
                alt={`Pet ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>{" "}
      </section>
      {/* Liên hệ */}
      <section
        className="bg-gradient-to-r from-orange-100 to-white py-16 text-center flex flex-col items-center"
        id="contact"
      >
        {/* Tiêu đề */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-4"
        >
          Liên hệ với chúng tôi
        </motion.h2>

        {/* Thông tin liên hệ */}
        <p className="text-gray-600 mb-6">
          📍 123 Trần Hưng Đạo, Quận 1, TP.HCM | ☎️ 0909 123 456
        </p>

        {/* Nút liên hệ */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition mb-8"
        >
          Gửi tin nhắn
        </motion.button>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-orange-200"
        >
          <iframe
            title="PetCare Center Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.482361768741!2d106.69312147481558!3d10.774164659207275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ec4ff68d7%3A0x8bbf7cbef4bbf9e3!2zMTIzIFRy4bqnbiBIxrBuZyDEkOG6oW8sIFF14bqtbiAxLCBI4buTIENow60gTWluaCBOaA!5e0!3m2!1svi!2s!4v1730875200000!5m2!1svi!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>{" "}
    </div>
  );
};

export default Home;
