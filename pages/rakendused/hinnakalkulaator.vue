<template>
  <base-section>
    <div class="bg-dark justify-content-center sticky-top">
      <div class="card bg-transparent">
        <div class="card-title d-flex flex-fill justify-content-center text-light p-0 mb-0">
          <h3 class="p-0 m-0">{{ $t('calc_select_quarries') }}</h3>
        </div>
        <div class="card-body d-flex flex-fill justify-content-center m-0">
          <button v-for="location in quarry_locs" @click="toggleLocationFilter(location)" :key="location" type="button"
                  class="btn btn-primary ms-2 mt-3"
                  :class="{isActiveFilter: isAnActiveFilter(location), isNotActiveFilter: !isAnActiveFilter(location)}">
            <input type="checkbox" :checked="isAnActiveFilter(location)" autocomplete="off"> {{ location }}
          </button>
        </div>
      </div>

    </div>
    <table class="container">
      <thead>
      <tr>
        <th><h1>{{ $t("calc_product") }}</h1></th>
        <th>
          <h1>{{ $t('calc_location') }}</h1>
        </th>
        <th>
          <div @click="flipSorting"><h1>{{ $t("calc_price") }}
            <span v-if="sorting === 'desc'">
              <i class="fa fa-arrow-down"></i>
            </span>
            <span v-else>
              <i class="fa fa-arrow-up"></i>
            </span>
          </h1>
          </div>
        </th>
        <th>
          <div @click="flipSorting"><h1>{{ $t("calc_price_and_tax") }}
            <span v-if="sorting === 'desc'">
              <i class="fa fa-arrow-down"></i>
            </span>
            <span v-else>
              <i class="fa fa-arrow-up"></i>
            </span>
          </h1>
          </div>
        </th>
        <th><h1>{{ $t("calc_select") }}</h1></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in filteredProducts" :key="product.id" :class="product.type"
          @click="setSelectedIdAndLocation(product)">
        <td>{{ productFullName(product) }}</td>
        <td>
          <button type="button" class="btn btn-primary m-0">
            {{ product.asukoht }}
          </button>
        </td>
        <td>{{ product.hindIlmaKm }} €/t</td>
        <td>{{ calcTotal(product.hindIlmaKm, 2) }} €/t</td>
        <td><input :id="'product_' + product.id" type="radio" :name="product.name" v-model="selectedProductId"
                   :value="product.id"></td>
      </tr>
      </tbody>
    </table>
    <div class="container">
      <div class="card bg-dark text-light">
        <h3 v-if="selectedLocations <= 0" class="bg-danger text-dark text-center w-100">
          {{ $t('calc_select_atleast_one_location') }}</h3>
        <h3 v-if="!selectedProductId" class="bg-danger text-dark text-center w-100">{{ $t('calc_select_product') }}</h3>
        <div v-if="selectedProductId">
          <h3 class="card-header">{{ products.find(product => product.id === selectedProductId).asukoht }} -
            {{ products.find(product => product.id === selectedProductId).fraktsioon.toLowerCase() }} -
            {{ $t('calc_approx_price') }}: </h3>
          <div class="card-body">
            <!-- Alumised calc andmed            -->
            <div class="row">
              <div class="col mb-1 ">
                <CalcMap v-show="timeToCalculate"
                         @calculated-distance="updateDistance($event)"
                         @calculated-user-distance="updateUserShownDistance($event)"
                         :quarry-location="selectedProductLocation"
                         :starting-location="'Eesti, Koigi, Tammeküla'"
                         :destination-location="destinationLocation"
                         :time-to-calculate="timeToCalculate">
                </CalcMap>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="d-flex justify-content-center mb-1">
                  <div class="col-lg-4 col-sm-12 col-12">
                      <span class="input-group-text bg-green-custom text-wrap">
                        <strong>{{ $t('calc_full_loads_are_text')}} {{ listAllTruckSizesWithUnits}}{{$t('calc_tonnes_short')}}</strong>
                      </span>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="col-lg-4 col-sm-12 col-12">
                    <div class="input-group mb-1 ">
                      <span class="input-group-text bg-green-custom col-lg-4 col-6 col-md-3 col-sm-3">
                        {{ $t('calc_amount') }}
                      </span>
                      <input type="range" min="5" max="250" step="0.1" class="slider col-lg-4 d-none d-lg-inline"
                             v-model="selectedAmount">
                      <input class="form-control col-lg-4 col-sm-6 input-field" type="number" v-model="selectedAmount">
                      <span class="input-group-text bg-green-custom">{{ $t('calc_tonnes') }}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class=" col-lg-4 col-sm-12 col-12">
                    <div class="input-group mb-1 ">
                      <input class="form-control col-lg-2" type="text" @keypress.enter="calculateDistance"
                             v-model="destinationLocation"
                             :placeholder="$t('calc_where_to')">
                      <button type="button" class="input-group-text"
                              style="background-color: #f36f36; font-weight: bold" @click="calculateDistance">
                        {{ $t('calc_calculate') }}
                      </button>
                    </div>
                  </div>
                </div>
                <div v-show="timeToCalculate">
                  <hr>
                  <div class="d-flex justify-content-center">
                    <div class=" col-lg-4 col-sm-12 col-12">
                      <div class="input-group mb-1 ">
                        <span class="input-group-text w-75 bg-green-custom">
                          {{
                            $t('calc_material_price')
                          }} ({{ products.find(product => product.id === selectedProductId).fraktsioon.toLowerCase() }}) {{
                            selectedAmount
                          }} {{
                            $t('calc_tonnes')
                          }}
                        </span>
                        <input class="form-control input-field" readonly type="number"
                               v-model="totalProductPrice">
                        <span class="input-group-text bg-green-custom">€</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <div class=" col-lg-4 col-sm-12 col-12">
                      <div class="input-group mb-1">
                        <span class="input-group-text w-75 bg-green-custom">{{
                            $t('calc_transport_price')
                          }} ({{ necessaryTruckLoads }} {{ $tc('calc_truckload', necessaryTruckLoads) }} x {{ Math.round(selectedUserShownDistance) }}{{ $t('calc_km') }} x {{necessaryMinTruckSize}}{{$t('calc_tonnes_short')}}) </span>
                        <input class="form-control input-field" readonly type="number"
                               v-model="totalTransportPrice">
                        <span class="input-group-text bg-green-custom">€</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <div class=" col-lg-4 col-sm-12 col-12">
                      <div class="input-group mb-1">
                        <span class="input-group-text w-75 bg-green-custom">{{
                            $t('calc_total_vat')
                          }} ({{ k2ibemaks * 100 }}%) </span>
                        <input class="form-control input-field" readonly type="number"
                               v-model="totalTaxPrice">
                        <span class="input-group-text bg-green-custom">€</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <div class=" col-lg-4 col-sm-12 col-12">
                      <div class="input-group mb-1">
                        <span class="input-group-text w-75 bg-green-custom">{{ $t('calc_total_price') }}</span>
                        <input class="form-control input-field" readonly type="number"
                               v-model="totalPrice">
                        <span class="input-group-text   bg-green-custom">€</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <span class="input-group-text bg-green-custom justify-content-center text-wrap">
                        <strong>
                          {{ $t('calc_prices_are_estimates') }}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
