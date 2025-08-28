import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-600 to-secondary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Facilities
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary-100">
              Discover our world-class golf course and premium amenities designed 
              to provide an exceptional golfing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Golf Course */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Championship Golf Course
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our 18-hole championship course is designed to challenge golfers of all skill levels 
                while providing stunning views of Lake Victoria and the surrounding landscape.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Course Details</h3>
                  <ul className="text-neutral-600 space-y-1">
                    <li>• 18 holes, Par 72</li>
                    <li>• 7,200 yards from tips</li>
                    <li>• Multiple tee options</li>
                    <li>• Championship layout</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Course Features</h3>
                  <ul className="text-neutral-600 space-y-1">
                    <li>• Strategic bunkering</li>
                    <li>• Water hazards</li>
                    <li>• Undulating greens</li>
                    <li>• Natural landscaping</li>
                  </ul>
                </div>
              </div>
              <Button size="lg">
                Book Tee Time
              </Button>
            </div>
            <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-neutral-500 text-lg">Course Aerial View</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Facilities */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Practice Facilities
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Perfect your game with our comprehensive practice facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Driving Range</CardTitle>
                <CardDescription>
                  State-of-the-art practice facility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-neutral-600 space-y-2">
                  <li>• 300-yard driving range</li>
                  <li>• Covered hitting bays</li>
                  <li>• Professional instruction</li>
                  <li>• Ball dispensers</li>
                  <li>• Target greens</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Putting Greens</CardTitle>
                <CardDescription>
                  Multiple practice putting areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Large practice green</li>
                  <li>• Multiple hole locations</li>
                  <li>• Various slopes and breaks</li>
                  <li>• Chipping area</li>
                  <li>• Bunker practice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Short Game Area</CardTitle>
                <CardDescription>
                  Dedicated short game practice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Chipping practice</li>
                  <li>• Pitching area</li>
                  <li>• Bunker practice</li>
                  <li>• Approach shots</li>
                  <li>• Professional guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clubhouse */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-neutral-500 text-lg">Clubhouse Exterior</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Modern Clubhouse
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our elegant clubhouse provides the perfect setting for dining, socializing, 
                and business meetings with stunning views of the course and Lake Victoria.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Fine Dining Restaurant</h3>
                    <p className="text-neutral-600">Gourmet cuisine with local and international flavors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Bar & Lounge</h3>
                    <p className="text-neutral-600">Relax with drinks and light snacks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Meeting Rooms</h3>
                    <p className="text-neutral-600">Professional meeting and event spaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Pro Shop</h3>
                    <p className="text-neutral-600">Premium golf equipment and apparel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Shop */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Pro Shop
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Everything you need for your golf game in one place
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <CardTitle>Golf Clubs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-600">
                  Premium clubs from top manufacturers
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <CardTitle>Apparel</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-600">
                  Stylish golf clothing and accessories
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Equipment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-600">
                  Balls, bags, and accessories
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <CardTitle>Services</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-600">
                  Club fitting and repair services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Additional Amenities
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Everything you need for a complete golfing experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Golf Cart Fleet</CardTitle>
                <CardDescription>
                  Modern electric and gas carts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-neutral-600 space-y-2">
                  <li>• GPS-enabled carts</li>
                  <li>• Electric and gas options</li>
                  <li>• Well-maintained fleet</li>
                  <li>• Cart path system</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Locker Rooms</CardTitle>
                <CardDescription>
                  Private and secure storage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Individual lockers</li>
                  <li>• Shower facilities</li>
                  <li>• Towel service</li>
                  <li>• Secure storage</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Event Spaces</CardTitle>
                <CardDescription>
                  Perfect for tournaments and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Tournament organization</li>
                  <li>• Corporate events</li>
                  <li>• Private parties</li>
                  <li>• Catering services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>WiFi & Technology</CardTitle>
                <CardDescription>
                  Stay connected throughout your visit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Free WiFi access</li>
                  <li>• Mobile app integration</li>
                  <li>• Digital scorecards</li>
                  <li>• Online booking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Facilities
          </h2>
          <p className="text-xl mb-8 text-secondary-100">
            Book your tee time and discover why Entebbe Club is Uganda&apos;s premier golf destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-secondary-600 hover:bg-secondary-50">
              Book Tee Time
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-600">
              Schedule Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}