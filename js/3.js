const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue.
 In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;
