function apiCall(data) {
  console.log("Data sent to API:", data);
  // Simulating an API response
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mocked JSON response
      const jsonResponse = {
        status: "success",
        message: "Default reply by Machine from API",
        data: {
          additionalInfo: "Some additional information if needed"
        }
      };

      resolve(jsonResponse.message); // Extracting the content of the response
    }, 1000);
  });
}

// import axios from "axios"; // Import axios

// function apiCall(data) {
//   console.log("Data sent to API:", data);

//   return axios
//     .post("http://127.0.0.1:5000/api", { message: data }) // Use axios.post to make a POST request
//     .then((response) => {
//       console.log("Response from API:", response.data);
//       return response.data.message; // Return the message from the response
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       return "An error occurred while processing your request.";
//     });
// }

export default apiCall;
