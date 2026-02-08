import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast.error('Vui lòng nhập email hợp lệ');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Save to localStorage for demo
      const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
      subscribers.push({ email, date: new Date().toISOString() });
      localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
      
      toast.success('Đăng ký thành công! Cảm ơn bạn đã tham gia cộng đồng.');
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <div className="bg-emerald-600 p-3 rounded-full">
            <Mail className="w-6 h-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl text-stone-800">Nhận Bản Tin Khí Hậu</CardTitle>
        <CardDescription className="text-stone-600">
          Cập nhật những tin tức mới nhất về biến đổi khí hậu và phát triển bền vững
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
            disabled={isLoading}
          />
          <Button 
            type="submit"
            disabled={isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200 whitespace-nowrap"
          >
            {isLoading ? (
              'Đang xử lý...'
            ) : (
              <>
                Đăng ký
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
        <p className="text-xs text-stone-500 mt-3 text-center">
          Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
        </p>
      </CardContent>
    </Card>
  );
};

export default Newsletter;
