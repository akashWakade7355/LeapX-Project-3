const bookmarkContainer = document.getElementById("bookmark-container");

const bookmarkedArticles = JSON.parse(localStorage.getItem("bookmarks")) || [];

if (bookmarkedArticles.length === 0) {
  bookmarkContainer.innerHTML = `
        <div class="col-12">
            <div class="alert alert-warning text-center">
                No bookmarked articles found.
            </div>
        </div>
    `;
} else {
  bookmarkedArticles.forEach((article) => {
    bookmarkContainer.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="news-card h-100">

                    <img
                        src="${article.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"}"
                        class="card-img-top"
                        alt="News Image"
                    >

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${article.title || "No Title"}
                        </h5>

                        <p class="card-text flex-grow-1">
                            ${article.description || "No description available"}
                        </p>

                        <div class="d-flex justify-content-around mt-auto"> 
                            <a
                                href="${article.url}"
                                target="_blank"
                                class="btn btn-primary"
                                style="width: 45%; height: 42px;"
                            >
                                Read More
                            </a>

                            <button
                                class="btn btn-danger delete-btn"
                                data-url="${article.url}"
                                style="width: 45%; height: 42px;"
                            >
                                🗑 Delete
                            </button>
                        </div>
                    
                    </div>

                </div>

            </div>
        `;
  });
}


document.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete-btn")) {

        const url = e.target.dataset.url;

        const updatedBookmarks = bookmarkedArticles.filter(
            article => article.url !== url
        );

        localStorage.setItem(
            "bookmarks",
            JSON.stringify(updatedBookmarks)
        );

        location.reload();
    }

});