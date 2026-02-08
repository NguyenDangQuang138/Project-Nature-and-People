import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Email không hợp lệ');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Save to localStorage for demo
      const submissions = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
      submissions.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions));
      
      toast.success('Tin nhắn đã được gửi! Chúng tôi sẽ liên hệ sớm nhất.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="border-stone-200">
      <CardHeader>
        <CardTitle className="text-2xl text-stone-800">Liên Hệ Với Chúng Tôi</CardTitle>
        <CardDescription className="text-stone-600">
          Có câu hỏi hoặc muốn đóng góp? Hãy để lại tin nhắn cho chúng tôi.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-stone-700">
                Họ và tên <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                disabled={isLoading}
                className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-stone-700">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                disabled={isLoading}
                className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-stone-700">
              Chủ đề
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Tiêu đề tin nhắn"
              disabled={isLoading}
              className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-stone-700">
              Tin nhắn <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Nội dung tin nhắn của bạn..."
              rows={6}
              disabled={isLoading}
              className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          
          <Button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200"
          >
            {isLoading ? (
              'Đang gửi...'
            ) : (
              <>
                Gửi tin nhắn
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
