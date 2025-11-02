<template>
  <div
    class="watches"
    :style="{
      '--hours-rotate': hoursDeg,
      '--minutes-rotate': minutesDeg + 'deg',
      '--seconds-rotate': secondsDeg + 'deg'
    }"
  >
    <div class="watches__clock-hand minutes-1" :style="{ rotate: minutesDeg + 'deg' }"></div>
    <div class="watches__clock-hand seconds" :style="{ rotate: secondsDeg + 'deg' }"></div>
    <div class="watches__clock-hand hours" :style="{ rotate: hoursDeg + 'deg' }">
      <div class="watches__hours-number" :style="{ rotate: '-' + hoursDeg + 'deg' }">{{ hours }}</div>
    </div>
    <div class="watches__clock-hand minutes-2" :style="{ rotate: minutesDeg + 'deg' }"></div>
  </div>
</template>

<script>
export default {
  name: 'WallClock',

  data: () => ({
    hoursDeg: 0,
    minutesDeg: 0,
    secondsDeg: 0,

    hours: 0
  }),

  mounted() {
    this.setTime()
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime() {
      const date = new Date()
      let hours = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()

      this.hoursDeg = (hours / 12) * 100 * (360 / 100)
      this.hours = hours === 0 || hours === 12 ? 12 : hours % 12
      this.minutesDeg = (minutes / 60) * 100 * (360 / 100)
      this.secondsDeg = (seconds / 60) * 100 * (360 / 100)
    }
  }
}
</script>

<style lang="scss">
.watches {
  --clock-hand-width: 50px;
  --clock-hand-border-width: 4px;

  & {
    position: relative;

    overflow: hidden;

    width: 400px;
    max-width: calc(100% - 40px);
    max-height: calc(100% - 40px);

    border-radius: 50%;
    background: var(--soft-orange);

    aspect-ratio: 1 / 1;
  }

  &__clock-hand {
    position: absolute;
    bottom: calc(50% - (var(--clock-hand-width) / 2));
    left: calc(50% - (var(--clock-hand-width) / 2));

    width: var(--clock-hand-width);

    transform-origin: 50% calc(100% - (var(--clock-hand-width) / 2));

    border-radius: calc(var(--clock-hand-width) / 2);

    &.minutes-1 {
      box-shadow: 0 0 0 100vw var(--cyan);
    }
    &.minutes-1,
    &.minutes-2 {
      height: 40%;

      border: var(--clock-hand-border-width) solid var(--black);
    }
    &.seconds {
      height: 55%;

      border: var(--clock-hand-border-width) solid var(--black);
      box-shadow: 0 0 0 100vw var(--cyan);
    }

    &.hours {
      height: 55%;

      color: var(--black);
      padding-top: 8px;
    }
  }
  &__hours-number {
    text-align: center;

    font-size: 28px;
  }
}
</style>
