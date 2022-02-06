import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

export default function (context) {
  const locale = context.app.i18n.locale;
  const iso = context.app.i18n.locales.find(l => l.code === locale).iso;

  Vue.use(VueFbCustomerChat, {
    page_id: 109635857069303, //  change 'null' to your Facebook Page ID,
    theme_color: '#1bac91', // theme color in HEX
    locale: iso.replace('-', '_'), // default 'en_US'
  })
}
