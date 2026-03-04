import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>РОЗЫСКНАЯ КАРТА 522 ЦПООП</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <style jsx global>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--navy:#1a2a4a;--red:#c0392b;--gold:#b8860b;--light:#f5f3ee;--gray:#6b7280;--border:#c8c0b0;--input-bg:#faf9f6}
        body{font-family:'PT Sans',sans-serif;background:var(--light);color:#1a1a1a;font-size:14px;line-height:1.5}
        .hero{width:100%;background:var(--navy);border-bottom:4px solid var(--red);display:flex;align-items:center;justify-content:center;flex-direction:column;color:white;text-align:center;padding:50px 20px}
        .hero .emblem{font-size:44px;margin-bottom:12px}
        .hero h1{font-family:'PT Serif',serif;font-size:26px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px}
        .hero .subtitle{font-size:12px;color:rgba(255,255,255,0.6);letter-spacing:3px;text-transform:uppercase;margin-bottom:12px}
        .hero .divider{width:60px;height:2px;background:var(--red);margin:0 auto 12px}
        .hero .tagline{font-size:12px;color:rgba(255,255,255,0.55);letter-spacing:2px;text-transform:uppercase}
        .container{max-width:900px;margin:0 auto;padding:30px 20px 60px}
        .section-title{font-family:'PT Serif',serif;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--navy);border-bottom:2px solid var(--navy);padding-bottom:6px;margin:28px 0 16px}
        .section-title span{background:var(--navy);color:white;padding:2px 8px;margin-right:8px;font-size:11px}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px 20px}
        .form-grid.three{grid-template-columns:1fr 1fr 1fr}
        .form-grid.full{grid-template-columns:1fr}
        .field{display:flex;flex-direction:column;gap:4px}
        .field.span2{grid-column:span 2}
        .field.span3{grid-column:span 3}
        label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--gray)}
        label .req{color:var(--red);margin-left:2px}
        input[type="text"],input[type="date"],input[type="tel"],textarea,select{border:1px solid var(--border);background:var(--input-bg);padding:8px 10px;font-family:'PT Sans',sans-serif;font-size:13px;color:#1a1a1a;width:100%;transition:border-color .2s;border-radius:2px}
        input:focus,textarea:focus,select:focus{outline:none;border-color:var(--navy);box-shadow:0 0 0 2px rgba(26,42,74,.12)}
        textarea{resize:vertical;min-height:70px}
        .appearance-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:10px}
        .appearance-item{background:white;border:1px solid var(--border);border-radius:3px;padding:12px}
        .appearance-item .item-label{font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--border)}
        .appearance-item .face-icon{text-align:center;font-size:28px;margin-bottom:8px}
        .appearance-item label{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:400;text-transform:none;letter-spacing:0;color:#333;margin-bottom:5px;cursor:pointer}
        .appearance-item input[type="radio"]{accent-color:var(--navy);width:14px;height:14px;flex-shrink:0}
        .dental-wrap{background:white;border:1px solid var(--border);padding:16px;overflow-x:auto;border-radius:2px}
        .dental-table{border-collapse:collapse;font-size:11px;width:100%;text-align:center;min-width:520px}
        .dental-table td{border:1px solid var(--border);padding:5px 3px;width:38px;height:28px}
        .dental-table td.lc{background:var(--navy);color:white;font-weight:700;font-size:10px;width:auto;white-space:nowrap;padding:4px 8px;border:none}
        .dental-table td input{width:100%;border:none;background:transparent;text-align:center;font-size:11px;padding:0}
        .upload-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .upload-item{background:white;border:2px dashed var(--border);border-radius:3px;padding:20px 14px;text-align:center;cursor:pointer;transition:border-color .2s,background .2s;display:block}
        .upload-item:hover{border-color:var(--navy);background:#f0f4fa}
        .upload-item .upload-icon{font-size:26px;margin-bottom:6px;color:var(--gray)}
        .upload-item .upload-text{font-size:12px;color:var(--gray);line-height:1.4}
        .upload-item input[type="file"]{display:none}
        .consent-box{background:white;border:1px solid var(--border);border-left:4px solid var(--navy);padding:16px;border-radius:2px}
        .consent-title{font-family:'PT Serif',serif;font-size:14px;font-weight:700;color:var(--navy);margin-bottom:14px}
        .consent-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:4px}
        .consent-check{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:#333;cursor:pointer;margin-top:14px}
        .consent-check input{accent-color:var(--navy);margin-top:2px;flex-shrink:0}
        .submit-wrap{text-align:center;margin-top:34px}
        .btn-submit{background:var(--navy);color:white;border:none;padding:14px 54px;font-family:'PT Serif',serif;font-size:15px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:background .2s;border-radius:2px}
        .btn-submit:hover{background:var(--red)}
        .btn-submit:disabled{background:#999;cursor:not-allowed}
        .toast{position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#1a2a4a;color:white;padding:14px 28px;border-radius:4px;font-size:14px;z-index:9999;display:none;box-shadow:0 4px 20px rgba(0,0,0,.3)}
        .toast.show{display:block}
        .toast.error{background:var(--red)}
        footer{background:var(--navy);color:rgba(255,255,255,.75);text-align:center;padding:22px 20px;font-size:13px;border-top:3px solid var(--red)}
        footer a{color:var(--gold);text-decoration:none}
        footer .contacts{margin-bottom:8px;display:flex;justify-content:center;gap:32px;flex-wrap:wrap}
        footer .contacts a{font-size:15px;font-weight:700}
        footer .made-by{font-size:11px;opacity:.45;margin-top:4px}
        @media(max-width:640px){
          .form-grid,.form-grid.three{grid-template-columns:1fr}
          .field.span2,.field.span3{grid-column:span 1}
          .appearance-grid{grid-template-columns:1fr 1fr}
          .upload-grid,.consent-fields{grid-template-columns:1fr}
          .hero h1{font-size:18px}
        }
      `}</style>

            <div className="hero">
                <div className="emblem">🛡️</div>
                <h1>Розыскная карта 522 ЦПООП</h1>
                <div className="subtitle">Центр поиска и оказания оперативной помощи</div>
                <div className="divider"></div>
                <div className="tagline">Заполните все необходимые данные</div>
            </div>

            <div className="container">
                <div className="section-title"><span>1</span>Контактная информация</div>
                <div className="form-grid">
                    <div className="field"><label>Фамилия <span className="req">*</span></label><input type="text" id="lastName" placeholder="Введите фамилию"/></div>
                    <div className="field"><label>Имя <span className="req">*</span></label><input type="text" id="firstName" placeholder="Введите имя"/></div>
                    <div className="field"><label>Отчество <span className="req">*</span></label><input type="text" id="middleName" placeholder="Введите отчество"/></div>
                    <div className="field"><label>Дата рождения <span className="req">*</span></label><input type="date" id="birthDate"/></div>
                    <div className="field span2"><label>Личный номер</label><input type="text" id="personalNumber" placeholder="Личный номер"/></div>
                </div>
                <div className="section-title"><span>2</span>Адрес места жительства</div>
                <div className="form-grid">
                    <div className="field"><label>Фактический адрес</label><input type="text" id="actualAddress" placeholder="Фактический адрес проживания"/></div>
                    <div className="field"><label>Регистрация по паспорту</label><input type="text" id="registrationAddress" placeholder="Адрес регистрации по паспорту"/></div>
                </div>
                <div className="section-title"><span>3</span>Данные о воинской службе</div>
                <div className="form-grid three">
                    <div className="field"><label>Когда был призван</label><input type="date" id="draftDate"/></div>
                    <div className="field span2"><label>Данные воинской части (взвод, рота, батальон, полк)</label><input type="text" id="militaryUnit" placeholder="Укажите подразделение"/></div>
                    <div className="field"><label>Позывной</label><input type="text" id="callSign" placeholder="Боевой позывной"/></div>
                </div>
                <div className="section-title"><span>4</span>Внешность</div>
                <div className="appearance-grid">
                    <div className="appearance-item"><div className="item-label">1. Лицо по форме</div><div className="face-icon">👤</div>{['Овальное','Круглое','Ромбовидное','Прямоугольное','Треугольное'].map(v=><label key={v}><input type="radio" name="face" value={v}/> {v}</label>)}</div>
                    <div className="appearance-item"><div className="item-label">2. Лоб (по высоте)</div><div className="face-icon">🧑</div>{['Низкий','Средний','Высокий'].map(v=><label key={v}><input type="radio" name="foreheadH" value={v}/> {v}</label>)}</div>
                    <div className="appearance-item"><div className="item-label">3. Лоб (в профиль)</div><div className="face-icon">👤</div>{['Скошенный','Вертикальный','Выступающий'].map(v=><label key={v}><input type="radio" name="foreheadP" value={v}/> {v}</label>)}</div>
                    <div className="appearance-item"><div className="item-label">4. Контур спинки носа</div><div className="face-icon">👃</div>{['Прямой','Выпуклый','Вогнутый','Извилистый'].map(v=><label key={v}><input type="radio" name="nose" value={v}/> {v}</label>)}</div>
                    <div className="appearance-item"><div className="item-label">5. Подбородок</div><div className="face-icon">🧔</div>{['Скошенный','Вертикальный','Выступающий'].map(v=><label key={v}><input type="radio" name="chin" value={v}/> {v}</label>)}</div>
                    <div className="appearance-item"><div className="item-label">6. Форма ушей</div><div className="face-icon">👂</div>{['Треугольные','Прямоугольные','Круглые','Овальные'].map(v=><label key={v}><input type="radio" name="ear" value={v}/> {v}</label>)}</div>
                </div>
                <div className="section-title"><span>5</span>Особые приметы</div>
                <div className="form-grid">
                    <div className="field"><label>Дата последнего контакта с БО</label><input type="date" id="lastContactDate"/></div>
                    <div className="field"><label>Населённый пункт (район), где находился БО</label><input type="text" id="lastLocation" placeholder="Укажите населённый пункт"/></div>
                    <div className="field span2"><label>Особые приметы (шрамы, татуировки, родимые пятна, родинки, рубцы)</label><textarea id="specialMarks" placeholder="Опишите особые приметы..."></textarea></div>
                </div>
                <div className="section-title"><span>6</span>Физические данные</div>
                <div className="form-grid three">
                    <div className="field"><label>Рост (см)</label><input type="text" id="height" placeholder="180"/></div>
                    <div className="field"><label>Вес (кг)</label><input type="text" id="weight" placeholder="75"/></div>
                    <div className="field"><label>Размер обуви</label><input type="text" id="shoeSize" placeholder="42"/></div>
                    <div className="field span3"><label>Телосложение</label><select id="build"><option value="">— Выберите —</option><option>Астеническое (худощавое)</option><option>Нормостеническое (среднее)</option><option>Гиперстеническое (коренастое)</option></select></div>
                </div>
                <div className="section-title"><span>7</span>Информация о ДНК</div>
                <div className="form-grid full"><div className="field"><label>Ф.И.О. родственника; степень родства; место и дата сдачи</label><textarea id="dnaInfo" placeholder="Укажите данные родственника, сдавшего биоматериал..."></textarea></div></div>
                <div className="section-title"><span>8</span>Дополнительная информация</div>
                <div className="form-grid full"><div className="field"><label>Дополнительно</label><textarea id="additionalInfo" placeholder="Любая дополнительная информация..."></textarea></div></div>
                <div className="section-title"><span>9</span>Зубная формула</div>
                <div className="dental-wrap">
                    <table className="dental-table"><tbody>
                    <tr><td className="lc">Верх</td>{[...Array(16)].map((_,i)=><td key={i}><input type="text" className="dental-top"/></td>)}<td className="lc">Верх</td></tr>
                    <tr><td className="lc">Лев.</td>{[8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8].map((n,i)=><td key={i}>{n}</td>)}<td className="lc">Прав.</td></tr>
                    <tr><td className="lc">Низ</td>{[...Array(16)].map((_,i)=><td key={i}><input type="text" className="dental-bot"/></td>)}<td className="lc">Низ</td></tr>
                    </tbody></table>
                    <div className="dental-legend"><strong>Обозначения:</strong> З — здоровый зуб; КР — криво растущий; Р — частично разрушен; О — прижизненное удаление; П — пломба; КМЖ — коронка металлическая жёлтая; КМБ — коронка металлическая белая; МЖ — мостовидный протез жёлтый; МБ — мостовидный протез белый; ПР — съёмный протез.</div>
                </div>
                <div className="section-title"><span>10</span>К карте прилагается</div>
                <div className="upload-grid">
                    <label className="upload-item"><input type="file" id="filePassport" accept=".pdf,.jpg,.jpeg,.png" onChange={e=>fileChosen(e.target)}/><div className="upload-icon">📄</div><div className="upload-text">Копия паспорта (форма Ф1)<br/>без вести отсутствующего</div></label>
                    <label className="upload-item"><input type="file" id="fileMilitary" accept=".pdf,.jpg,.jpeg,.png" onChange={e=>fileChosen(e.target)}/><div className="upload-icon">📋</div><div className="upload-text">Копия документа<br/>из воинской части</div></label>
                    <label className="upload-item"><input type="file" id="filePhoto" accept=".jpg,.jpeg,.png" onChange={e=>fileChosen(e.target)}/><div className="upload-icon">🖼️</div><div className="upload-text">Фото без вести<br/>отсутствующего</div></label>
                    <label className="upload-item"><input type="file" id="fileOther" onChange={e=>fileChosen(e.target)}/><div className="upload-icon">📎</div><div className="upload-text">Другое</div></label>
                </div>
                <div className="section-title"><span>11</span>Согласие на обработку персональных данных</div>
                <div className="consent-box">
                    <div className="consent-title">Согласие на обработку персональных данных</div>
                    <div className="consent-fields">
                        <div className="field" style={{gridColumn:'span 2'}}><label>Я (Ф.И.О.)</label><input type="text" id="consentName" placeholder="Фамилия Имя Отчество"/></div>
                        <div className="field" style={{gridColumn:'span 2'}}><label>Адрес регистрации</label><input type="text" id="consentAddress" placeholder="Адрес регистрации по паспорту"/></div>
                        <div className="field" style={{gridColumn:'span 2'}}><label>Контактный номер телефона</label><input type="tel" id="consentPhone" placeholder="+7 (___) ___-__-__"/></div>
                    </div>
                    <label className="consent-check"><input type="checkbox" id="consentCheck"/><span>Согласен(а) на обработку персональных данных в соответствии с действующим законодательством РФ</span></label>
                </div>
                <div className="submit-wrap"><button className="btn-submit" id="submitBtn" onClick={()=>handleSubmit()}>Отправить карту</button></div>
            </div>
            <div className="toast" id="toast"></div>
            <footer>
                <div className="contacts"><a href="tel:84862222301">8 (4862) 22-23-01</a><a href="mailto:522@rescue-team.ru">522@rescue-team.ru</a></div>
                <div className="made-by">Сделано в <a href="https://dl71.ru" target="_blank" rel="noreferrer">DIGITAL LIFE</a> с ♥️</div>
            </footer>
            <script dangerouslySetInnerHTML={{__html:`
        function fileChosen(input){if(input.files&&input.files[0]){var item=input.closest('.upload-item');item.querySelector('.upload-icon').textContent='✅';item.querySelector('.upload-text').textContent=input.files[0].name;item.style.borderColor='#1a2a4a';item.style.background='#eef2f8';}}
        function showToast(msg,isError){var t=document.getElementById('toast');t.textContent=msg;t.className='toast show'+(isError?' error':'');setTimeout(function(){t.className='toast'},4000);}
        function getRadio(name){var el=document.querySelector('input[name="'+name+'"]:checked');return el?el.value:'';}
        function val(id){var el=document.getElementById(id);return el?el.value:'';}
        async function handleSubmit(){
          if(!document.getElementById('consentCheck').checked){showToast('Необходимо дать согласие на обработку персональных данных.',true);return;}
          if(!val('lastName')||!val('firstName')||!val('middleName')||!val('birthDate')){showToast('Заполните обязательные поля.',true);return;}
          var btn=document.getElementById('submitBtn');btn.disabled=true;btn.textContent='Отправка...';
          var fd=new FormData();
          ['lastName','firstName','middleName','birthDate','personalNumber','actualAddress','registrationAddress','draftDate','militaryUnit','callSign','lastContactDate','lastLocation','specialMarks','height','weight','shoeSize','build','dnaInfo','additionalInfo','consentName','consentAddress','consentPhone'].forEach(function(id){fd.append(id,val(id));});
          ['face','foreheadH','foreheadP','nose','chin','ear'].forEach(function(n){fd.append(n,getRadio(n));});
          fd.append('dentalTop',[...document.querySelectorAll('.dental-top')].map(function(i){return i.value||'—';}).join('|'));
          fd.append('dentalBot',[...document.querySelectorAll('.dental-bot')].map(function(i){return i.value||'—';}).join('|'));
          ['filePassport','fileMilitary','filePhoto','fileOther'].forEach(function(id){var el=document.getElementById(id);if(el&&el.files[0])fd.append(id,el.files[0]);});
          try{
            var res=await fetch('/api/submit',{method:'POST',body:fd});
            var data=await res.json();
            if(data.ok){showToast('✅ Розыскная карта успешно отправлена!');btn.textContent='Карта отправлена ✓';}
            else{throw new Error(data.error||'Ошибка сервера');}
          }catch(e){showToast('❌ Ошибка: '+e.message,true);btn.disabled=false;btn.textContent='Отправить карту';}
        }
      `}}/>
        </>
    )
}