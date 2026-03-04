import Head from 'next/head'
export default function Admin() {
    return (
        <>
            <Head><title>Админ-панель 522 ЦПООП</title><meta name="viewport" content="width=device-width, initial-scale=1.0"/><link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"/></Head>
            <style jsx global>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--navy:#1a2a4a;--red:#c0392b;--green:#16a34a;--gray:#6b7280;--border:#c8c0b0}
        body{font-family:'PT Sans',sans-serif;background:#f0f2f5;color:#1a1a1a;font-size:14px;min-height:100vh}
        .login-wrap{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}
        .login-box{background:white;border:1px solid var(--border);border-top:4px solid var(--navy);padding:40px;width:100%;max-width:380px;border-radius:4px;box-shadow:0 4px 24px rgba(0,0,0,.08)}
        .login-box h1{font-family:'PT Serif',serif;font-size:20px;color:var(--navy);margin-bottom:6px}
        .login-box p{font-size:12px;color:var(--gray);margin-bottom:24px}
        .login-box input{width:100%;border:1px solid var(--border);padding:10px 12px;font-size:14px;border-radius:2px;margin-bottom:12px;font-family:'PT Sans',sans-serif}
        .login-box input:focus{outline:none;border-color:var(--navy)}
        .btn{background:var(--navy);color:white;border:none;padding:10px 24px;font-size:14px;font-weight:700;cursor:pointer;border-radius:2px;font-family:'PT Sans',sans-serif;transition:background .2s}
        .btn:hover{background:var(--red)}
        .btn.green{background:var(--green)}.btn.green:hover{background:#15803d}
        .btn.full{width:100%}
        .err{color:var(--red);font-size:12px;margin-top:8px}
        .admin{display:none}.admin.active{display:block}
        .topbar{background:var(--navy);color:white;padding:0 30px;display:flex;align-items:center;justify-content:space-between;height:56px;border-bottom:3px solid var(--red)}
        .topbar h1{font-family:'PT Serif',serif;font-size:16px;letter-spacing:1px}
        .topbar .logout{background:none;border:1px solid rgba(255,255,255,.3);color:white;padding:6px 14px;cursor:pointer;border-radius:2px;font-size:12px}
        .main{max-width:1000px;margin:30px auto;padding:0 20px;display:grid;grid-template-columns:1fr 1fr;gap:20px}
        .card{background:white;border:1px solid var(--border);border-radius:4px;padding:24px}
        .card.full{grid-column:span 2}
        .card h2{font-family:'PT Serif',serif;font-size:15px;color:var(--navy);margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid var(--border)}
        .form-row{margin-bottom:14px}
        .form-row label{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--gray);margin-bottom:4px}
        .form-row input{width:100%;border:1px solid var(--border);padding:9px 10px;font-size:13px;border-radius:2px;font-family:'PT Sans',sans-serif}
        .form-row input:focus{outline:none;border-color:var(--navy)}
        .hint{font-size:11px;color:var(--gray);margin-top:4px}
        .stat-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px}
        .stat-row:last-child{border-bottom:none}
        .stat-val{font-weight:700;color:var(--navy);font-size:18px}
        .tbl{width:100%;border-collapse:collapse;font-size:12px}
        .tbl th{background:var(--navy);color:white;padding:8px 10px;text-align:left;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px}
        .tbl td{padding:8px 10px;border-bottom:1px solid #f0f0f0}
        .tbl tr:hover td{background:#f9f9f9}
        .badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:700;text-transform:uppercase}
        .badge.pending{background:#fef3c7;color:#92400e}
        .badge.sent{background:#d1fae5;color:#065f46}
        .toast{position:fixed;bottom:24px;right:24px;background:var(--navy);color:white;padding:12px 22px;border-radius:4px;font-size:13px;z-index:9999;display:none;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .toast.show{display:block}.toast.ok{background:var(--green)}.toast.err{background:var(--red)}
        .send-bar{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
        @media(max-width:700px){.main{grid-template-columns:1fr}.card.full{grid-column:span 1}}
      `}</style>
            <div className="login-wrap" id="loginWrap">
                <div className="login-box">
                    <h1>🛡️ Админ-панель</h1><p>522 ЦПООП — управление заявками</p>
                    <input type="password" id="pwdInput" placeholder="Введите пароль"/>
                    <button className="btn full" id="loginBtn">Войти</button>
                    <div className="err" id="loginErr"></div>
                </div>
            </div>
            <div className="admin" id="adminPanel">
                <div className="topbar"><h1>🛡️ Панель управления — 522 ЦПООП</h1><button className="logout" id="logoutBtn">Выйти</button></div>
                <div className="main">
                    <div className="card">
                        <h2>📊 Статистика</h2>
                        <div className="stat-row"><span>Всего заявок</span><span className="stat-val" id="statTotal">—</span></div>
                        <div className="stat-row"><span>Ожидают отправки</span><span className="stat-val" id="statPending">—</span></div>
                        <div className="stat-row"><span>Отправлено писем</span><span className="stat-val" id="statSent">—</span></div>
                        <div className="stat-row"><span>Последняя отправка</span><span id="statLastSend" style={{fontSize:'12px',color:'var(--gray)'}}>—</span></div>
                    </div>
                    <div className="card">
                        <h2>⚙️ Настройки</h2>
                        <div className="form-row"><label>Email получателя</label><input type="email" id="settingEmail" placeholder="example@mail.ru"/></div>
                        <div className="form-row"><label>Время ежедневной отправки</label><input type="time" id="settingTime" defaultValue="09:00"/><div className="hint">По московскому времени (UTC+3)</div></div>
                        <div className="form-row"><label>Новый пароль (пусто = не менять)</label><input type="password" id="settingPassword" placeholder="Новый пароль"/></div>
                        <button className="btn" id="saveBtn">Сохранить</button>
                    </div>
                    <div className="card full">
                        <h2>📨 Ручная отправка</h2>
                        <div className="send-bar"><button className="btn green" id="sendNowBtn">Отправить сейчас все ожидающие</button><span style={{fontSize:'12px',color:'var(--gray)'}} id="nextSendLabel"></span></div>
                    </div>
                    <div className="card full">
                        <h2>📋 Последние заявки</h2>
                        <div style={{overflowX:'auto'}}>
                            <table className="tbl">
                                <thead><tr><th>#</th><th>Дата</th><th>ФИО</th><th>Д.р.</th><th>Позывной</th><th>Телефон</th><th>Статус</th></tr></thead>
                                <tbody id="submissionsBody"><tr><td colSpan="7" style={{textAlign:'center',color:'var(--gray)',padding:'20px'}}>Загрузка...</td></tr></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="toast" id="toast"></div>
            <script dangerouslySetInnerHTML={{__html:`
        var authToken=sessionStorage.getItem('adminToken')||'';
        function showToast(m,t){var el=document.getElementById('toast');el.textContent=m;el.className='toast show'+(t?' '+t:'');setTimeout(function(){el.className='toast'},4000);}
        async function doLogin(){var pwd=document.getElementById('pwdInput').value;try{var r=await fetch('/api/settings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'login',password:pwd})});var d=await r.json();if(d.ok){authToken=d.token;sessionStorage.setItem('adminToken',authToken);showAdmin();}else{document.getElementById('loginErr').textContent='Неверный пароль';}}catch(e){document.getElementById('loginErr').textContent='Ошибка соединения';}}
        function doLogout(){authToken='';sessionStorage.removeItem('adminToken');document.getElementById('loginWrap').style.display='flex';document.getElementById('adminPanel').classList.remove('active');}
        async function showAdmin(){document.getElementById('loginWrap').style.display='none';document.getElementById('adminPanel').classList.add('active');await loadSettings();await loadSubmissions();}
        async function loadSettings(){try{var r=await fetch('/api/settings?action=get',{headers:{'Authorization':authToken}});var d=await r.json();if(d.ok){document.getElementById('settingEmail').value=d.email||'';document.getElementById('settingTime').value=d.sendTime||'09:00';document.getElementById('statTotal').textContent=d.totalCount||0;document.getElementById('statPending').textContent=d.pendingCount||0;document.getElementById('statSent').textContent=d.sentCount||0;document.getElementById('statLastSend').textContent=d.lastSend||'Ещё не было';if(d.sendTime)document.getElementById('nextSendLabel').textContent='Автоотправка в '+d.sendTime+' (МСК)';}}catch(e){}}
        async function saveSettings(){var email=document.getElementById('settingEmail').value.trim();var sendTime=document.getElementById('settingTime').value;var password=document.getElementById('settingPassword').value;if(!email){showToast('Укажите email','err');return;}try{var body={action:'save',email:email,sendTime:sendTime};if(password)body.password=password;var r=await fetch('/api/settings',{method:'POST',headers:{'Content-Type':'application/json','Authorization':authToken},body:JSON.stringify(body)});var d=await r.json();if(d.ok){showToast('Настройки сохранены','ok');document.getElementById('settingPassword').value='';}else showToast('Ошибка: '+(d.error||'неизвестно'),'err');}catch(e){showToast('Ошибка соединения','err');}}
        async function sendNow(){if(!confirm('Отправить все ожидающие заявки?'))return;try{var r=await fetch('/api/send-now',{method:'POST',headers:{'Authorization':authToken}});var d=await r.json();if(d.ok){showToast('Отправлено: '+d.sent+' заявок','ok');await loadSettings();await loadSubmissions();}else showToast('Ошибка: '+(d.error||'неизвестно'),'err');}catch(e){showToast('Ошибка соединения','err');}}
        async function loadSubmissions(){try{var r=await fetch('/api/submissions',{headers:{'Authorization':authToken}});var d=await r.json();var tb=document.getElementById('submissionsBody');if(!d.ok||!d.submissions.length){tb.innerHTML='<tr><td colspan="7" style="text-align:center;color:var(--gray);padding:20px">Заявок пока нет</td></tr>';return;}tb.innerHTML=d.submissions.map(function(s,i){return '<tr><td>'+(d.submissions.length-i)+'</td><td>'+new Date(s.createdAt).toLocaleString('ru-RU')+'</td><td>'+(s.lastName||'')+' '+(s.firstName||'')+' '+(s.middleName||'')+'</td><td>'+(s.birthDate||'—')+'</td><td>'+(s.callSign||'—')+'</td><td>'+(s.consentPhone||'—')+'</td><td><span class="badge '+(s.sent?'sent':'pending')+'">'+(s.sent?'Отправлено':'Ожидает')+'</span></td></tr>';}).join('');}catch(e){}}
        document.addEventListener('DOMContentLoaded',function(){
          document.getElementById('loginBtn').addEventListener('click',doLogin);
          document.getElementById('pwdInput').addEventListener('keydown',function(e){if(e.key==='Enter')doLogin();});
          document.getElementById('logoutBtn').addEventListener('click',doLogout);
          document.getElementById('saveBtn').addEventListener('click',saveSettings);
          document.getElementById('sendNowBtn').addEventListener('click',sendNow);
          if(authToken){fetch('/api/settings?action=get',{headers:{'Authorization':authToken}}).then(function(r){return r.json()}).then(function(d){if(d.ok)showAdmin();else{authToken='';sessionStorage.removeItem('adminToken');}}).catch(function(){});}
        });
      `}}/>
        </>
    )
}