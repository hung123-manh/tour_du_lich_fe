import http from "../http";

const BookingPageService = {
  async searchTourById(tourId) {
    try {
      console.log("Get data from backend");
      const response = await http.post(
        "api/getTour",
        (body = {
          tourId: tourId,
        })
      );
      console.log(response);
      return response;
    } catch (e) {
      console.log("Error fetching" + e);
    }
  },

  async getAllBookedTours(customerId) {
    try {
      const response = await http.post(
        "api/getAllBookedTours",
        (body = {
          customerId,
        })
      );

      return response;
    } catch (e) {
      console.log("error" + e);
    }
  },

  async getTransport() {
    try {
      const response = await http.get("api/getTransport");
      return response;
    } catch (e) {
      console.log("error" + e);
    }
  },

  async getTourGuide() {
    try {
      const response = await http.get("api/getTourGuide");
      return response;
    } catch (e) {
      console.log("error" + e);
    }
  },

  async getTourType() {
    try {
      const response = await http.get("api/getTourType");
      return response;
    } catch (e) {
      console.log("error" + e);
    }
  },

  async saveBooking(customerId, tourId, numGuests, unitPrice) {
    try {
      const response = await http.post(
        "api/saveBooking",
        (body = {
          customerId,
          tourId,
          numGuests,
          unitPrice,
        })
      );

      return response;
    } catch (e) {
      console.log("error" + e);
    }
  },
};

export default BookingPageService;
