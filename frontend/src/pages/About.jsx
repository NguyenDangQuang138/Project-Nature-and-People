import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Website blog giáo dục về biến đổi khí hậu gắn với 17 tiêu chí phát triển bền vững 
            (SDGs) của Liên Hợp Quốc, xây dựng cho học phần Tuần 12.
          </p>
        </div>

        {/* Mission Image */}
        <div className="relative h-80 rounded-xl overflow-hidden shadow-xl mb-16">
          <img
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
            alt="Mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">
                Giữ Đại Dương Xanh, Giữ Khí Hậu Ổn Định
              </h2>
              <p className="text-lg text-stone-200">
                Cùng nhau hành động vì một tương lai bền vững
              </p>
            </div>
          </div>
        </div>

        {/* Why This Blog */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Lý Do Xây Dựng Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-stone-200 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Mục Tiêu Giáo Dục</h3>
                <p className="text-stone-600 leading-relaxed">
                  Nâng cao nhận thức về hiện trạng biến đổi khí hậu và các giải pháp phát triển 
                  bền vững cho sinh viên và cộng đồng. Cung cấp kiến thức dễ hiểu, khoa học về 
                  6 SDGs liên quan trực tiếp đến khí hậu.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Truyền Cảm Hứng</h3>
                <p className="text-stone-600 leading-relaxed">
                  Khuyến khích mọi người thay đổi hành vi và lối sống hướng tới sự bền vững. 
                  Mỗi bài viết đều kèm theo lời kêu gọi hành động cụ thể, phù hợp với cá nhân 
                  và cộng đồng sinh viên.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Xây Dựng Cộng Đồng</h3>
                <p className="text-stone-600 leading-relaxed">
                  Kết nối những người quan tâm đến môi trường và khí hậu. Tạo không gian chia sẻ 
                  ý tưởng, kinh nghiệm và cùng nhau hành động vì một hành tinh xanh hơn, 
                  bền vững hơn.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Hành Động Thực Tế</h3>
                <p className="text-stone-600 leading-relaxed">
                  Không chỉ dừng lại ở lý thuyết, chúng tôi đưa ra các hành động thiết thực 
                  mà mỗi người có thể thực hiện ngay. Từ việc tiết kiệm năng lượng đến tham gia 
                  các chiến dịch môi trường.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SDGs Focus */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-md">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">
              6 Tiêu Chí SDGs Chúng Tôi Tập Trung
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Blog tập trung vào 6 trong số 17 mục tiêu phát triển bền vững của Liên Hợp Quốc 
              có liên quan trực tiếp nhất đến biến đổi khí hậu:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">13</span>
                <div>
                  <h4 className="font-bold text-stone-800">Hành Động Vì Khí Hậu</h4>
                  <p className="text-sm text-stone-600">Ứng phó khẩn cấp với biến đổi khí hậu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">7</span>
                <div>
                  <h4 className="font-bold text-stone-800">Năng Lượng Sạch</h4>
                  <p className="text-sm text-stone-600">Năng lượng giá cả phải chăng và sạch</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">12</span>
                <div>
                  <h4 className="font-bold text-stone-800">Tiêu Dùng Bền Vững</h4>
                  <p className="text-sm text-stone-600">Sản xuất và tiêu dùng có trách nhiệm</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">11</span>
                <div>
                  <h4 className="font-bold text-stone-800">Đô Thị Bền Vững</h4>
                  <p className="text-sm text-stone-600">Thành phố và cộng đồng bền vững</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">15</span>
                <div>
                  <h4 className="font-bold text-stone-800">Bảo Vệ Đất Liền</h4>
                  <p className="text-sm text-stone-600">Hệ sinh thái trên cạn và đa dạng sinh học</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                <span className="text-2xl font-bold text-emerald-600">14</span>
                <div>
                  <h4 className="font-bold text-stone-800">Bảo Vệ Đại Dương</h4>
                  <p className="text-sm text-stone-600">Tài nguyên nước và hệ sinh thái biển</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meaning of Sustainability */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center">
                Ý Nghĩa Của Phát Triển Bền Vững
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-stone-700 leading-relaxed mb-4">
                  Phát triển bền vững không chỉ là khẩu hiệu mà là con đường sống hài hòa với 
                  thiên nhiên. Đó là việc đáp ứng nhu cầu hiện tại mà không làm tổn hại đến 
                  khả năng đáp ứng nhu cầu của thế hệ tương lai.
                </p>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Trong bối cảnh biến đổi khí hậu ngày càng nghiêm trọng, phát triển bền vững 
                  trở thành giải pháp cốt lõi để con người có thể tiếp tục phát triển kinh tế - 
                  xã hội mà vẫn bảo vệ được môi trường sống của chính mình.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Mỗi chúng ta đều có trách nhiệm và khả năng góp phần vào sự phát triển bền vững 
                  thông qua những hành động cụ thể trong cuộc sống hàng ngày. Hãy cùng nhau 
                  hành động vì một tương lai xanh!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Sẵn Sàng Tham Gia Hành Động?
          </h2>
          <p className="text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
            Khám phá các bài viết và tìm cách bạn có thể đóng góp cho một hành tinh bền vững hơn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-700 hover:bg-stone-100 transition-colors duration-200"
            >
              <Link to="/blog">Đọc Blog</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Link to="/action">Xem Hành Động</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
