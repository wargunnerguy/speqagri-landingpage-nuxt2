import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        services: [
          {
            id: "1",
            name: "Bulk mat transport",
            translation_tag: "bulk_material_transport_service",
            desc: "bulk_material_transport_service_text",
            img: "bulk_material_transport_service",
            link: "",
            uri: "kruus-muld",
          },
          {
            id: "2",
            name: "Recycled asphalt",
            translation_tag: "recycled_asphalt_service",
            desc: "recycled_asphalt_service_text",
            img: "recycled_asphalt_service",
            link: "",
            uri: "freesasfalt",
          },
          {
            id: "3",
            name: "Car rental",
            translation_tag: "car_rental_service",
            desc: "car_rental_service_text",
            img: "car_rental_service",
            link: "",
            uri: "rent/ford-tourneo",
          },
          {
            id: "4",
            name: "Landscaping",
            translation_tag: "landscaping_service",
            desc: "landscaping_service_text",
            img: "landscaping_service",
            link: "",
            uri: "",
          },
          {
            id: "5",
            name: "Winding",
            translation_tag: "winding_service",
            desc: "winding_service_text",
            img: "winding_service",
            link: "https://fekaaliabi.ee",
            uri: "",
          },
          {
            id: "6",
            name: "Transport",
            translation_tag: "transport_service",
            desc: "transport_service_text",
            img: "transport_service",
            link: "",
            uri: "",
          },
          {
            id: "7",
            name: "Excavation",
            translation_tag: "excavation_service",
            desc: "excavation_service_text",
            img: "excavation_service",
            link: "",
            uri: "",
          },
          /*        {
                    id: "8",
                    name: "Telehandler",
                    translation_tag: "telehandler_service",
                    desc: "telehandler_service_text",
                    img: "telehandler_service",
                    link: "",
                    uri: "",
                  },*/
          {
            id: "9",
            name: "Rental",
            translation_tag: "rental_service",
            desc: "rental_service_text",
            img: "rental_service",
            link: "",
            uri: "",
          },
          /*        {
                    id: "10",
                    name: "Maintenance",
                    translation_tag: "maintenance_service",
                    desc: "maintenance_service_text",
                    img: "maintenance_service",
                    link: "",
                    uri: "",
                  },*/
          /*        {
                    id: "11",
                    name: "Car repair",
                    translation_tag: "car_repair_service",
                    desc: "car_repair_service_text",
                    img: "car_repair_service",
                    link: "",
                    uri: "",
                  },*/
          {
            id: "12",
            name: "Snow removal",
            translation_tag: "snow_removal_service",
            desc: "snow_removal_service_text",
            img: "snow_removal_service",
            link: "",
            uri: "",
          },
          {
            id: "13",
            name: "Septic tanks",
            translation_tag: "septic_tank_service",
            desc: "septic_tank_service_text",
            img: "septics",
            link: "",
            uri: "biopuhastid",
          },
        ],
      }
    },
    getters: {
      services(state) {
        return state.services;
      }
    },
  });
}

export default createStore
