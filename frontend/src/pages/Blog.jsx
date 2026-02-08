import React, { useState, useMemo } from 'react';
import BlogCard from '../components/BlogCard';
import SearchFilter from '../components/SearchFilter';
import { blogPosts } from '../mockData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSDG, setSelectedSDG] = useState('all');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesSDG = selectedSDG === 'all' || post.sdgNumber.toString() === selectedSDG;
      
      return matchesSearch && matchesSDG;
    });
  }, [searchTerm, selectedSDG]);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Blog Về Biến Đổi Khí Hậu
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Khám phá các bài viết về 6 tiêu chí phát triển bền vững liên quan đến khí hậu. 
            Học hỏi, truyền cảm hứng và hành động vì một tương lai xanh.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedSDG={selectedSDG}
            onSDGChange={setSelectedSDG}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-stone-600">
            Tìm thấy <span className="font-semibold text-emerald-700">{filteredPosts.length}</span> bài viết
            {selectedSDG !== 'all' && ` cho SDG ${selectedSDG}`}
            {searchTerm && ` với từ khóa "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-stone-600 mb-4">
              Không tìm thấy bài viết nào phù hợp với tìm kiếm của bạn.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSDG('all');
              }}
              className="text-emerald-700 hover:text-emerald-800 font-semibold underline"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