export default {
  name: "hinnakalkulaator",
  data() {
    return {
      selectedAmount: 15, //esialgne valitud kogus
      selectedDistance: 0, //esialgne valitud distants
      selectedUserShownDistance: 0, //kasutajale näidatav distants
      transportStartPrice: 50, //min sõidutasu: hetkel pole kasutuses
      transportKmPrice: 1.2, //km hind käibemaksuta
      k2ibemaks: 0.2,
      selectedProductId: null,
      selectedProductLocation: '',
      destinationLocation: '',
      selectedLocations: [], //filtri jaoks valitud asukohad
      necessaryTruckLoads: 1, //koormate arv transpordihinna arvutamiseks
      necessaryMinTruckSize: [], //minimaalne autosuurus
      truckCapacatiesInTons: [15, 30], //võimalikud autokoormad tonnides
      sorting: 'desc',
      timeToCalculate: 0,
      products: [
        {
          id: "1",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/16",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "2",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/45",
          hindIlmaKm: "4",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "3",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/32",
          hindIlmaKm: "6.3",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "4",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/63",
          hindIlmaKm: "6.3",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "5",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 8/16",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "6",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 16/32",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "7",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 32/64",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "8",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/500",
          hindIlmaKm: "4.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "9",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/8",
          hindIlmaKm: "2.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "10",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/12",
          hindIlmaKm: "10",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "11",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/16",
          hindIlmaKm: "10",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "12",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 8/16",
          hindIlmaKm: "10",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "13",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/32",
          hindIlmaKm: "8.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "14",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/63",
          hindIlmaKm: "8.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "15",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 16/32",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "16",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 32/63",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "17",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 0/63",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "18",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 0/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "19",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 0/16",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "20",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/16 III klass",
          hindIlmaKm: "10.5",
          lisainfo: "Purunemiskindlusega LA≤30",
          type: "killustik"
        },
        {
          id: "21",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 16/32 III klass",
          hindIlmaKm: "8",
          lisainfo: "Purunemiskindlusega LA≤31",
          type: "killustik"
        },
        {
          id: "22",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 32/63 III klass",
          hindIlmaKm: "8",
          lisainfo: "Purunemiskindlusega LA≤32",
          type: "killustik"
        },
        {
          id: "23",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/32 III klass",
          hindIlmaKm: "9",
          lisainfo: "Purunemiskindlusega LA≤33",
          type: "killustik"
        },
        {
          id: "24",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/63 III klass",
          hindIlmaKm: "9",
          lisainfo: "Purunemiskindlusega LA≤34",
          type: "killustik"
        },
        {
          id: "26",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Sõelmed fr 0/4",
          hindIlmaKm: "2",
          lisainfo: "",
          type: "soelmed"
        },
        {
          id: "27",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Sõelutud kivi fr 0/32",
          hindIlmaKm: "5.5",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "28",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Sõelutud kivi fr 8/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "29",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Lõhatud paekivi",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "lohatud"
        },
        {
          id: "30",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Kruusasõelmed fr 0/4",
          hindIlmaKm: "5",
          lisainfo: "",
          type: "soelmed"
        },
        {
          id: "31",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Kruuskillustik fr 4/8",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "kruuskillustik"
        },
        {
          id: "32",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Kruuskillustik fr 8/12",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "kruuskillustik"
        },
        {
          id: "33",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Purustatud kruus fr 0/16",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "34",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Purustatud kruus fr 0/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "35",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Täiteliiv",
          hindIlmaKm: "3",
          lisainfo: "",
          type: "liiv"
        },
        {
          id: "36",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Seguliiv",
          hindIlmaKm: "3.5",
          lisainfo: "",
          type: "liiv"
        },
        {
          id: "37",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Sõelutud liiv fr 0/2",
          hindIlmaKm: "5",
          lisainfo: "",
          type: "liiv"
        },
        {
          id: "38",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Looduslik kruus",
          hindIlmaKm: "4",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "39",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 0/4",
          hindIlmaKm: "3.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "40",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 4/8",
          hindIlmaKm: "9",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "41",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 4/16",
          hindIlmaKm: "9",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "42",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 8/16",
          hindIlmaKm: "9",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "43",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 16/32",
          hindIlmaKm: "8.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "44",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 4/32",
          hindIlmaKm: "8.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "45",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 32/63",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "46",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 0/16",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "47",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 0/32",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "48",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 0/63",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "49",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/4",
          hindIlmaKm: "2.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "50",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 4/8",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "51",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 4/16",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "52",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 8/16",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "53",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 16/32",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "54",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 4/32",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "55",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 32/63",
          hindIlmaKm: "6.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "56",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/16",
          hindIlmaKm: "5.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "57",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/32",
          hindIlmaKm: "5.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "58",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/63",
          hindIlmaKm: "5.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "59",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/6",
          hindIlmaKm: "3",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "60",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 4/12",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "61",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 8/16",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "62",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 16/32",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "63",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 32/63",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "64",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "65",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/63",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "66",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/16",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "67",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lõhatud paekivi",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "lohatud"
        },
        {
          id: "68",
          ettevote: "Sopimetsa",
          asukoht: "Sopimetsa",
          fraktsioon: "Sõelutud muld",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "muld"
        }
      ],
    }
  },
  methods: {
    updateDistance(val) {
      this.selectedDistance = val;
    },
    updateUserShownDistance(val) {
      this.selectedUserShownDistance = val;
    },
    calculateDistance() {
      this.timeToCalculate++;
    },
    setSelectedIdAndLocation(product) {
      this.selectedProductId = product.id;
      this.selectedProductLocation = product.asukoht;
    },
    calcTax(price, round) {
      return parseFloat(price * this.k2ibemaks).toFixed(round);
    },
    calcTruckLoads(loadInTons) {
      let solutionFound = false;
      let n = 1;
      let possibleLoadSizes = [];

      while (!solutionFound) {
        possibleLoadSizes = this.truckCapacatiesInTons.filter(truck => {
          return ((n * truck) / loadInTons) >= 1
        })
        if (possibleLoadSizes.length === 1) {
          this.necessaryMinTruckSize = possibleLoadSizes[0];
          this.necessaryTruckLoads = n;
          solutionFound = true
        }
        if (possibleLoadSizes.length > 1) {
          this.necessaryMinTruckSize = Math.min(...possibleLoadSizes);
          this.necessaryTruckLoads = n;
          solutionFound = true;
        }
        if (possibleLoadSizes.length === 0) n++;
      }
    },
    calcTotal(price, round) {
      return parseFloat(price * (1 + this.k2ibemaks)).toFixed(round);
    },
    productFullName(product) {
      return product.fraktsioon;
    },
    flipSorting() {
      if (this.sorting === 'asc') {
        this.sorting = 'desc'
        return
      }
      if (this.sorting === 'desc') {
        this.sorting = 'asc'
      }
    },
    isAnActiveFilter(location) {
      return this.selectedLocations.includes(location)
    },
    toggleLocationFilter(location) {
      if (this.selectedLocations.includes(location)) {
        this.selectedLocations = this.selectedLocations.filter(loc => loc !== location)
      } else {
        this.selectedLocations.push(location)
      }
    },
  },
  computed: {
    quarry_locs() {
      return [...new Set(this.products.map(item => item.asukoht.split(' ')[0]))];
    },
    sortedProducts() {
      return [...this.products].sort((a, b) => {
        if (this.sorting === 'asc') {
          return parseFloat(a.hindIlmaKm) - parseFloat(b.hindIlmaKm)
        }
        if (this.sorting === 'desc') {
          return parseFloat(b.hindIlmaKm) - parseFloat(a.hindIlmaKm)
        }
      });
    },
    listAllTruckSizesWithUnits() {
      return this.truckCapacatiesInTons.join(this.$t('calc_tonnes_short') + ', ').replace(/,([^,]*)$/, ' ' + this.$t('and') + '$1')
    },
    filteredProducts() {
      return this.sortedProducts.filter(prod => {
        return this.selectedLocations.includes(prod.asukoht.split(' ')[0])
      })
    },
    totalPrice() {
      return parseFloat(parseFloat(this.totalProductPrice) + parseFloat(this.totalTransportPrice) + parseFloat(this.totalTaxPrice)).toFixed(2);
    },
    totalProductPrice() {
      const productObj = this.products.find(prod => prod.id === this.selectedProductId);
      return parseFloat(this.selectedAmount * +productObj.hindIlmaKm).toFixed(2);
    },
    totalTransportPrice() {
      return parseFloat((this.selectedDistance + ((this.necessaryTruckLoads - 1) * this.selectedUserShownDistance)) * this.transportKmPrice).toFixed(2);
    },
    totalTaxPrice() {
      return parseFloat(this.totalTransportPrice * this.k2ibemaks + this.totalProductPrice * this.k2ibemaks).toFixed(2);
    },
  },
  watch: {
    selectedAmount(newVal) {
      this.calcTruckLoads(newVal);
    }
  },
  created() {
    this.selectedLocations = [this.quarry_locs[0]] // esialgsel avamisel pane valitud karjääriks ainult esimene karjäär
    this.calcTruckLoads(this.selectedAmount);
  }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

.isActiveFilter {
  background-color: green;
  font-weight: bold;
}

.isNotActiveFilter {
  background-color: #646464;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color: #A7A1AE;
  background-color: #1F2739;
}

h1 {
  font-size: 3em;
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: #e5e5e5;
}

h2 {
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  display: block;
  line-height: 1em;
  padding-bottom: 2em;
  color: #FB667A;
}

h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: #FB667A;
  text-decoration: none;
}

