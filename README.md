# Fuji - Website Câu Lạc Bộ Tiếng Nhật

![Fuji Club Banner](https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/background.jpg)

Đây là trang web chính thức cho Câu lạc bộ Tiếng Nhật Fuji, được xây dựng với mục tiêu tạo ra một không gian trực tuyến để kết nối các thành viên, chia sẻ thông tin về sự kiện và giới thiệu văn hóa Nhật Bản đến cộng đồng.

## ✨ Tính Năng Nổi Bật

- **Thiết kế hiện đại & đáp ứng (Responsive):** Giao diện được xây dựng để tương thích và hoạt động mượt mà trên mọi thiết bị, từ máy tính để bàn đến điện thoại di động.
- **Chế độ Sáng/Tối:** Người dùng có thể chuyển đổi giữa giao diện sáng và tối để phù hợp với sở thích cá nhân.
- **Giới thiệu thành viên:** Hiển thị danh sách các thành viên theo từng ban, giúp mọi người dễ dàng làm quen và kết nối.
- **Lịch sự kiện:** Cập nhật các sự kiện sắp diễn ra và lưu trữ thông tin về các sự kiện đã qua.
- **Tối ưu hóa hình ảnh:** Sử dụng `next/image` để đảm bảo hình ảnh được tải nhanh và tối ưu.

## 🚀 Công Nghệ Sử Dụng

Dự án này được xây dựng trên một nền tảng công nghệ hiện đại và hiệu suất cao:

- **Framework:** [**Next.js**](https://nextjs.org/) - Một React framework mạnh mẽ cho các ứng dụng web sản xuất.
- **Ngôn ngữ:** [**TypeScript**](https://www.typescriptlang.org/) - Giúp mã nguồn trở nên rõ ràng, dễ bảo trì và hạn chế lỗi.
- **Giao diện & UI:**
  - [**React**](https://reactjs.org/) - Thư viện JavaScript phổ biến để xây dựng giao diện người dùng.
  - [**Tailwind CSS**](https://tailwindcss.com/) - Một utility-first CSS framework để tạo kiểu nhanh chóng và tùy biến cao.
  - [**ShadCN/UI**](https://ui.shadcn.com/) - Bộ sưu tập các thành phần UI có thể tái sử dụng, được xây dựng trên Radix UI và Tailwind CSS.
  - [**Lucide React**](https://lucide.dev/) - Bộ sưu tập icon đẹp và nhất quán.
- **AI & Generative:**
  - [**Genkit**](https://firebase.google.com/docs/genkit) - Một framework mã nguồn mở để xây dựng các ứng dụng AI production-ready.

## ⚙️ Cài Đặt và Chạy Trên Local

Để chạy dự án này trên máy của bạn, hãy làm theo các bước dưới đây.

### Điều kiện cần có

- [Node.js](https://nodejs.org/en/) (phiên bản 18.x trở lên)
- [npm](https://www.npmjs.com/) hoặc [yarn](https://yarnpkg.com/)

### Hướng Dẫn Cài Đặt

1.  **Clone Repository**

    Mở terminal của bạn và clone repository từ GitHub:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
    (Thay thế `your-username/your-repository-name` bằng đường dẫn thực tế đến repo của bạn)

2.  **Di chuyển vào thư mục dự án**
    ```bash
    cd your-repository-name
    ```

3.  **Cài đặt các gói phụ thuộc (Dependencies)**

    Sử dụng npm hoặc yarn để cài đặt tất cả các gói cần thiết được định nghĩa trong `package.json`:
    ```bash
    npm install
    ```
    hoặc nếu bạn dùng yarn:
    ```bash
    yarn install
    ```

4.  **Chạy máy chủ phát triển (Development Server)**

    Sau khi cài đặt xong, khởi động máy chủ phát triển:
    ```bash
    npm run dev
    ```
    Thao tác này sẽ khởi chạy ứng dụng ở chế độ phát triển, được tối ưu hóa với Turbopack.

5.  **Mở ứng dụng trên trình duyệt**

    Mở trình duyệt và truy cập vào [http://localhost:9002](http://localhost:9002) để xem ứng dụng của bạn.

Bây giờ bạn đã có thể bắt đầu khám phá và phát triển dự án! Mọi thay đổi bạn thực hiện trong mã nguồn sẽ được tự động cập nhật trên trình duyệt.

## 📄 Giấy Phép

Dự án này được cấp phép theo Giấy phép MIT. Xem tệp `LICENSE` để biết thêm chi tiết.
