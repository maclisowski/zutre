<template>
  <div 
    class="bar-item"
    :class="barItemClass" 
    :data-tooltip="tooltipString" 
    :style="{ width: 'calc(' + position + ')', 'margin-left': 'calc(' + min + '%)' }" 
    :aria-valuenow="value" 
    :aria-valuemin="min" 
    :aria-valuemax="max"
  >
    <template v-if="hasDefaultSlot">
      <slot></slot>
    </template>
    <template v-if="!hasDefaultSlot">
      {{content}}
    </template>
  </div>
</template>
  <script>
/**
 * ZBarItem
 *
 * Spectre: https://picturepan2.github.io/spectre/components/bars.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {Number} min
 * @prop {Number} max
 * @prop {Number} value
 * @prop {String} tooltip
 * @prop {String} content
 */
export default {
  name: 'BarItem',
  props: {
    min: {
      type: Number,
      default: () => 0
    },
    max: {
      type: Number,
      default: () => 100
    },
    value: {
      type: Number,
      default: () => 0
    },
    tooltip: String,
    content: String,
  },
  data () {
    return {
    };
  },
  mounted () {
    this.$root.$on('bar-btn:move', (event) => {
      console.log(event.component.distX)
      
      // this.$root.$emit('update:value', )
      // this.position = this.value + '%' + event.component.distX + 'px';
      // console.log(this.position)
    })
  },
  computed: {
    position () {
      return ((100 / (this.max - this.min)) * this.value) + '%';
    },
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    barItems () {
      return this.items;
    },
    tooltipString () {
      return (typeof this.tooltip === "string" && this.tooltip.length > 0) ? this.tooltip : null;
    },
    barItemClass () {
      let css = {};

      if (typeof this.tooltip === "string" && this.tooltip.length > 0) {
        css['tooltip'] = true;
      }

      return css;
    }
  }
}
</script>
