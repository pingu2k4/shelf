const timeElement = document.querySelector("#time");
const dateElement = document.querySelector("#date");

function updateClock() {
	const now = new Date();

	timeElement.textContent = new Intl.DateTimeFormat("en-GB", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(now);

	const month = now.toLocaleString("en-GB", { month: "short" }).toUpperCase();
	const day = String(now.getDate()).padStart(2, "0");
	const year = now.getFullYear();
	dateElement.textContent = `${month}.${day}.${year}`;

	const nextMinute = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());
	window.setTimeout(updateClock, nextMinute);
}

updateClock();
