import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag, Share2, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import CommentSection from '../components/CommentSection';
import Newsletter from '../components/Newsletter';
import { blogPosts, comments } from '../mockData';
import { toast } from 'sonner';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const postComments = comments[post?.id] || [];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.sdgNumber === post.sdgNumber)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link đã được sao chép!');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="mb-6 text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors duration-200"
        >
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Link>
        </Button>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-700 text-white">
              {post.sdg} - {post.sdgName}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-stone-600 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-stone-600 hover:text-emerald-700 hover:bg-emerald-50"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Chia sẻ
              </Button>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <Card className="mb-6 border-emerald-200 bg-emerald-50">
              <CardContent className="pt-6">
                <p className="text-lg text-stone-700 leading-relaxed">
                  {post.content.introduction}
                </p>
              </CardContent>
            </Card>

            <section className="mb-8 bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Vấn Đề Hiện Tại</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                {post.content.problem}
              </p>
            </section>

            <section className="mb-8 bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Nguyên Nhân</h2>
              <ul className="space-y-2">
                {post.content.causes.map((cause, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span className="text-stone-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8 bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Tác Động</h2>
              <ul className="space-y-2">
                {post.content.impacts.map((impact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-stone-700">{impact}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8 bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Giải Pháp Bền Vững</h2>
              <ul className="space-y-2">
                {post.content.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="text-stone-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Video Section */}
            {post.videoId && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-stone-800 mb-4">Video Tham Khảo</h2>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${post.videoId}`}
                    title={post.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </section>
            )}

            <section className="mb-8 bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Vai Trò Của Sinh Viên</h2>
              <p className="text-stone-700 leading-relaxed">
                {post.content.studentRole}
              </p>
            </section>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-0">
              <CardContent className="pt-8 pb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Lời Kêu Gọi Hành Động</h2>
                <p className="text-xl mb-6 text-emerald-50">
                  {post.content.cta}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-stone-100 transition-colors duration-200"
                >
                  <Link to="/action">
                    Tham Gia Hành Động
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <div className="flex items-center flex-wrap gap-2 mb-8">
            <Tag className="w-4 h-4 text-stone-600" />
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-stone-300 text-stone-700">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Comments */}
          <div className="mb-8">
            <CommentSection postId={post.id} comments={postComments} />
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Bài Viết Liên Quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-stone-200">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <Badge className="mb-2 bg-emerald-600 text-white">
                        {relatedPost.sdg}
                      </Badge>
                      <h3 className="text-lg font-bold text-stone-800 group-hover:text-emerald-700 transition-colors duration-200">
                        {relatedPost.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter */}
        <div className="mt-16">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
