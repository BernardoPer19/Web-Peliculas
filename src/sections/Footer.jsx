import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-zinc-800 text-zinc-300">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 class="text-2xl font-bold text-zinc-100">MrPelis.com</h2>
        <p class="text-sm text-zinc-400 mt-4 max-w-sm">
          Your platform for premium entertainment. Explore movies, series, and exclusive content from any device.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-zinc-200">Explore</h3>
        <ul class="mt-4 space-y-2">
          <li><a href="#" class="hover:text-zinc-100 transition">Home</a></li>
          <li><a href="#" class="hover:text-zinc-100 transition">Series</a></li>
          <li><a href="#" class="hover:text-zinc-100 transition">Movies</a></li>
          <li><a href="#" class="hover:text-zinc-100 transition">FAQs</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-zinc-200">Contact Us</h3>
        <ul class="mt-4 space-y-2">
          <li>Email: <a href="mailto:support@brand.com" class="hover:text-zinc-100 transition">MrPelis.com@brand.com</a></li>
          <li>Phone: <a href="tel:+1234567890" class="hover:text-zinc-100 transition">+1 234 567 890</a></li>
          <li>
            <div class="flex gap-4 mt-4">
              <a href="#" class="hover:text-zinc-100 transition">Facebook</a>
              <a href="#" class="hover:text-zinc-100 transition">Twitter</a>
              <a href="#" class="hover:text-zinc-100 transition">Instagram</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-8 border-t border-zinc-700 pt-6 text-sm text-center text-zinc-400">
      © 2024 BrandLogo. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
