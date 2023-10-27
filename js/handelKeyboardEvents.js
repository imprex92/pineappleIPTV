export function handleKeyboardEvents(){
	const channelItems = document.querySelectorAll('#channelList > li')
	const navItems = document.querySelectorAll('.navListWrapper > li')
	const navReversed = [...navItems].reverse()
	const mergedList = [...navReversed, ...channelItems]
	console.log(mergedList);

	// Focus on first channel at start
	let listIndex = 3;
	let selectedChannel;
	mergedList[3].classList.add('focused');
	
	document.addEventListener('keydown', logEvent)
	function logEvent(event){
		console.log(event.keyCode);
	
		switch (event.keyCode) {
			case 38: // arrow up
				listIndex >= 3 && listIndex--;
				mergedList[listIndex].classList.add('focused')
				mergedList[listIndex + 1].classList.remove('focused')
				break;
			case 39: // Arrow right
				listIndex <= 2 && listIndex > 0 && listIndex--;
				mergedList[listIndex].classList.add('focused')
				mergedList[listIndex + 1].classList.remove('focused')
				break;
			case 40: // Arrow down
				listIndex < mergedList.length && listIndex === 2 && listIndex++
				mergedList[listIndex].classList.add('focused')
				mergedList[listIndex - 1].classList.remove('focused')
				break;
			case 37: // Arrow left
				listIndex < 2 && listIndex++
				mergedList[listIndex].classList.add('focused')
				mergedList[listIndex - 1].classList.remove('focused')
				break;
			case 13: // OK button
				selectedChannel = document.querySelector('li.focused')
				console.log('selected', selectedChannel);
				break;
			default:
				break;
		}
	}
}