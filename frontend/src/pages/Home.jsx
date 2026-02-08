import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Leaf, Users, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Newsletter from '../components/Newsletter';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../mockData';

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6"
            alt="Climate Change Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Biến Đổi Khí Hậu
              <br />
              <span className="text-emerald-400">Thách Thức Hôm Nay</span>
              <br />
              Trách Nhiệm Cho Tương Lai
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-stone-200">
              Cùng nhau hành động vì một hành tinh xanh, bền vững cho thế hệ tương lai.
              Mỗi hành động nhỏ đều tạo nên sự thay đổi lớn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 transition-all duration-200 transform hover:scale-105"
              >
                <Link to="/blog">
                  Khám Phá Blog
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-emerald-700 text-lg px-8 py-6 transition-all duration-200"
              >
                <Link to="/action">Tham Gia Hành Động</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <p className="text-lg text-stone-600">
              Nâng cao nhận thức về biến đổi khí hậu và thúc đẩy hành động tích cực 
              thông qua 17 tiêu chí phát triển bền vững của Liên Hợp Quốc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-stone-200 bg-white">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Khí Hậu</h3>
                <p className="text-stone-600">
                  Hiểu rõ nguyên nhân và tác động của biến đổi khí hậu
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-stone-200 bg-white">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Bền Vững</h3>
                <p className="text-stone-600">
                  Áp dụng 17 tiêu chí SDGs vào cuộc sống hàng ngày
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-stone-200 bg-white">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Cộng Đồng</h3>
                <p className="text-stone-600">
                  Kết nối và hành động cùng nhau vì môi trường
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-stone-200 bg-white">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Hành Động</h3>
                <p className="text-stone-600">
                  Thực hiện các giải pháp cụ thể, thiết thực
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Bài Viết Nổi Bật
            </h2>
            <p className="text-lg text-stone-600">
              Khám phá các chủ đề về biến đổi khí hậu và phát triển bền vững
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-colors duration-200"
            >
              <Link to="/blog">
                Xem Tất Cả Bài Viết
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bảo Vệ Khí Hậu, Bảo Vệ Sự Sống
          </h2>
          <p className="text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
            Hãy cùng nhau tạo nên sự thay đổi tích cực. Mỗi hành động nhỏ của bạn đều 
            góp phần xây dựng một tương lai xanh và bền vững.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-emerald-700 hover:bg-stone-100 text-lg px-8 py-6 transition-all duration-200 transform hover:scale-105"
          >
            <Link to="/action">
              Bắt Đầu Hành Động Ngay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Home;
