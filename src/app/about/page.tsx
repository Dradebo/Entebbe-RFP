import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Entebbe Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              A legacy of excellence in golf and community since our founding, 
              providing world-class facilities and exceptional experiences.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Rich History
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Founded with a vision to create Uganda&apos;s premier golfing destination, 
                Entebbe Club has grown from a small local course to a world-class facility 
                that attracts golfers from around the globe.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Our course, designed to international standards, offers challenging play 
                for all skill levels while providing stunning views of Lake Victoria and 
                the surrounding landscape.
              </p>
              <p className="text-lg text-neutral-600">
                Today, we continue to uphold the traditions of excellence while embracing 
                modern innovations to provide our members and guests with an unparalleled 
                golfing experience.
              </p>
            </div>
            <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-neutral-500 text-lg">Course Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We are committed to excellence in everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  Maintaining the highest standards in golf and service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  We strive for excellence in every aspect of our operations, 
                  from course maintenance to member service, ensuring the best 
                  possible experience for all.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Building strong relationships and fostering connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                                  Our club is more than just a golf course - it&apos;s a community 
                where friendships are formed, business relationships flourish, 
                and memories are created.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heritage</CardTitle>
                <CardDescription>
                  Preserving tradition while embracing innovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  We honor our rich history and traditions while continuously 
                  improving our facilities and services to meet modern expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make Entebbe Club exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-neutral-500">Photo</span>
                </div>
                <CardTitle>John Smith</CardTitle>
                <CardDescription>Club Manager</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-600">
                  Leading our club with over 15 years of experience in golf 
                  club management and hospitality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-neutral-500">Photo</span>
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Head Golf Professional</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-600">
                  PGA certified professional with expertise in instruction, 
                  course management, and tournament organization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-neutral-500">Photo</span>
                </div>
                <CardTitle>Michael Brown</CardTitle>
                <CardDescription>Course Superintendent</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-neutral-600">
                  Ensuring our course maintains the highest standards with 
                  over 20 years of golf course maintenance experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Legacy
          </h2>
          <p className="text-xl mb-8 text-secondary-100">
            Join us and become part of our storied tradition of excellence in golf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-secondary-600 hover:bg-secondary-50">
              Book a Visit
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}