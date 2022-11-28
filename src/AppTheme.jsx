import React, { useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
import './styles/Theme.css';

export default function AppTheme() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className="header">헤더</header>;
}

function Main() {
  return (
    <main className="main">
      메인
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      프로필
      <User />
    </div>
  );
}

function User() {
  return <div>사용자</div>;
}

function Products() {
  return (
    <div>
      제품 목록
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      제품 상세
      <p>
        모드 :{' '}
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            다크 모드
          </span>
        ) : (
          <span>라이트 모드</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>토글</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">푸터</footer>;
}
