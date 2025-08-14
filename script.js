document.addEventListener('DOMContentLoaded', () => {
    console.log("செய்தித் தாள்கள் வலைத்தளம் ஏற்றப்பட்டது!");

    // Function to fetch news from a mock API
    async function fetchNews() {
        // Here you would replace this with a real News API URL
        // Example: https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY
        const mockApiData = {
            featured: {
                title: "புதிய தொழில்நுட்பம்: மொபைல் போன்களில் செயற்கை நுண்ணறிவு",
                image: "https://via.placeholder.com/600x300",
                summary: "செயற்கை நுண்ணறிவு (AI) தொழில்நுட்பம் இப்போது மொபைல் போன்களில் ஒருங்கிணைக்கப்பட்டு, பயனர்களின் அனுபவத்தை மேம்படுத்துகிறது.",
                date: "2024-08-14"
            },
            recent: [
                {
                    title: "இலவச கல்வித் திட்டங்கள்: தமிழக அரசின் புதிய அறிவிப்பு",
                    image: "https://via.placeholder.com/300x150",
                    summary: "மாணவர்களுக்கு இலவச கல்வி அளிக்கும் புதிய திட்டங்களை தமிழக அரசு அறிமுகப்படுத்தியுள்ளது.",
                    date: "2024-08-14"
                },
                {
                    title: "விளையாட்டு: இந்திய அணி உலகக் கோப்பையில் வெற்றி",
                    image: "https://via.placeholder.com/300x150",
                    summary: "கிரிக்கெட் உலகக் கோப்பை இறுதிப் போட்டியில் இந்திய அணி அபார வெற்றி பெற்றது.",
                    date: "2024-08-14"
                },
                {
                    title: "சுகாதாரம்: கொரோனா தடுப்பூசியின் புதிய வகைகள்",
                    image: "https://via.placeholder.com/300x150",
                    summary: "கொரோனா வைரஸின் புதிய வகைகளுக்கு எதிராகப் போராட புதிய தடுப்பூசிகள் கண்டுபிடிக்கப்பட்டுள்ளன.",
                    date: "2024-08-13"
                },
                {
                    title: "பொருளாதாரம்: பங்குச் சந்தை ஏற்றம்",
                    image: "https://via.placeholder.com/300x150",
                    summary: "இந்தியப் பங்குச் சந்தையில் கடந்த வாரம் பெரும் ஏற்றம் காணப்பட்டது.",
                    date: "2024-08-13"
                }
            ]
        };
        return mockApiData;
    }

    // Function to update the HTML with news data
    async function updateNews() {
        const newsData = await fetchNews();

        // Update Featured News
        const featuredArticle = document.querySelector('.featured-news .news-item');
        if (featuredArticle) {
            featuredArticle.querySelector('img').src = newsData.featured.image;
            featuredArticle.querySelector('h3 a').textContent = newsData.featured.title;
            featuredArticle.querySelector('.publish-date').textContent = `வெளியிட்ட நாள்: ${newsData.featured.date}`;
            featuredArticle.querySelector('.summary').textContent = newsData.featured.summary;
        }

        // Update Recent News Grid
        const recentNewsGrid = document.querySelector('.news-grid');
        if (recentNewsGrid) {
            recentNewsGrid.innerHTML = ''; // Clear existing articles
            newsData.recent.forEach(article => {
                const articleHTML = `
                    <article class="news-item">
                        <img src="${article.image}" alt="${article.title}">
                        <h3><a href="#">${article.title}</a></h3>
                        <p class="publish-date">வெளியிட்ட நாள்: ${article.date}</p>
                        <p class="summary">${article.summary}</p>
                        <a href="#" class="read-more">மேலும் படிக்க</a>
                    </article>
                `;
                recentNewsGrid.insertAdjacentHTML('beforeend', articleHTML);
            });
        }
    }

    updateNews();
});