'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('');

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

  const triggerAd = () => {
    if (typeof window !== 'undefined' && window.show_10619740) {
      
      // Ad Trigger
      window.show_10619740().then(() => {
        handleSuccess();
      }).catch((e) => {
        // Fallback or retry
        setStatus('Ad closed. Tap screen to try again.');
      });

    } else {
      setStatus('Loading system...');
    }
  };

  const handleSuccess = async () => {
    setStatus('Verifying...');
    
    // 1. Call API Route (Server-side)
    try {
      await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.id })
      });
    } catch (e) {
      console.error(e);
    }

    // 2. Notify Bot & Close (Client-side)
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData("verified_success");
      setTimeout(() => {
        window.Telegram.WebApp.close();
      }, 500);
    }
  };

  return (
    <div 
      onClick={triggerAd}
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative'
      }}
    >
      {/* Top Right Profile */}
      {user && (
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255,255,255,0.8)',
          padding: '5px 10px',
          borderRadius: '20px',
          border: '1px solid #dbeafe'
        }}>
          <span style={{fontSize: '12px', fontWeight: 'bold', color: '#1e3a8a'}}>
            {user.first_name}
          </span>
          {user.photo_url && (
            <img src={user.photo_url} style={{width:'30px', height:'30px', borderRadius:'50%'}} />
          )}
        </div>
      )}

      {/* Middle Text */}
      <h2 style={{color: '#1e3a8a', textAlign: 'center'}}>Thanks for your support</h2>
      <p style={{fontSize: '12px', color: '#64748b', marginTop: '10px'}}>{status}</p>
      
      {/* Invisible Overlay to catch clicks for Ad */}
      <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', zIndex:10}} />
    </div>
  );
  }
