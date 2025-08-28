import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/ui/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Get in touch with us for bookings, membership inquiries, or any questions. 
              We&apos;re here to help you experience the best of Entebbe Club.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Address</h3>
                    <p className="text-neutral-600">
                      Entebbe Club<br />
                      Entebbe, Uganda<br />
                      Near Lake Victoria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Phone</h3>
                    <p className="text-neutral-600">
                      Main: +256 XXX XXX XXX<br />
                      Pro Shop: +256 XXX XXX XXX<br />
                      Restaurant: +256 XXX XXX XXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-600">
                      General: info@entebbeclub.com<br />
                      Bookings: bookings@entebbeclub.com<br />
                      Membership: membership@entebbeclub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Hours</h3>
                    <p className="text-neutral-600">
                      Golf Course: 6:00 AM - 7:00 PM<br />
                      Pro Shop: 6:00 AM - 6:00 PM<br />
                      Restaurant: 7:00 AM - 9:00 PM<br />
                      Clubhouse: 6:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm 
                type="general"
                title="Send us a Message"
                description="Fill out the form below and we'll get back to you as soon as possible"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Located in the beautiful city of Entebbe, just minutes from the airport and Lake Victoria
            </p>
          </div>
          
          <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-neutral-500 text-lg">Interactive Map Placeholder</p>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Getting Here</h3>
            <p className="text-neutral-600">
              From Entebbe International Airport: 10 minutes drive<br />
              From Kampala City Center: 45 minutes drive<br />
              From Lake Victoria: 5 minutes drive
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Quick Contact Options
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">
                  Speak directly with our staff for immediate assistance
                </p>
                <Button variant="outline" className="w-full">
                  +256 XXX XXX XXX
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">
                  Chat with us online during business hours
                </p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Book Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-4">
                  Reserve your tee time instantly online
                </p>
                <Button className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>How do I book a tee time?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  You can book a tee time by calling us, using our online booking system, 
                  or visiting the pro shop in person. We recommend booking at least 24 hours in advance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What are your operating hours?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Our golf course is open from 6:00 AM to 7:00 PM daily. The clubhouse and 
                  restaurant have extended hours. Please check our contact page for specific times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer golf lessons?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Yes, we offer professional golf instruction for all skill levels. 
                  Our PGA-certified professionals provide individual and group lessons.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I rent golf equipment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Yes, we have a full range of rental equipment including clubs, carts, 
                  and other accessories. Please contact the pro shop for availability and rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}