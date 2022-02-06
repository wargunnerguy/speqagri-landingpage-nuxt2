import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 2298596397103477, //  change 'null' to your Facebook Page ID,
  theme_color: '#1bac91', // theme color in HEX
  locale: 'et_EE', // default 'en_US'
})
