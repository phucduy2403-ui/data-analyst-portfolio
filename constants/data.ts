import { Project, Skill } from '../types';

export const portfolioData = {
  personal: {
    firstName: "Duy",
    lastName: "Phuc",
    logoName: "PHUCDUY.DATA",
    email: "phucduy2403@dulieu11.com",
    phone: "+84 70 656 2435",
    address: "Can Tho City, Vietnam",
    role: "Data Analyst & AI Specialist",
    shortDesc: "Biến đổi dữ liệu thô thành chiến lược. Khai phá tiềm năng ẩn giấu bằng AI & Analytics."
  },
  
  hero: {
    tagline: "Data Intelligence 2026",
    primaryButton: "Xem Dự Án",
    secondaryButton: "Liên Hệ"
  },

  about: {
    title: "Về Bản Thân",
    description: "Với hơn 3 năm kinh nghiệm trong lĩnh vực dữ liệu, tôi không chỉ là một người viết code. Tôi là cầu nối giữa kỹ thuật và kinh doanh, sử dụng SQL, Python và Power BI,Automation để giải quyết những bài toán hóc búa nhất của doanh nghiệp.",
    cards: [
      {
        title: "Phân Tích Xu Hướng",
        desc: "Xác định các mẫu hình ẩn trong dữ liệu lớn để dự báo xu hướng thị trường chính xác."
      },
      {
        title: "Mô Hình Hóa Dữ Liệu",
        desc: "Xây dựng các mô hình thống kê và machine learning để tối ưu hóa quy trình ra quyết định."
      },
      {
        title: "Kể Chuyện Dữ Liệu",
        desc: "Trực quan hóa các insight phức tạp thành các dashboard dễ hiểu cho mọi bên liên quan."
      }
    ]
  },

  skills: {
    title: "Tech Stack",
    subtitle: "// SYSTEM_STATUS: OPTIMIZED",
    secondaryTitle: "Secondary Modules",
    list: [
      { name: 'Python (Pandas, AI)', level: 95, category: 'Language' },
      { name: 'SQL (BigQuery)', level: 90, category: 'Language' },
      { name: 'Power BI / Locked Studio', level: 85, category: 'Tool' },
      { name: 'Data Cleaning / Excel ', level: 78, category: 'Language' },
      { name: 'Data Engineering', level: 82, category: 'Tool' },
      { name: 'Business Statistics', level: 88, category: 'Soft Skill' },
    ] as Skill[],
    tags: ['VBA Excel', 'SQL (PostgreSQL)', 'Locked Studio / PowerBI', 'Google Sheets (Apps Script)', 'AI,JavaScript,Html,CSS,Node.js', 'Statistical Analysis', 'Docker', 'Snowflake', 'Dbt']
  },

  projects: {
    title: "Selected Projects",
    subtitle: "Những dự án thể hiện tư duy phân tích và khả năng kỹ thuật.",
    list: [
      {
        id: 1,
        title: "Inventory Demand Forecasting & Optimization Dashboard",
        description: "Tôi đã phân tích dữ liệu bán hàng lịch sử để dự đoán nhu cầu và xây dựng một bảng điều khiển tương tác để hỗ trợ việc ra quyết định về hàng tồn kho, bao gồm phân loại ABC và tính toán điểm đặt hàng lại.",
        tags: ["Pandas", "Power BI", "Python"],
        image: "https://i.postimg.cc/tRsDRQjL/ABC-Analysis.png",
        link: "#"
      },
      {
        id: 2,
        title: "Route Optimization & Delivery Performance Analysis",
        description: "Phân tích dữ liệu logistics 6,000+ đơn hàng để đánh giá lead time, chi phí vận chuyển và hiệu suất giao hàng theo quốc gia và phương thức vận chuyển. Xây dựng dashboard Power BI hỗ trợ tối ưu hóa chi phí và thời gian giao hàng.",
        tags: ["MySQL", "Power BI"],
        image: "https://i.postimg.cc/4xkcTjfx/z7531483258496-6dbbc1dc0db92f321425b46689df0aeb.jpg",
        link: "#"
      },
      {
        id: 3,
        title: "Sales Performance & Profitability Analysis Dashboard",
        description: "Phân tích tổng quan hiệu suất kinh doanh, phân tích sâu profit margin theo sản phẩm, kiểm soát chi phí trong giai đoạn doanh số thấp, xây dựng dự báo nhu cầu theo mùa.",
        tags: ["SQL Server", "Power BI"],
        image: "https://i.postimg.cc/8kXdxyfH/Untitled.png",
        link: "#"
      }
    ] as Project[]
  },

  contact: {
    title: "Liên Hệ Với Tôi",
    description: "Bạn đang tìm kiếm giải pháp dữ liệu cho doanh nghiệp? Hãy để lại tin nhắn, tôi sẽ phản hồi trong vòng 24 giờ.",
    form: {
      namePlaceholder: "Nguyễn Văn A",
      emailPlaceholder: "contact@example.com",
      messagePlaceholder: "Tôi muốn thảo luận về dự án..."
    }
  },

  aiAssistant: {
    initialMessage: "Xin chào! Tôi là trợ lý AI. Bạn muốn biết gì về kinh nghiệm làm việc của tôi?",
    systemInstruction: `
      Bạn là trợ lý ảo cho Portfolio của một Data Analyst chuyên nghiệp.
      Thông tin:
      - Tên: {NAME}
      - Email: {EMAIL}
      - Kỹ năng: Python, SQL, Tableau, Power BI, Machine Learning.
      - Kinh nghiệm: Chuyên về tối ưu hóa doanh thu và dự báo.
      
      Nhiệm vụ: Trả lời câu hỏi nhà tuyển dụng/khách hàng.
      Phong cách: Chuyên nghiệp, ngắn gọn, đi thẳng vào vấn đề.
      Ngôn ngữ: Tiếng Việt.
      Giới hạn: Dưới 100 từ.
    `
  }
};
