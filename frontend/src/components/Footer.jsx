import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Khí Hậu Xanh
              </span>
            </div>
            <p className="text-sm text-stone-400">
              Cùng nhau hành động vì một hành tinh xanh, bền vững cho thế hệ tương lai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-stone-400 hover:text-emerald-400 transition-colors duration-200">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-stone-400 hover:text-emerald-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-emerald-400 transition-colors duration-200">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to="/action" className="text-stone-400 hover:text-emerald-400 transition-colors duration-200">
                  Hành Động
                </Link>
              </li>
            </ul>
          </div>

          {/* SDG Topics */}
          <div>
            <h3 className="text-white font-semibold mb-4">Chủ Đề SDG</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-stone-400">SDG 13 - Hành động vì khí hậu</li>
              <li className="text-stone-400">SDG 7 - Năng lượng sạch</li>
              <li className="text-stone-400">SDG 12 - Tiêu dùng bền vững</li>
              <li className="text-stone-400">SDG 11 - Đô thị xanh</li>
              <li className="text-stone-400">SDG 15 - Bảo vệ rừng</li>
              <li className="text-stone-400">SDG 14 - Bảo vệ biển</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-stone-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@khihauxanh.vn</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-700 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-700 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-700 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-700 rounded-full hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-stone-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-stone-400 text-center md:text-left">
              © {currentYear} Khí Hậu Xanh. Giữ đại dương xanh, giữ khí hậu ổn định.
            </p>
            <p className="text-sm text-stone-400">
              Xây dựng cho học phần Tuần 12 - SDGs & Biến Đổi Khí Hậu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
