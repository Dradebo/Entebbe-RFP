import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Entebbe Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Experience the finest golfing in Uganda with our world-class facilities 
              and stunning course overlooking Lake Victoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4">
                Book Tee Time
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Entebbe Club?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover what makes our club the premier golfing destination in Uganda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>World-Class Course</CardTitle>
                <CardDescription>
                  Our 18-hole championship course offers challenging play for all skill levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Designed to international standards, our course features pristine fairways, 
                  challenging bunkers, and stunning views of Lake Victoria.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Facilities</CardTitle>
                <CardDescription>
                  State-of-the-art clubhouse with dining, pro shop, and practice areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Enjoy our modern clubhouse with fine dining, fully-equipped pro shop, 
                  and extensive practice facilities including driving range and putting greens.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exclusive Membership</CardTitle>
                <CardDescription>
                  Join our community of golf enthusiasts and business professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Become part of our exclusive community with access to member-only events, 
                  tournaments, and networking opportunities.
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
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-8 text-secondary-100">
            Book your tee time today or contact us to learn more about membership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-secondary-600 hover:bg-secondary-50">
              Book Now
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