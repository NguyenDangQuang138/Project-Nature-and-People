# PRD - Website Blog Biến Đổi Khí Hậu & SDGs

**Dự án**: Blog Giáo Dục về Biến Đổi Khí Hậu gắn với 17 Tiêu Chí Phát Triển Bền Vững (SDGs)  
**Ngày tạo**: 08/12/2024  
**Trạng thái**: Frontend MVP Hoàn Thành (Mock Data)

---

## 1. Tổng Quan Dự Án

### 1.1. Mục Tiêu
- Xây dựng website blog giáo dục về biến đổi khí hậu cho học phần Tuần 12
- Tập trung vào 6/17 SDGs liên quan trực tiếp đến khí hậu
- Nâng cao nhận thức và thúc đẩy hành động tích cực về môi trường
- Phục vụ sinh viên và cộng đồng quan tâm về phát triển bền vững

### 1.2. User Personas
- **Sinh viên**: Cần tài liệu học tập về biến đổi khí hậu và SDGs
- **Người quan tâm môi trường**: Muốn tìm hiểu và hành động vì khí hậu
- **Cộng đồng giáo dục**: Giảng viên, nhà nghiên cứu về phát triển bền vững

---

## 2. Kiến Trúc Hệ Thống

### 2.1. Tech Stack
- **Frontend**: React 19, React Router, TailwindCSS, Shadcn UI
- **Backend**: FastAPI, Python (Chưa triển khai)
- **Database**: MongoDB (Chưa triển khai)
- **State Management**: React Hooks, LocalStorage (cho demo)

### 2.2. Design System
- **Color Palette**: Neutral earth tones (stone, emerald, teal)
- **Typography**: System fonts, clear hierarchy
- **Components**: Shadcn UI components
- **Icons**: Lucide React

---

## 3. Tính Năng Đã Triển Khai (Frontend with Mock Data)

### 3.1. Trang Chủ (Home)
✅ Hero section với hình ảnh và CTA mạnh mẽ  
✅ 4 cards giới thiệu sứ mệnh (Khí Hậu, Bền Vững, Cộng Đồng, Hành Động)  
✅ Featured posts (3 bài nổi bật)  
✅ CTA section "Bảo Vệ Khí Hậu, Bảo Vệ Sự Sống"  
✅ Newsletter subscription form  

### 3.2. Trang Blog
✅ Search functionality (tìm kiếm theo tiêu đề, excerpt, tags)  
✅ Filter by SDG (lọc theo 6 SDGs)  
✅ Results counter  
✅ Grid layout (3 columns) với BlogCard component  
✅ Responsive design  

### 3.3. Trang Blog Detail
✅ Full article layout với các sections:
  - Introduction (highlighted)
  - Vấn Đề Hiện Tại
  - Nguyên Nhân
  - Tác Động
  - Giải Pháp Bền Vững
  - Video tham khảo (YouTube embed)
  - Vai Trò Của Sinh Viên
  - CTA section
✅ Tags display  
✅ Comment section (functional with mock data)  
✅ Related posts (same SDG)  
✅ Newsletter form  
✅ Share functionality  

### 3.4. Trang Giới Thiệu (About)
✅ Mission statement  
✅ 4 reasons why this blog exists  
✅ 6 SDGs focus area explanation  
✅ Meaning of sustainability section  
✅ CTA to Blog and Action pages  

### 3.5. Trang Hành Động (Action)
✅ Hero section with CTA  
✅ 6 action cards (one for each SDG) with specific actions  
✅ Commitment section với social sharing  
✅ Resources section (UN SDGs, IPCC, Vietnam MONRE)  
✅ Contact form (functional with mock data)  
✅ Newsletter form  

### 3.6. Components Chung
✅ Navbar - Fixed top, responsive, active states  
✅ Footer - Links, SDG topics, social media, contact info  
✅ BlogCard - Hover effects, image, excerpt, CTA  
✅ SearchFilter - Search input + SDG dropdown  
✅ CommentSection - Display comments, add new comment  
✅ Newsletter - Email subscription form  
✅ ContactForm - Name, email, subject, message fields  

---

## 4. Nội Dung 6 SDGs (Mock Data)

### SDG 13 - Hành Động Vì Khí Hậu
- Vấn đề: Nhiệt độ tăng 1.1°C, thời tiết cực đoan
- Giải pháp: Năng lượng tái tạo, trồng cây, giảm carbon
- Video ID: T4FDU00X_T0

### SDG 7 - Năng Lượng Sạch
- Vấn đề: 80% năng lượng từ hóa thạch, 75% phát thải
- Giải pháp: Điện mặt trời, gió, lưới thông minh
- Video ID: Kz8YTQ3rYmU

