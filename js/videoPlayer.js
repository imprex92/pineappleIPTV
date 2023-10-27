
export async function fetchChannelList(){
	const filePath = './playlists/tv_channels_fe918907_plus.m3u'
	const channelList = document.getElementById('channelList') // ul element
	const messagesEl = document.getElementById('messages')
	
	return await fetch(filePath)
	.then((response) => {
		if (response.status === 404) {
			console.error('Playlist not found - Please check if the file exist.');
		} else {
			return response.text()
		}
	})
	.then((m3uData) => {
		m3uData && console.log('Playlist found');
		const lines = m3uData.trim().split('\n')
		let channelInfo = []
		
		lines.forEach((line, index) => {
			if (line.startsWith('#EXTINF')) {
				const channelNameMatch = line.match(/tvg-name="(.*?)"/);
				const channelName = channelNameMatch ? channelNameMatch[1] : '';
	
				const url = lines[index + 1];
	
				if (channelName && url) {
					channelInfo.push({ name: channelName, url });
				}
			}
		})
		channelInfo.forEach((info) => {
			const listItem = document.createElement('li');
			listItem.textContent = info.name;
			listItem.setAttribute('data-url', info.url)
	
			channelList.appendChild(listItem);
		});
	})
	.catch((error) => {
		console.error(`Something went wrong while the wizard tried to summon your playlist - ${error}`);
	})
}
