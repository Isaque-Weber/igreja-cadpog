async function checkLiveStatus() {
    const apiKey = 'KEY';
    const channelId = 'UC71Lq3vk7MZgvbL_iheZfAQ';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const isLive = data.items.length > 0;
        if (isLive) {
            document.getElementById('live-iframe').style.display = 'block';
            document.getElementById('no-live-message').style.display = 'none';
        } else {
            document.getElementById('live-iframe').style.display = 'none';
            document.getElementById('no-live-message').style.display = 'block';
        }
    } catch (error) {
        document.getElementById('live-iframe').style.display = 'none';
        document.getElementById('no-live-message').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', checkLiveStatus);