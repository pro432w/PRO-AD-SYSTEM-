'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('Verify to continue');
  const [btnText, setBtnText] = useState('Watch Ad');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      const userData = tg.initDataUnsafe?.user;
      if (userData) {
        setUser(userData);
      }
    }
  }, []);

  const showAd = () => {
    if (typeof window !== 'undefined' && window.show_10619740) {
      setBtnText('Loading Ad...');
      window.show_10619740().then(() => {
        handleSuccess();
      });
    } else {
      alert("Ad is loading. Please wait a moment and try again.");
    }
  };

  const handleSuccess = () => {
    setStatus('Success! You can close this.');
    setBtnText('Unlocked');
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData("ad_watched_success");
      setTimeout(() => {
        window.Telegram.WebApp.close();
      }, 1000);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px', textAlign: 'center', backgroundColor: '#eff6ff' }}>
      
      {user && (
        <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '10px', background: '#ffffff', padding: '8px 15px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <span style={{ fontWeight: 'bold', color: '#1e40af' }}>{user.first_name}</span>
          {user.photo_url ? (
            <img src={user.photo_url} alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
          ) : (
             <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></div>
          )}
        </div>
      )}

      <div style={{ background: '#ffffff', padding: '40px', borderRadius: '20px', maxWidth: '400px', width: '100%', boxShadow: '0 10px 25px rgba(59, 130, 246, 0.15)' }}>
        <h1 style={{ color: '#1d4ed8', margin: '0 0 10px 0', fontSize: '24px', fontWeight: '800' }}>PRO ADs SYSTEM</h1>
        
        <h3 style={{ color: '#3b82f6', marginBottom: '10px', fontSize: '18px' }}>24h Access Pass</h3>
        
        <p style={{ color: '#64748b', marginBottom: '25px', fontSize: '14px' }}>{status}</p>

        {user && (
           <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>User ID: {user.id}</p>
        )}

        <button 
          onClick={showAd}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.4)',
            transition: 'transform 0.1s'
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
