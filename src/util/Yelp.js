const apiKey =
  "NUnsiZm-UoCwpQGoJdtnwAmMExQFoOS_a9bIWDD78iJkVgJQf9B0UxRoUxXvPTDSEQT0a6NqxV2YXaiDmPjEaczaIxeeAHrT6S3shQHrRFi7Iq1vO_YYPAV5cNZYX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          // console.log(jsonResponse);
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.revie_count,
          }));
        }
      });
  },
};

export default Yelp;
