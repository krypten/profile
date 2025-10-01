"use client"

import Link from 'next/link'
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, ThemeToggle } from "@/lib/components/ui"
import { CollapsibleDemo } from '@/lib/components/examples/collapsible-demo'

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="container-max section-padding">
        <div className="space-y-12">
          {/* Typography */}
          <section>
            <h1>Design System Showcase</h1>
            <h2 className="mt-4">Typography Scale</h2>
            <h3 className="mt-2">Project Title Level</h3>
            <p className="text-body-large mt-2">Large body text for important content</p>
            <p className="mt-2">Regular body text for general content</p>
            <p className="text-small mt-2">Small text for captions and metadata</p>
          </section>

          {/* Buttons */}
          <section>
            <h2>Button Variants</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>

            <h3 className="mt-6">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🎨</Button>
            </div>
          </section>

          {/* Badges */}
          <section>
            <h2>Badge Components</h2>
            <div className="space-y-4 mt-4">
              <div>
                <h3>Technology Categories</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="tech" category="ai">Artificial Intelligence</Badge>
                  <Badge variant="tech" category="security">Cybersecurity</Badge>
                  <Badge variant="tech" category="mobile">Mobile Development</Badge>
                  <Badge variant="tech" category="robotics">Robotics</Badge>
                  <Badge variant="tech">General Tech</Badge>
                </div>
              </div>

              <div>
                <h3>Standard Variants</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Cards */}
          <section>
            <h2>Card Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Card</CardTitle>
                  <CardDescription>
                    A sample project card showing the design system in action.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card demonstrates proper spacing, typography hierarchy, and color usage.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <Badge variant="tech" category="ai">AI</Badge>
                    <Badge variant="tech" category="security">Security</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">View Project</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Experience Card</CardTitle>
                  <CardDescription>
                    Showcasing different content types and layouts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Senior Developer</span>
                      <span className="text-small text-muted-foreground">2024-Present</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Building scalable systems and leading technical initiatives.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills Card</CardTitle>
                  <CardDescription>
                    Technology and skill showcase format.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Technical Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Collapsible */}
          <section>
            <h2>Collapsible Components</h2>
            <div className="space-y-8">
              {/* Basic Collapsible Demo */}
              <div>
                <h3>Basic Collapsible Elements</h3>
                <CollapsibleDemo />
              </div>
            </div>
          </section>

          {/* Color Palette */}
          <section>
            <h2>Color System</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded-md"></div>
                <p className="text-sm">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-secondary rounded-md"></div>
                <p className="text-sm">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent rounded-md"></div>
                <p className="text-sm">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-muted rounded-md"></div>
                <p className="text-sm">Muted</p>
              </div>
            </div>
          </section>

          {/* Interactive Components */}
          <section>
            <h2>Interactive Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Collapsible System</CardTitle>
                  <CardDescription>
                    Advanced collapsible components with smooth animations and category-based theming.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Perfect for organizing portfolio projects, experience sections, and hierarchical content.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Animated</Badge>
                    <Badge variant="outline">Accessible</Badge>
                    <Badge variant="outline">Responsive</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/design-system/collapsible">View Demo</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Spacing System */}
          <section>
            <h2>Spacing & Layout</h2>
            <div className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Layout Utilities</CardTitle>
                  <CardDescription>
                    Demonstrating consistent spacing and responsive design.
                  </CardDescription>
                </CardHeader>
                <CardContent className="card-spacing">
                  <div className="p-4 bg-muted rounded-md">
                    <p>Section padding applied</p>
                  </div>
                  <div className="p-card bg-accent rounded-md">
                    <p>Card spacing applied</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}