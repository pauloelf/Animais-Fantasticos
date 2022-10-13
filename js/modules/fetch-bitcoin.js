export default function fetchBitcoin(url, target){
	fetch(url)
	.then(res => res.json())
	.then(btc => {
		const btcPreco = document.querySelector(target)
		btcPreco.innerHTML = (100 / btc.BRL.sell).toFixed(4)
	}).catch(erro => {
		console.log(Error(erro))
	})
}