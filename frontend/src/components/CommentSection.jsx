import React, { useState } from 'react';
import { MessageCircle, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { toast } from 'sonner';

const CommentSection = ({ postId, comments = [] }) => {
  const [localComments, setLocalComments] = useState(comments);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newComment.author.trim() || !newComment.content.trim()) {
      toast.error('Vui lòng điền đầy đủ thông tin');
      return;
    }

    const comment = {
      id: Date.now(),
      author: newComment.author,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newComment.author)}&background=8B7355&color=fff`,
      date: new Date().toISOString().split('T')[0],
      content: newComment.content
    };

    setLocalComments([...localComments, comment]);
    setNewComment({ author: '', content: '' });
    toast.success('Bình luận đã được thêm!');
  };

  return (
    <Card className="border-stone-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-stone-800">
          <MessageCircle className="w-5 h-5 text-emerald-600" />
          <span>Bình luận ({localComments.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Existing Comments */}
        <div className="space-y-4">
          {localComments.length === 0 ? (
            <p className="text-stone-500 text-center py-8">
              Chưa có bình luận nào. Hãy là người đầu tiên bình luận!
            </p>
          ) : (
            localComments.map((comment) => (
              <div key={comment.id} className="flex space-x-3 p-4 bg-stone-50 rounded-lg border border-stone-200">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={comment.avatar} alt={comment.author} />
                  <AvatarFallback className="bg-emerald-600 text-white">
                    <User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-stone-800">{comment.author}</span>
                    <span className="text-xs text-stone-500">{comment.date}</span>
                  </div>
                  <p className="text-stone-700">{comment.content}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* New Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-stone-200">
          <h4 className="font-semibold text-stone-800">Để lại bình luận</h4>
          <Input
            placeholder="Tên của bạn"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
          />
          <Textarea
            placeholder="Chia sẻ suy nghĩ của bạn..."
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            rows={4}
            className="border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
          />
          <Button 
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200"
          >
            Gửi bình luận
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommentSection;