### SDG 12 - Tiêu Dùng Bền Vững
- Vấn đề: 2 tỷ tấn rác/năm, 1/3 thực phẩm lãng phí
- Giải pháp: 3R (Reduce, Reuse, Recycle), zero waste
- Video ID: R_4C-B40xx8

### SDG 11 - Đô Thị Bền Vững
- Vấn đề: 70% phát thải từ đô thị, ô nhiễm không khí
- Giải pháp: Giao thông công cộng, mảng xanh đô thị
- Video ID: QfFOesfrFDU

### SDG 15 - Bảo Vệ Rừng
- Vấn đề: Mất 10 triệu ha rừng/năm, tuyệt chủng loài
- Giải pháp: Trồng rừng, quản lý bền vững, bảo vệ đa dạng sinh học
- Video ID: ddMAK-uHjAM

### SDG 14 - Bảo Vệ Đại Dương
- Vấn đề: 8-12 triệu tấn nhựa/năm, axit hóa biển
- Giải pháp: Giảm nhựa, khu bảo tồn biển, phục hồi san hô
- Video ID: 0Puv0Pss33M

---

## 5. Hình Ảnh Đã Sử Dụng

1. Hero: Forest silhouette sunset
2. SDG 13: Melting iceberg
3. SDG 7: Solar panels aerial
4. SDG 12: Hands holding plant
5. SDG 11: Green building architecture
6. SDG 15: Lush forest ecosystem
7. SDG 14: School of fish
8. About: Trees upward view
9. Action: Hands with seedling

---

## 6. Backend API Contracts (Chưa Triển Khai)

### 6.1. Blog Posts API
```
GET /api/posts - Lấy tất cả bài viết
GET /api/posts/:slug - Lấy chi tiết bài viết
GET /api/posts?sdg=13 - Lọc theo SDG
GET /api/posts?search=khí+hậu - Tìm kiếm
```

### 6.2. Comments API
```
GET /api/posts/:id/comments - Lấy comments của bài viết
POST /api/posts/:id/comments - Thêm comment mới
```

### 6.3. Newsletter API
```
POST /api/newsletter/subscribe - Đăng ký nhận bản tin
```

### 6.4. Contact API
```
POST /api/contact - Gửi tin nhắn liên hệ
```

---

## 7. Database Schema (Chưa Triển Khai)

### 7.1. Posts Collection
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String,
  sdgNumber: Number,
  sdgName: String,
  image: String,
  excerpt: String,
  content: {
    introduction: String,
    problem: String,
    causes: [String],
    impacts: [String],
    solutions: [String],
    studentRole: String,
    cta: String
  },
  videoId: String,
  tags: [String],
  author: String,
  date: Date,
  readTime: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 7.2. Comments Collection
```javascript
{
  _id: ObjectId,
  postId: ObjectId,
  author: String,
  email: String,
  content: String,
  avatar: String,
  createdAt: Date
}
```

### 7.3. Newsletter Collection
```javascript
{
  _id: ObjectId,
  email: String,
  subscribedAt: Date,
  active: Boolean
}
```

### 7.4. Contact Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // 'new', 'read', 'replied'
  createdAt: Date
}
```

---

## 8. Backlog - Các Tính Năng Cần Triển Khai

### P0 (Critical - Next Phase)
- [ ] Backend API implementation (FastAPI)
- [ ] MongoDB database setup and integration
- [ ] Replace mock data with real API calls
- [ ] User authentication (optional)
- [ ] Admin panel để quản lý bài viết

### P1 (High Priority)
- [ ] Email service cho newsletter
- [ ] Contact form email notifications
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Analytics integration
- [ ] Performance optimization (lazy loading, code splitting)

### P2 (Medium Priority)
- [ ] Social media share count
- [ ] Comment moderation system
- [ ] RSS feed
- [ ] Multi-language support (EN/VI)
- [ ] Dark mode toggle

### P3 (Nice to Have)
- [ ] User profiles và saved posts
- [ ] Related posts recommendation algorithm
- [ ] Reading progress indicator
- [ ] Print-friendly version
- [ ] Podcast/Audio version của bài viết

---

## 9. Next Steps

1. **Backend Development**
   - Setup FastAPI project structure
   - Create MongoDB models
   - Implement CRUD endpoints for posts
   - Integrate with frontend

2. **Testing**
   - Unit tests cho API endpoints
   - Integration tests cho frontend-backend
   - E2E testing với Playwright

3. **Deployment**
   - Setup production environment
   - Configure CI/CD pipeline
   - Domain and SSL setup

4. **Content**
   - Finalize Vietnamese content cho 6 SDGs
   - Add more blog posts (target: 12-15 posts)
   - Collect real testimonials/comments

---

**Cập nhật lần cuối**: 08/12/2024  
**Phiên bản**: 1.0.0 (Frontend MVP)
