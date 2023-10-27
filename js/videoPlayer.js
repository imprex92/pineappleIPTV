const filePath = './playlists/tv_channels_fe918907_plus.m3u'
const channelList = document.getElementById('channelList') // ul element
const messagesEl = document.getElementById('messages')

fetch(filePath)
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
	const channelLines = lines.filter(line => line.startsWith('#EXTINF'))
	let currentCountry = ''
	
	channelLines.forEach((line) => {
		// let [, title] = /#EXTINF:.*,"(.*)"/.exec(line);

		const channelName = line.match(/tvg-name="(.*?)"/)[1];

		const countryMatch = line.match(/group-title="(.*?)"/)[1];
		const country = countryMatch ? countryMatch : ''
console.log(country);
		// Add country header when changes (Not working too good)
		if(country !== currentCountry){
			const countryHeaderItem = document.createElement('li');
			countryHeaderItem.textContent = country;
			countryHeaderItem.className = 'country-header';
			channelList.appendChild(countryHeaderItem);

			currentCountry = country;
		}

		const listItem = document.createElement('li');
		listItem.textContent = channelName;
		listItem.className = 'channel-item'
		channelList.appendChild(listItem);
	})
})
.catch((error) => {
	console.error(`Something went wrong while the wizard tried to summon your playlist - ${error}`);
})


//#EXTINF:-1 tvg-id="" tvg-name="US: FUBO SPORTS NETWORK HD" tvg-logo="https://github.com/Tapiosinn/tv-logos/blob/master/countries/united-states/fubo-sports-network-us.png?raw=true" group-title="USA",US: FUBO SPORTS NETWORK HD
