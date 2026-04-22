export default function ContentPage() {
    return ( 
        <div class="min-h-screen bg-slate-900 text-white flex p-6 gap-6">

  <div class="w-40 bg-slate-800 rounded-2xl p-6 flex flex-col gap-8">
    <div class="text-2xl font-bold">☁</div>

    <div class="flex flex-col gap-6 text-slate-300">
      <div class="flex items-center gap-3">
        <span>🌤</span>
        <span>Weather</span>
      </div>
      <div class="flex items-center gap-3">
        <span>📊</span>
        <span>Cities</span>
      </div>
      <div class="flex items-center gap-3">
        <span>🗺️</span>
        <span>Map</span>
      </div>
      <div class="flex items-center gap-3">
        <span>⚙️</span>
        <span>Settings</span>
      </div>
    </div>
  </div>

  <div class="flex-1 flex gap-6">

    <div class="flex-1 flex flex-col gap-6">

      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold">Madrid</h1>
          <p class="text-slate-400">Chance of rain: 0%</p>
          <h2 class="text-6xl font-bold mt-4">31°</h2>
        </div>
        <div class="text-8xl">☀</div>
      </div>

      <div class="bg-slate-800 rounded-2xl p-6">
        <h3 class="text-slate-400 mb-4">Today&apos;s Forecast</h3>
        <div class="grid grid-cols-6 gap-4 text-center">
          <div>
            <p className="text-slate-400">6:00 AM</p>
            <p class="text-2xl">☁</p>
            <p>25°</p>
          </div>
          <div>
            <p class="text-slate-400">9:00 AM</p>
            <p class="text-2xl">🌤️</p>
            <p>28°</p>
          </div>
          <div>
            <p class="text-slate-400">12:00 PM</p>
            <p class="text-2xl">☀️</p>
            <p>33°</p>
          </div>
          <div>
            <p class="text-slate-400">3:00 PM</p>
            <p class="text-2xl">☀️</p>
            <p>34°</p>
          </div>
          <div>
            <p class="text-slate-400">6:00 PM</p>
            <p class="text-2xl">☀️</p>
            <p>32°</p>
          </div>
          <div>
            <p class="text-slate-400">9:00 PM</p>
            <p class="text-2xl">🌤️</p>
            <p>30°</p>
          </div>
        </div>
      </div>

      <div class="bg-slate-800 rounded-2xl p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-slate-400">Air Conditions</h3>
          <button class="bg-sky-500 px-4 py-1 rounded-full text-sm">
            See more
          </button>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🌡️</span>
            <div>
              <p class="text-slate-400">Real Feel</p>
              <p class="text-2xl font-semibold">30°</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">💨</span>
            <div>
              <p class="text-slate-400">Wind</p>
              <p class="text-2xl font-semibold">0.2 km/h</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">💧</span>
            <div>
              <p class="text-slate-400">Chance of rain</p>
              <p class="text-2xl font-semibold">0%</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">☀️</span>
            <div>
              <p class="text-slate-400">UV Index</p>
              <p class="text-2xl font-semibold">3</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="w-80 bg-slate-800 rounded-2xl p-6">
  <h3 class="text-slate-400 mb-6">7-Day Forecast</h3>

  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center">
      <span>Today</span>
      <span>☀ Sunny</span>
      <span>36/22</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Tue</span>
      <span>☀ Sunny</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Wed</span>
      <span>☀ Sunny</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Thu</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Fri</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Sat</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Sun</span>
      <span>⛈ Storm</span>
      <span>37/21</span>
    </div>
  </div>
</div>

  </div>
</div>
    )
}