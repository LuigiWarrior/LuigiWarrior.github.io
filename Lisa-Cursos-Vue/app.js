new Vue({
  el: "#app",

  data() {
    return {
      courses: [],
      id: 0,
      title: "",
      time: null,
    };
  },
  methods: {
    addCourse() {
      course = { id: ++this.id, title: this.title, time: this.time };
      this.courses.push(course);
      this.title = "";
      this.time = null;
    },
    deleteCourse(index) {
      if (index === 0) {
        this.courses.splice(index, 1);
      } else {
        if (index > 0 && index < parseInt(this.courses.length - 1)) {
          this.courses.splice(index, 1);
        } else {
          this.courses.splice(index);
        }
      }
    },
  },

  computed: {
    totalTime() {
      let totalHoras = 0;
      for (i = 0; i < this.courses.length; i++) {
        totalHoras += parseInt(this.courses[i].time);
        console.log(totalHoras);
      }
      return totalHoras;
    },
  },
  watch: {
    verificar() {},
  },
});
