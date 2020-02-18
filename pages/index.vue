<template>
 <div class="font-sans bg-gray-200">
    <header class="bg-gray flex flex-col lg:flex-row items-center justify-between p-4">
      <div class="w-32">
       <img src="bella1.png" alt="logo">
      </div>
      <ul class="flex items-center text-sm text-gray-600">
        <li class="border-r border-gray-400 pr-4 mr-4"><a href="#" class="text-red-600 font-bold">Start a new group</a></li>
        <li class="mr-6"><a href="#" class="hover:text-red-600">Explore</a></li>
        <li class="mr-6"><nuxt-link to="/about" class="hover:text-red-600">About</nuxt-link></li>
        <li class="mr-6 relative">
          <a href="#" class="hover:text-red-600">Notifications</a>
          <div class="absolute w-2 h-2 rounded-full bg-green-500 right-0 top-0" style="right:-10px"></div>
        </li>
      </ul>
    </header>

    <div class="bg-meetup-black text-center py-8 pb-20">
      <div class="text-white text-4xl font-bold">Find your next event</div>
      <div class="text-gray-400">
        <span class="mr-2">41 events in your groups</span>
        <span class="mr-2">&middot;</span>
        <span>3,981 events near you</span>
      </div>
    </div>

    <footer class="bg-gray-900 text-white">
      <div class="container mx-auto px-8 xl:px-40 py-8">
        <div class="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
          <div><a href="#" class="font-bold">Start a new group</a></div>
          <div><a href="#">Logout</a></div>
        </div>
        <div class="links mb-8">
          <ul class="flex">
            <li class="mr-4"><a href="#">Help</a></li>
            <li class="mr-4"><a href="#">About Us</a></li>
            <li class="mr-4"><a href="#">Jobs</a></li>
            <li class="mr-4"><a href="#">Apps</a></li>
            <li class="mr-4"><a href="#">API</a></li>
            <li class="mr-4"><a href="#">Topics</a></li>
            <li class="mr-4"><a href="#">Browse Cities</a></li>
            <li class="mr-4"><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="social mb-6">
          <div>Follow us</div>
          <div>Lazy to put social icons here</div>
        </div>

        <div class="copyright text-sm text-gray-400 mb-4">
          &copy; 2019 Bella
        </div>

        <div class="privacy">
          <ul class="flex">
            <li class="mr-4"><a href="#">Privacy</a></li>
            <li class="mr-4"><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>

export default {
  head() {
    return {
      title: 'Bella' + ' | Tailwind CSS v1.0 - Examples of Web Pages'
    }
  },
  data() {
    return {
      dateFormat: 'D MMM',
      dateOne: '',
      dateTwo: ''
    }
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    }
  }
}
</script>

