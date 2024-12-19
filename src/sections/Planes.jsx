import React from 'react'

function Planes() {
  return (
    <div>
      <section class="bg-zinc-900 py-16 text-zinc-300">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-center text-zinc-100">Subscription Plans</h2>
    <p class="text-center text-zinc-400 mt-4">
      Choose the plan that fits your entertainment needs.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div class="bg-zinc-800 p-8 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-zinc-100">Basic</h3>
        <p class="mt-4 text-zinc-400">Great for casual streaming.</p>
        <p class="mt-6 text-4xl font-bold text-zinc-100">$9.99</p>
        <p class="text-sm text-zinc-500">per month</p>
        <ul class="mt-6 space-y-3 text-sm">
          <li>✔ Access to all movies</li>
          <li>✔ Standard quality</li>
          <li>✔ Watch on 1 device</li>
        </ul>
        <button class="mt-8 bg-red-700 text-zinc-200 py-3 px-6 rounded-lg hover:bg-red-600 transition font-bold">
          Choose Basic
        </button>
      </div>

      <div class="bg-zinc-800 p-8 rounded-lg shadow-lg border border-zinc-700">
        <h3 class="text-2xl font-semibold text-zinc-100">Standard</h3>
        <p class="mt-4 text-zinc-400">Ideal for most users.</p>
        <p class="mt-6 text-4xl font-bold text-zinc-100">$14.99</p>
        <p class="text-sm text-zinc-500">per month</p>
        <ul class="mt-6 space-y-3 text-sm">
          <li>✔ Access to all movies & series</li>
          <li>✔ HD quality</li>
          <li>✔ Watch on 2 devices</li>
        </ul>
        <button class="mt-8 bg-red-700 text-zinc-200 py-3 px-6 rounded-lg hover:bg-red-600 transition font-bold">
          Choose Standard
        </button>
      </div>

      <div class="bg-zinc-800 p-8 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-zinc-100">Premium</h3>
        <p class="mt-4 text-zinc-400">The ultimate experience.</p>
        <p class="mt-6 text-4xl font-bold text-zinc-100">$19.99</p>
        <p class="text-sm text-zinc-500">per month</p>
        <ul class="mt-6 space-y-3 text-sm">
          <li>✔ Access to all content</li>
          <li>✔ Ultra HD quality</li>
          <li>✔ Watch on 4 devices</li>
        </ul>
        <button class="mt-8 bg-red-700 text-zinc-200 py-3 px-6 rounded-lg hover:bg-red-600 transition font-bold">
          Choose Premium
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Planes
