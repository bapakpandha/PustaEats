import RestoApiSource from '../data/resto-api';

const addReview = {
  init({ id, button }) {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      await this.renewReviews(id);
    });
  },

  async submitReviewData(restoId) {
    const _id = restoId;
    const _name = document.querySelector('#addReviewName').value;
    const _post = document.querySelector('#addReviewPost').value;
    const postReview = { id:_id, name:_name, review:_post };

    const submittedReview = await RestoApiSource.addReview(postReview);
    document.querySelector('#addReviewName').value = '';
    document.querySelector('#addReviewPost').value = '';
    return submittedReview;
  },

  appendInfoRestoElement(dataReviews) {
    const containerElement = document.querySelector('.detail-review-list');
    if (!containerElement) {
      console.error('DEV_UTIL_LOG: Elemen container review tidak ditemukan');
      return;
    }
    containerElement.innerHTML = '';
    dataReviews.forEach(({ name, review, date }) => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('detail-review-item');
      reviewElement.innerHTML = `
                            <img class="lazyload" src="https://cdn.statically.io/avatar/shape=circle/${name}" alt="Avatar ${name}" onerror='this.onerror = null; this.src="./images/user.png"'>
                            <div class="detail-review-item-content">
                                <p id="name">${name}</p>
                                <small>${date}</small>
                                <p id="reviewContent">${review}</p>
                            </div>
            `;
      containerElement.appendChild(reviewElement);
      reviewElement.parentNode.insertBefore(document.createElement('hr'), reviewElement.nextSibling);
    });
  },

  async renewReviews(id) {
    const newReviews = await this.submitReviewData(id);
    if (newReviews) {
      this.appendInfoRestoElement(newReviews);
    }
  }
};

export default addReview;