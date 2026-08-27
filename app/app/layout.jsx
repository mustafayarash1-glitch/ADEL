export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="logo">ADEL</div>
            <div className="subtitle">
              رستورانت و شیرینی‌سرای عادل
            </div>
          </div>

          <div>
            سیستم مدیریت
          </div>
        </div>
      </header>

      <main className="main container">
        <h1 className="page-title">داشبورد</h1>

        <p className="page-description">
          نمای کلی وضعیت مالی و عملیاتی ADEL
        </p>

        <section className="cards">
          <div className="card">
            <div className="card-icon">💰</div>
            <div className="card-title">فروش امروز</div>
            <div className="card-value">۰ افغانی</div>
          </div>

          <div className="card">
            <div className="card-icon">📦</div>
            <div className="card-title">ارزش موجودی</div>
            <div className="card-value">۰ افغانی</div>
          </div>

          <div className="card">
            <div className="card-icon">👥</div>
            <div className="card-title">طلب از مشتریان</div>
            <div className="card-value">۰ افغانی</div>
          </div>

          <div className="card">
            <div className="card-icon">📊</div>
            <div className="card-title">سود خالص</div>
            <div className="card-value">۰ افغانی</div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">وضعیت سیستم</h2>

          <div className="card">
            سیستم ADEL آماده تنظیم و ورود اطلاعات است.
          </div>
        </section>
      </main>
    </>
  );
}
