<template>
  <div class="content container-fluid">
    <div class="content__container">
      <ul class="content__container__list">
        <li class="content__container__list__item" v-html="$t('bulk_material_transport_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('recycled_asphalt_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('car_rental_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('landscaping_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('winding_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('transport_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('excavation_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('telehandler_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('rental_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('maintenance_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('car_repair_service_html')"></li>
        <li class="content__container__list__item" v-html="$t('snow_removal_service_html')"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TheTextScrollerGadget",
  computed: {
    ...mapGetters(['services'])
  },

}
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Lato', sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  line-height: 40px;
  color: #ecf0f1;
  padding: 0 50px;

  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0 10px;

    &:after, &:before {
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__list {
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      &__item {
        line-height: 40px;
        margin: 0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-webkit-keyframes change {
  0%, 8.33% {
    transform: translate3d(0, 0, 0);
  }
  8.33%, 16.66% {
    transform: translate3d(0, -8.33%, 0);
  }
  16.66%, 25.00% {
    transform: translate3d(0, -16.66%, 0);
  }
  25.00%, 33.33% {
    transform: translate3d(0, -25%, 0);
  }
  33.33%, 41.67% {
    transform: translate3d(0, -33.33%, 0);
  }
  41.67%, 50.00% {
    transform: translate3d(0, -41.67%, 0);
  }
  50.00%, 58.33% {
    transform: translate3d(0, -50%, 0);
  }
  58.33%, 66.67% {
    transform: translate3d(0, -58.33%, 0);
  }
  66.67%, 75.00% {
    transform: translate3d(0, -66.67%, 0);
  }
  75.00%, 83.33% {
    transform: translate3d(0, -75%, 0);
  }
  83.33%, 91.66% {
    transform: translate3d(0, -83.33%, 0);
  }
  91.66%, 100% {
    transform: translate3d(0, -91.66%, 0);
  }
}

@-o-keyframes opacity {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-o-keyframes change {
  0%, 8.33% {
    transform: translate3d(0, 0, 0);
  }
  8.33%, 16.66% {
    transform: translate3d(0, -8.33%, 0);
  }
  16.66%, 25.00% {
    transform: translate3d(0, -16.66%, 0);
  }
  25.00%, 33.33% {
    transform: translate3d(0, -25%, 0);
  }
  33.33%, 41.67% {
    transform: translate3d(0, -33.33%, 0);
  }
  41.67%, 50.00% {
    transform: translate3d(0, -41.67%, 0);
  }
  50.00%, 58.33% {
    transform: translate3d(0, -50%, 0);
  }
  58.33%, 66.67% {
    transform: translate3d(0, -58.33%, 0);
  }
  66.67%, 75.00% {
    transform: translate3d(0, -66.67%, 0);
  }
  75.00%, 83.33% {
    transform: translate3d(0, -75%, 0);
  }
  83.33%, 91.66% {
    transform: translate3d(0, -83.33%, 0);
  }
  91.66%, 100% {
    transform: translate3d(0, -91.66%, 0);
  }
}

@-moz-keyframes opacity {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-moz-keyframes change {
  0%, 8.33% {
    transform: translate3d(0, 0, 0);
  }
  8.33%, 16.66% {
    transform: translate3d(0, -8.33%, 0);
  }
  16.66%, 25.00% {
    transform: translate3d(0, -16.66%, 0);
  }
  25.00%, 33.33% {
    transform: translate3d(0, -25%, 0);
  }
  33.33%, 41.67% {
    transform: translate3d(0, -33.33%, 0);
  }
  41.67%, 50.00% {
    transform: translate3d(0, -41.67%, 0);
  }
  50.00%, 58.33% {
    transform: translate3d(0, -50%, 0);
  }
  58.33%, 66.67% {
    transform: translate3d(0, -58.33%, 0);
  }
  66.67%, 75.00% {
    transform: translate3d(0, -66.67%, 0);
  }
  75.00%, 83.33% {
    transform: translate3d(0, -75%, 0);
  }
  83.33%, 91.66% {
    transform: translate3d(0, -83.33%, 0);
  }
  91.66%, 100% {
    transform: translate3d(0, -91.66%, 0);
  }
}

@keyframes opacity {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes change {
  0%, 8.33% {
    transform: translate3d(0, 0, 0);
  }
  8.33%, 16.66% {
    transform: translate3d(0, -8.33%, 0);
  }
  16.66%, 25.00% {
    transform: translate3d(0, -16.66%, 0);
  }
  25.00%, 33.33% {
    transform: translate3d(0, -25%, 0);
  }
  33.33%, 41.67% {
    transform: translate3d(0, -33.33%, 0);
  }
  41.67%, 50.00% {
    transform: translate3d(0, -41.67%, 0);
  }
  50.00%, 58.33% {
    transform: translate3d(0, -50%, 0);
  }
  58.33%, 66.67% {
    transform: translate3d(0, -58.33%, 0);
  }
  66.67%, 75.00% {
    transform: translate3d(0, -66.67%, 0);
  }
  75.00%, 83.33% {
    transform: translate3d(0, -75%, 0);
  }
  83.33%, 91.66% {
    transform: translate3d(0, -83.33%, 0);
  }
  91.66%, 100% {
    transform: translate3d(0, -91.66%, 0);
  }
}

// 6 is the number of animation.
// Here, there are 4 lines :


// 6x + 6y = 100 (100% duration)

// HERE :
// y = 4 -> Animation between two lines
// x = 12.66 -> Time spent on a line

// You can define a value and calculate the other if you want change speed or the number of lines

</style>