import { showAlert } from "@src/utils/alertToast/alert";
import { ENDPOINTS } from "@src/utils/constant/api.endpoint";
import { postDataApi } from "@src/utils/api/api";


// Function to fetch home category data
export const getSummary = async ( payload : any) => {
  try {
    const res = await postDataApi({
      path: `${ENDPOINTS.HOME.SUMMARY}`, // Endpoint for selecting the profile
      data: payload, // Profile data to be selected
    });

    return res; // Return the API response
  } catch (error: any) {

    const message =
      error?.response && error?.response?.data && error?.response?.data?.message; // Extract error message
    showAlert(2, message); // Show an alert with the error message
    return message; // Return the error message
  }
};



