// 会話データを読み込んでHTMLを生成するイメージ
data.forEach(line => {
  const chatBox = `
    <div class="chat-row ${line.char}">
      <img src="../../assets/images/ando/${line.char}.png" class="icon">
      <div class="text-content">
        <span class="name">${line.name}</span>
        <p>${line.text}</p>
        ${line.image ? `<img src="${line.image}" class="inline-img">` : ''}
      </div>
    </div>
  `;
  document.getElementById('column-container').innerHTML += chatBox;
});