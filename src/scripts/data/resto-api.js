import API_ENDPOINT from '../globals/api-endpoint';

class RestoApiSource {
  static async listResto() {
    return new Promise((resolve) => {
      setTimeout(async () => {
        try {
          let response = await fetch(API_ENDPOINT.LIST_RESTO);
          if (!response.ok) {
            response = '{}';
          }
          const responseJson = await response.json();
          const listResto = responseJson.restaurants.splice(0, 12);
          // const listResto = null; // Untuk test eror
          resolve(listResto);
        } catch (error) {
          const response = [];
          console.warn('DEV_UTIL_LOG: ', error);
          resolve(response);
        }
      }, 0);
    });
  }

  static async detailResto(id) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        try {
          const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
          const responseJson = await response.json();
          console.log(responseJson);
          const dataResto = responseJson.restaurant;
          resolve(dataResto);
        } catch (error) {
          const failedResponse = [];
          console.warn('DEV_UTIL_LOG: ', error);
          resolve(failedResponse);
        }
      }, 0);
    });
  }

  static async addReview(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
      const newListReview = await response.json();
      return newListReview.customerReviews;
    } catch {
      alert('Gagal Menambah Review. Posting review harus menggunakan koneksi interner');
      window.location.reload();
      return;
    }
  }
}

export default RestoApiSource;
