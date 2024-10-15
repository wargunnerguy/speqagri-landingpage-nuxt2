<template>
  <section class="our-facts pb-3" >
    <div class="container">
        <div class="section-heading p-3">
          <h2>{{ $t('machinery') }}</h2>
        </div>
      <div class="row row-cols-2" id="masinad">
        <machine-item type="video" media-name='newholland_t500_preview_360p.mp4'>New Holland T5.105</machine-item>
        <machine-item type="image" media-name='SANY_215.jpg' media-tiny-name="SANY_215_tiny.jpg">SANY 215</machine-item>
        <machine-item type="image" media-name='Caterpillar444_720.jpg' media-tiny-name="Caterpillar444_tiny.jpg">Caterpillar 444</machine-item>
        <machine-item type="image" media-name='T7_210_AC.jpg' media-tiny-name="T7_210_AC_tiny.jpg">New Holland T7.210 AC</machine-item>
        <machine-item type="image" media-name='CaterpillarCR308_720_3.jpg' media-tiny-name="CaterpillarCR308_tiny.jpg">Caterpillar CR308</machine-item>
        <machine-item type="image" media-name='LSPN4003_720_3.jpg' media-tiny-name="LSPN4003_tiny.jpg">Volvo FH12, {{ $t("attached_plow") }}</machine-item>
        <machine-item type="video" media-name='kallur.mp4'>Volvo FH F.X Meiller</machine-item>
        <machine-item type="image" media-name='SANYSY215CLC_720_3.jpg' media-tiny-name="SANYSY215CLC_tiny.jpg">SANY SY215C LC</machine-item>
        <machine-item type="image" media-name='RenaultMidlum_720_3.jpg' media-tiny-name="RenaultMidlum_tiny.jpg">Renault Midlum {{ $t("tanker") }}</machine-item>
        <machine-item type="image" media-name='Volvo_tilted_720_3.jpg' media-tiny-name="Volvo_tilted_tiny.jpg">Volvo FH12</machine-item>
        <machine-item type="image" media-name='VolvoFM12_720_3.jpg' media-tiny-name="VolvoFM12_tiny.jpg">Volvo FM12, {{ $t("multilift") }}</machine-item>
        <machine-item type="image" media-name='VolvoFM12_CAT308_720_3.jpg' media-tiny-name="VolvoFM12_CAT308_tiny.jpg">Volvo FM12, {{ $t("multilift") }}        </machine-item>
        <machine-item type="image" media-name='VOLVOH12_720_3.jpg' media-tiny-name="VOLVOH12_tiny.jpg">Volvo FH12</machine-item>
        <machine-item type="image" media-name='VolvoFH.jpg' media-tiny-name="VolvoFH_tiny.jpg">Volvo FH</machine-item>
<!--        <machine-item type="image" media-name='Manitou_720_3.png' media-tiny-name="Manitou_720_tiny.png">Manitou</machine-item>-->

      </div>
      <div class="row row-cols-1">
        <machine-item type="image" media-name='topeltlai/Manitou_1440_3.jpg' media-tiny-name="topeltlai/Manitou_wide_tiny.jpg">Manitou</machine-item>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "TheMachines",

}
</script>

<style scoped>

h2 {
  font-size: 35px;
  font-weight: inherit;
  border: none;
  text-decoration: none;
}
</style>
