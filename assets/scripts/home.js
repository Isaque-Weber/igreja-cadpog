const menuMobile = document.querySelector('menu.mobile');
const nav = document.querySelector('nav.nav');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
    nav.classList.toggle('active');
})

async function checkLiveStatus() {
    const apiKey = 'AIzaSyDa-IavjrYsfMrZoSCIXee0p1N66g6Yw8U';
    const channelId = 'UC71Lq3vk7MZgvbL_iheZfAQ';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const isLive = data.items.length > 0;

        console.log(isLive)
        if (isLive) {
            document.getElementById('live-iframe').style.display = 'block';
            document.getElementById('no-live-message').style.display = 'none';
        } else {
            document.getElementById('live-iframe').style.display = 'none';
            document.getElementById('no-live-message').style.display = 'block';
        }
    } catch (error) {
        console.error('Erro ao verificar o status da live.', error);
    }
}

document.addEventListener('DOMContentLoaded', checkLiveStatus);