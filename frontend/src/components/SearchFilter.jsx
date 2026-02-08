import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const SearchFilter = ({ searchTerm, onSearchChange, selectedSDG, onSDGChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400" />
          <Input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        {/* SDG Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400 z-10 pointer-events-none" />
          <Select value={selectedSDG} onValueChange={onSDGChange}>
            <SelectTrigger className="pl-10 border-stone-300 focus:border-emerald-500 focus:ring-emerald-500">
              <SelectValue placeholder="Lọc theo SDG" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả SDG</SelectItem>
              <SelectItem value="7">SDG 7 - Năng lượng sạch</SelectItem>
              <SelectItem value="11">SDG 11 - Đô thị bền vững</SelectItem>
              <SelectItem value="12">SDG 12 - Tiêu dùng bền vững</SelectItem>
              <SelectItem value="13">SDG 13 - Hành động vì khí hậu</SelectItem>
              <SelectItem value="14">SDG 14 - Bảo vệ đại dương</SelectItem>
              <SelectItem value="15">SDG 15 - Bảo vệ đất liền</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
