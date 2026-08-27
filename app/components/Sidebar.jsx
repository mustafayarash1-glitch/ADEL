"use client";

const menuItems = [
  { icon: "🏠", title: "داشبورد" },
  { icon: "🧾", title: "فروش" },
  { icon: "🛒", title: "خرید" },
  { icon: "📦", title: "موجودی" },
  { icon: "🍰", title: "محصولات و فرمول‌ها" },
  { icon: "👥", title: "مشتریان" },
  { icon: "🤝", title: "تأمین‌کنندگان" },
  { icon: "👨‍💼", title: "کارمندان" },
  { icon: "💵", title: "حقوق و دستمزد" },
  { icon: "💳", title: "هزینه‌ها" },
  { icon: "📈", title: "گزارش‌ها" },
  { icon: "⚙️", title: "تنظیمات" }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-brand">ADEL</div>
        <div className="sidebar-subtitle">
          مدیریت رستورانت و شیرینی‌سرا
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.title}
            className="sidebar-item"
            type="button"
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        نسخه 1.0.0
      </div>
    </aside>
  );
}
