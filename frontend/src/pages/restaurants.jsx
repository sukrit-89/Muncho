import React, { useMemo, useState } from 'react';
import { Clock3, Flame, MapPin, Search, SlidersHorizontal, Star } from 'lucide-react';

const cuisines = ['All', 'Burgers', 'Pizza', 'Asian', 'Healthy', 'Desserts', 'Indian'];

const restaurants = [
  {
    id: 1,
    name: 'FireCrust Pizza Lab',
    cuisine: 'Pizza',
    rating: 4.8,
    deliveryTime: '25-35 min',
    distance: '1.4 km',
    priceForTwo: '$24',
    promoted: true,
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    tags: ['Wood Fired', 'Best Seller'],
  },
  {
    id: 2,
    name: 'Buns & Beyond',
    cuisine: 'Burgers',
    rating: 4.6,
    deliveryTime: '20-30 min',
    distance: '0.9 km',
    priceForTwo: '$18',
    promoted: false,
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    tags: ['Smash Burgers', 'Quick Bite'],
  },
  {
    id: 3,
    name: 'Saffron Route',
    cuisine: 'Indian',
    rating: 4.7,
    deliveryTime: '30-40 min',
    distance: '2.1 km',
    priceForTwo: '$22',
    promoted: true,
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Spicy', 'Chef Special'],
  },
  {
    id: 4,
    name: 'Green Bowl Society',
    cuisine: 'Healthy',
    rating: 4.5,
    deliveryTime: '15-25 min',
    distance: '1.1 km',
    priceForTwo: '$20',
    promoted: false,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Low Cal', 'Fresh'],
  },
  {
    id: 5,
    name: 'Wok Theory',
    cuisine: 'Asian',
    rating: 4.4,
    deliveryTime: '20-35 min',
    distance: '1.8 km',
    priceForTwo: '$19',
    promoted: false,
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    tags: ['Noodles', 'Comfort Food'],
  },
  {
    id: 6,
    name: 'Cloud Nine Desserts',
    cuisine: 'Desserts',
    rating: 4.9,
    deliveryTime: '15-20 min',
    distance: '0.7 km',
    priceForTwo: '$16',
    promoted: true,
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Signature', 'Trending'],
  },
];

function RestaurantsPage() {
  const [query, setQuery] = useState('');
  const [activeCuisine, setActiveCuisine] = useState('All');
  const [showPromotedOnly, setShowPromotedOnly] = useState(false);

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      const matchesQuery =
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(query.toLowerCase());
      const matchesCuisine = activeCuisine === 'All' || r.cuisine === activeCuisine;
      const matchesPromoted = !showPromotedOnly || r.promoted;
      return matchesQuery && matchesCuisine && matchesPromoted;
    });
  }, [query, activeCuisine, showPromotedOnly]);

  return (
    <div className='min-h-screen bg-[#fff8f2] text-zinc-900'>
      <div className='mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <header className='mb-8 rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 p-[1px] shadow-xl'>
          <div className='rounded-3xl bg-white/90 p-6 backdrop-blur'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-orange-600'>
              Muncho Discover
            </p>
            <h1 className='mt-2 text-3xl font-black tracking-tight sm:text-4xl'>
              Find Your Next Favorite Restaurant
            </h1>
            <p className='mt-2 max-w-2xl text-sm text-zinc-600'>
              Curated picks, fast delivery, and menu experiences worth craving again.
            </p>

            <div className='mt-5 flex flex-col gap-3 md:flex-row md:items-center'>
              <label className='relative block w-full md:max-w-md'>
                <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400' />
                <input
                  type='text'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder='Search restaurants or cuisines'
                  className='w-full rounded-2xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm outline-none ring-orange-500 transition focus:ring-2'
                />
              </label>

              <button
                type='button'
                onClick={() => setShowPromotedOnly((prev) => !prev)}
                className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  showPromotedOnly
                    ? 'bg-zinc-900 text-white'
                    : 'border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                <SlidersHorizontal className='h-4 w-4' />
                Promoted only
              </button>
            </div>
          </div>
        </header>

        <section className='mb-6 flex flex-wrap gap-2'>
          {cuisines.map((c) => (
            <button
              key={c}
              type='button'
              onClick={() => setActiveCuisine(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCuisine === c
                  ? 'bg-zinc-900 text-white shadow'
                  : 'border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300'
              }`}
            >
              {c}
            </button>
          ))}
        </section>

        <section>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-lg font-bold'>
              {filtered.length} Restaurant{filtered.length === 1 ? '' : 's'}
            </h2>
            <p className='text-xs font-medium uppercase tracking-wide text-zinc-500'>
              Live around you
            </p>
          </div>

          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {filtered.map((restaurant) => (
              <article
                key={restaurant.id}
                className='group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg'
              >
                <div className='relative h-44 overflow-hidden'>
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                  />
                  {restaurant.promoted && (
                    <span className='absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white'>
                      <Flame className='h-3.5 w-3.5' />
                      Promoted
                    </span>
                  )}
                </div>

                <div className='p-4'>
                  <div className='mb-1 flex items-start justify-between gap-3'>
                    <h3 className='text-base font-extrabold'>{restaurant.name}</h3>
                    <span className='inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700'>
                      <Star className='h-3.5 w-3.5 fill-current' />
                      {restaurant.rating}
                    </span>
                  </div>

                  <p className='text-sm text-zinc-500'>{restaurant.cuisine}</p>

                  <div className='mt-3 flex items-center gap-4 text-xs font-medium text-zinc-600'>
                    <span className='inline-flex items-center gap-1'>
                      <Clock3 className='h-3.5 w-3.5' />
                      {restaurant.deliveryTime}
                    </span>
                    <span className='inline-flex items-center gap-1'>
                      <MapPin className='h-3.5 w-3.5' />
                      {restaurant.distance}
                    </span>
                    <span>{restaurant.priceForTwo} for two</span>
                  </div>

                  <div className='mt-4 flex flex-wrap gap-2'>
                    {restaurant.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default RestaurantsPage;