.blue {
  color: #d0d0d0;
}

.orange {
  color: #f36f36;
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #d7d7d7;
}

.container td {
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0E1119;
  -moz-box-shadow: 0 2px 2px -2px #0E1119;
  box-shadow: 0 2px 2px -2px #0E1119;
}

.container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td, .container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
  background-color: #323C50;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
  background-color: #2C3446;
}

.container th {
  background-color: #1F2739;
}

.container tr {
  color: #f36f36;
}

.container tr:hover {
  background-color: #f36f36;
  color: #422f10;
  box-shadow: #422f10 -1px 1px, #422f10 -2px 2px, #422f10 -3px 3px, #422f10 -4px 4px, #422f10 -5px 5px, #422f10 -6px 6px;
  transform: translate3d(6px, -6px, 0);

  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: linear;
  font-weight: bold;
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}


input[type=range] {
  -webkit-appearance: none;
  margin: 18px 0;
  //width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: #1bac91;
  border-radius: 1.3px;
}

input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -14px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #127e6a;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #127e6a;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #127e6a;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

input[type=range]::-ms-fill-upper {
  background: #127e6a;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
  background: #127e6a;
}

input[type=range]:focus::-ms-fill-upper {
  background: #127e6a;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.input-field {
  padding-left: 5px;
  padding-right: 5px;
  text-align: right;
}

</style>
