import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const BlogCard = ({ post }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-stone-200 bg-white">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700 text-white border-0">
          {post.sdg}
        </Badge>
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold text-stone-800 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-200">
          {post.title}
        </h3>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-stone-600 text-sm line-clamp-3 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-xs text-stone-500 space-x-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          asChild
          variant="ghost"
          className="group/btn w-full text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors duration-200"
        >
          <Link to={`/blog/${post.slug}`} className="flex items-center justify-center">
            Đọc thêm
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
