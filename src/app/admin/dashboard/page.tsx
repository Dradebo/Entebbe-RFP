'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <h1 className="text-xl font-semibold text-neutral-900">
                Entebbe Club Admin
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-neutral-600">
                Welcome, {session.user?.name}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push('/')}
              >
                View Site
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Content Management Dashboard
          </h2>
          <p className="text-neutral-600">
            Manage your website content, news, and announcements
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">News Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary-600">0</div>
              <p className="text-sm text-neutral-600">Published articles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary-600">0</div>
              <p className="text-sm text-neutral-600">Active announcements</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent-gold">5</div>
              <p className="text-sm text-neutral-600">Static pages</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push('/admin/news')}>
            <CardHeader>
              <CardTitle className="text-lg">Manage News</CardTitle>
              <CardDescription>
                Add, edit, and publish news articles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Manage News
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push('/admin/announcements')}>
            <CardHeader>
              <CardTitle className="text-lg">Announcements</CardTitle>
              <CardDescription>
                Create and manage announcements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Manage Announcements
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push('/admin/content')}>
            <CardHeader>
              <CardTitle className="text-lg">Page Content</CardTitle>
              <CardDescription>
                Edit static page content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Edit Content
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push('/admin/settings')}>
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
              <CardDescription>
                Manage admin settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest changes and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-neutral-500">
                <p>No recent activity</p>
                <p className="text-sm">Start managing content to see activity here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}