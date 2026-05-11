const timeElement = document.querySelector("#time");
const dateElement = document.querySelector("#date");
const hackerNewsLink = document.querySelector("#hacker-news-link");

function updateHackerNewsLink() {
	const dateEnd = Math.floor(Date.now() / 1000);
	const dateStart = dateEnd - 48 * 60 * 60;
	const url = new URL("https://hn.algolia.com/");

	url.search = new URLSearchParams({
		dateEnd,
		dateRange: "custom",
		dateStart,
		page: "0",
		prefix: "false",
		query: "",
		sort: "byPopularity",
		type: "show_hn",
	});

	hackerNewsLink.href = url.toString();
}

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
updateHackerNewsLink();
