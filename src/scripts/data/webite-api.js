import './json/alternative_data';

class websiteApi {
  static async fetchWebsiteApi() {
    return new Promise((resolve, reject) => {
      // Regular (non-async) function to handle logic
      const fetchData = async () => {
        try {
          // Fetch the main data
          const response = await fetch('./data/json/data.json');
          if (!response.ok) {
            throw new Error('Failed Network response was not ok');
          }
          const responseJson = await response.json();
          resolve(responseJson); // Resolve if successful
        } catch (error) {
          console.error(' DEV_UTIL_LOG: Gagal Mengambil data data.json karena:', error);

          // Handle fetch failure
          if (error.message.includes('Failed')) {
            if (window.dataJson) {
              // Use cached global data if available
              resolve(window.dataJson);
            } else {
              // Function to load fallback script
              const loadScript = (url) =>
                new Promise((resolveLoad, rejectLoad) => {
                  const script = document.createElement('script');
                  script.type = 'text/javascript';
                  script.src = url;

                  // Resolve if the script loads successfully
                  script.onload = () => {
                    if (window.dataJson) {
                      resolveLoad(window.dataJson);
                    } else {
                      rejectLoad(
                        new Error(
                          'Fallback data not found in alternative_data.js'
                        )
                      );
                    }
                  };

                  // Handle script load failure
                  script.onerror = () => {
                    rejectLoad(new Error('Failed to load alternative_data.js'));
                  };

                  document.head.appendChild(script);
                });

              // Load fallback data
              try {
                const fallbackData = await loadScript(
                  './data/json/alternative_data.js'
                );
                resolve(fallbackData);
              } catch (loadError) {
                console.error(loadError.message);
                reject(loadError);
              }
            }
          } else {
            reject(new Error('Gagal mengambil data dari server'));
          }
        }
      };

      // Call the function
      fetchData();
    });
  }
}

export default websiteApi;
