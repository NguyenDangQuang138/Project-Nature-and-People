import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, Lightbulb, Recycle, Building2, Trees, Waves,
  CheckCircle2, ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';

const Action = () => {
  const actions = [
    {
      icon: Leaf,
      sdg: 13,
      title: 'Hành Động Vì Khí Hậu',
      color: 'emerald',
      actions: [
        'Giảm sử dụng phương tiện cá nhân, ưu tiên đi bộ, xe đạp hoặc giao thông công cộng',
        'Tiết kiệm điện: tắt đèn và thiết bị điện khi không sử dụng',
        'Trồng cây xanh trong gia đình và cộng đồng',
        'Tham gia các chiến dịch nâng cao nhận thức về khí hậu',
        'Giảm tiêu thụ thịt và chuyển sang chế độ ăn nhiều rau củ hơn'
      ]
    },
    {
      icon: Lightbulb,
      sdg: 7,
      title: 'Năng Lượng Sạch',
      color: 'amber',
      actions: [
        'Thay bóng đèn thường bằng bóng đèn LED tiết kiệm năng lượng',
        'Rút phích cắm các thiết bị điện khi không sử dụng',
        'Sử dụng năng lượng mặt trời nếu có điều kiện (đèn, sạc pin)',
        'Chọn mua thiết bị điện có nhãn năng lượng hiệu quả cao',
        'Vận động trường học lắp đặt hệ thống năng lượng tái tạo'
      ]
    },
    {
      icon: Recycle,
      sdg: 12,
      title: 'Tiêu Dùng Bền Vững',
      color: 'green',
      actions: [
        'Mang theo túi vải, bình nước cá nhân khi ra ngoài',
        'Nói không với nhựa dùng một lần (ống hút, túi nilon)',
        'Mua sắm có kế hoạch để tránh lãng phí thực phẩm',
        'Chọn sản phẩm second-hand và sửa chữa thay vì vứt bỏ',
        'Phân loại rác thải và tái chế đúng cách'
      ]
    },
    {
      icon: Building2,
      sdg: 11,
      title: 'Đô Thị Bền Vững',
      color: 'blue',
      actions: [
        'Sử dụng xe buýt, tàu điện thay vì xe máy cá nhân',
        'Tham gia trồng cây xanh đô thị và chăm sóc công viên',
        'Đề xuất ý tưởng cải thiện không gian xanh trong khu vực sống',
        'Tham gia giám sát chất lượng không khí và môi trường',
        'Ủng hộ các dự án quy hoạch xanh trong cộng đồng'
      ]
    },
    {
      icon: Trees,
      sdg: 15,
      title: 'Bảo Vệ Rừng',
      color: 'lime',
      actions: [
        'Tham gia các chương trình trồng cây và bảo vệ rừng',
        'Sử dụng giấy tái chế và in hai mặt để tiết kiệm giấy',
        'Không mua sản phẩm từ gỗ bất hợp pháp',
        'Giáo dục cộng đồng về vai trò quan trọng của rừng',
        'Ủng hộ các tổ chức bảo vệ động vật hoang dã'
      ]
    },
    {
      icon: Waves,
      sdg: 14,
      title: 'Bảo Vệ Đại Dương',
      color: 'cyan',
      actions: [
        'Từ chối ống hút nhựa và đồ nhựa dùng một lần',
        'Tham gia các chiến dịch dọn rác bãi biển',
        'Không mua đồ trang trí từ san hô hay vỏ sò quý hiếm',
        'Chọn hải sản từ nguồn đánh bắt bền vững',
        'Lan tỏa thông điệp bảo vệ đại dương trên mạng xã hội'
      ]
    }
  ];

  const colorClasses = {
    emerald: 'bg-emerald-100 text-emerald-600',
    amber: 'bg-amber-100 text-amber-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    lime: 'bg-lime-100 text-lime-600',
    cyan: 'bg-cyan-100 text-cyan-600'
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Hành Động Vì Khí Hậu
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Mỗi hành động nhỏ của bạn đều tạo nên sự thay đổi lớn. 
            Dưới đây là những việc cụ thể bạn có thể làm ngay hôm nay!
          </p>
        </div>

        {/* Hero CTA */}
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl mb-16">
          <img
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg"
            alt="Take Action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/50 to-transparent flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Bắt Đầu Ngay Hôm Nay
              </h2>
              <p className="text-xl md:text-2xl text-stone-200 mb-8">
                Giữ đại dương xanh, giữ khí hậu ổn định
              </p>
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 transition-all duration-200 transform hover:scale-105"
              >
                <Link to="/blog">
                  Tìm Hiểu Thêm
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {actions.map((actionGroup, index) => {
            const Icon = actionGroup.icon;
            return (
              <Card key={index} className="border-stone-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[actionGroup.color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-500 font-semibold">SDG {actionGroup.sdg}</div>
                      <CardTitle className="text-xl text-stone-800">{actionGroup.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {actionGroup.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Commitment Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-0">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Cam Kết Hành Động</h2>
              <p className="text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
                Hãy chọn ít nhất 3 hành động từ danh sách trên và thực hiện trong vòng 30 ngày tới. 
                Chia sẻ hành động của bạn để truyền cảm hứng cho người khác!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-stone-100 transition-colors duration-200"
                >
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://khihauxanh.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chia Sẻ Trên Facebook
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <a
                    href="https://twitter.com/intent/tweet?text=Tôi%20đã%20cam%20kết%20hành%20động%20vì%20khí%20hậu!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chia Sẻ Trên Twitter
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Tài Nguyên Hữu Ích
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-stone-200 bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2">
                  Trang SDGs của Liên Hợp Quốc
                </h3>
                <p className="text-stone-600 mb-4 text-sm">
                  Thông tin chính thức về 17 mục tiêu phát triển bền vững
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  <a
                    href="https://sdgs.un.org/goals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Truy cập
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2">
                  IPCC - Ủy Ban Liên Chính Phủ
                </h3>
                <p className="text-stone-600 mb-4 text-sm">
                  Báo cáo khoa học về biến đổi khí hậu
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  <a
                    href="https://www.ipcc.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Truy cập
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2">
                  Bộ Tài Nguyên Môi Trường VN
                </h3>
                <p className="text-stone-600 mb-4 text-sm">
                  Chính sách và chương trình môi trường tại Việt Nam
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  <a
                    href="https://www.monre.gov.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Truy cập
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <div className="flex items-center">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
