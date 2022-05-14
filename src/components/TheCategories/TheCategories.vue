<template>
  <section :class="classes">
    <div class="border-t border-b px-4 max-w-screen-2xl m-auto">
      <div class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
        <CategoryItem
          v-for="cotegory in categories"
          :key="cotegory"
          :category="cotegory"
          :isActive="cotegory === 'All'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";

export default {
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories: [
        "All",
        "Trucks",
        "Tools",
        "Machines",
        "Engines",
        "Snow",
        "Ships",
        "Roads",
        "Tanks",
        "Building",
        "Mars",
        "Woodworking",
        "Tractors",
        "Songs",
        "TV Shows",
        "Football",
        "Planes",
        "Live",
        "Streets",
        "Math",
        "Programming",
      ],
    };
  },
  props: {
    isSidebarOpen: Boolean,
  },
  computed: {
    classes() {
      return [
        this.isSidebarOpen ? "xl:pl-64" : "md:pl-24",
        "pt-14",
        "w-full",
        "fixed",
        "bg-white",
        "bg-opacity-95",
        "z-10",
      ];
    },
  },
};
</script>

<style></style>
