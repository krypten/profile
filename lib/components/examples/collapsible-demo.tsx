'use client'

import React from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/lib/components/ui/collapsible'
import { Badge } from '@/lib/components/ui/badge'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card'
import {
  Brain,
  Shield,
  Smartphone,
  Code,
  Database,
  Cloud,
  Star,
  Calendar,
  MapPin,
  Github,
  Globe,
  ExternalLink,
  Award,
  FileText,
  Play
} from 'lucide-react'

export function CollapsibleDemo() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Collapsible Design System</h1>
        <p className="text-muted-foreground">
          Interactive components for organizing and displaying hierarchical content
        </p>
      </div>

      {/* Basic Collapsible */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Collapsible</CardTitle>
        </CardHeader>
        <CardContent>
          <Collapsible defaultOpen={false}>
            <CollapsibleTrigger className="border rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">React, TypeScript, Next.js</p>
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Comprehensive frontend development experience with modern frameworks and tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Project Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Project Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* AI Projects */}
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger className="border rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg border bg-background/50">
                    <Brain className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold">AI & Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">Building intelligent systems</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">3</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">AI-Driven Developer Agents</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">2024</Badge>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href="https://github.com/example/ai-agents" target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href="https://demo.ai-agents.com" target="_blank" rel="noopener noreferrer">
                            <Globe className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Building AI agents to accelerate engineering workflows across development teams with MCP integrations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">AI Agents</Badge>
                    <Badge variant="secondary">MCP</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">Deep Learning Research</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">2019</Badge>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href="https://github.com/krypten/Deep-Learning" target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href="https://github.com/krypten/MobileDeepColorization" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Deep learning foundation research and practical implementations across computer vision and NLP domains
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">NLP</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">Deep Learning Nanodegree</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">2017</Badge>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href="https://www.udacity.com/certificate/e/72699778-b570-11e7-a0a7-7b09ea5eb1da" target="_blank" rel="noopener noreferrer">
                            <Award className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive deep learning program covering neural networks, CNNs, RNNs, and GANs
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Neural Networks</Badge>
                    <Badge variant="secondary">CNN</Badge>
                    <Badge variant="secondary">RNN</Badge>
                    <Badge variant="secondary">GAN</Badge>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Security Projects */}
          <Collapsible defaultOpen={false}>
            <CollapsibleTrigger className="border rounded-lg bg-red-50 dark:bg-red-950/20">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg border bg-background/50">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold">Security & Cyber Defense</h3>
                  <p className="text-sm text-muted-foreground">Offensive and defensive security</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-red-600">2</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg hover:border-red-200 dark:hover:border-red-800 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">CTF Workbook</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">2024</Badge>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href="https://github.com/krypten/ctf-workbook" target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href="https://krypten.github.io/ctf-workbook/" target="_blank" rel="noopener noreferrer">
                            <FileText className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive documentation of offensive tactics and exploits for cybersecurity education and training
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Penetration Testing</Badge>
                    <Badge variant="secondary">Documentation</Badge>
                    <Badge variant="secondary">Web Security</Badge>
                    <Badge variant="secondary">Network Security</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:border-red-200 dark:hover:border-red-800 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">HTB Certified Penetration Testing Specialist</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">2024</Badge>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href="https://academy.hackthebox.com/achievement/badge/your-badge-id" target="_blank" rel="noopener noreferrer">
                            <Award className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Advanced penetration testing certification covering comprehensive offensive security methodologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Penetration Testing</Badge>
                    <Badge variant="secondary">Vulnerability Assessment</Badge>
                    <Badge variant="secondary">Network Security</Badge>
                    <Badge variant="secondary">Web Application Security</Badge>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Mobile Projects */}
          <Collapsible defaultOpen={false}>
            <CollapsibleTrigger className="border rounded-lg bg-green-50 dark:bg-green-950/20">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg border bg-background/50">
                    <Smartphone className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold">Mobile Development</h3>
                  <p className="text-sm text-muted-foreground">iOS and Android applications</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">2</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg hover:border-green-200 dark:hover:border-green-800 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">Alexa Mobile Assistant SDK</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">2022-Present</Badge>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0 opacity-50 cursor-not-allowed">
                          <Github className="h-3 w-3" />
                        </Button>
                        <span className="text-xs text-muted-foreground">Private</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Defined technical architecture and led development of SDK enabling Alexa integration across mobile devices worldwide
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Android</Badge>
                    <Badge variant="secondary">iOS</Badge>
                    <Badge variant="secondary">SDK Architecture</Badge>
                    <Badge variant="secondary">Voice AI</Badge>
                    <Badge variant="secondary">API Design</Badge>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:border-green-200 dark:hover:border-green-800 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">Mobile Platform Engineering - Amazon.in</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">2020-2022</Badge>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0 opacity-50 cursor-not-allowed">
                          <Github className="h-3 w-3" />
                        </Button>
                        <span className="text-xs text-muted-foreground">Private</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Built scalable mobile infrastructure and developer tools supporting millions of users across global markets
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Android</Badge>
                    <Badge variant="secondary">Kotlin</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Mobile Architecture</Badge>
                    <Badge variant="secondary">Performance Optimization</Badge>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Full Experience Section Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Full Experience Section Component</CardTitle>
          <p className="text-sm text-muted-foreground">
            Complete collapsible experience section with real portfolio data, project links, and interactive features.
          </p>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
            <Collapsible defaultOpen={true}>
              <CollapsibleTrigger className="rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg border bg-background/50">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="p-1.5 rounded-md border bg-background/30">
                      <Code className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold">VR & Immersive Technology</h3>
                    <p className="text-sm text-muted-foreground">
                      Immersive technology expertise with compelling narrative design
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        <Play className="h-3 w-3 mr-1" />
                        VR Games
                      </Badge>
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Unity Expert
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">4</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-6">
                  {/* Project 1 */}
                  <div className="relative">
                    <div className="absolute left-0 top-0 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-purple-500 bg-background z-10" />
                      <div className="w-0.5 flex-1 mt-2 min-h-16 bg-purple-200 dark:bg-purple-800/30" />
                    </div>
                    <div className="ml-6">
                      <div className="p-4 border rounded-lg border-l-4 border-l-purple-500 hover:border-purple-300 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Magical World VR</h4>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <span className="font-medium">2019</span>
                              <span>•</span>
                              <span>Personal Project</span>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                              <a href="https://github.com/krypten/MagicalWorldVR" target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3" />
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                              <a href="https://www.youtube.com/watch?v=Ac_jhG6mIO4" target="_blank" rel="noopener noreferrer">
                                <Play className="h-3 w-3" />
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                              <a href="https://medium.com/@chaitiagrawal/vr-the-magical-world-de074030324c" target="_blank" rel="noopener noreferrer">
                                <FileText className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Immersive VR experience featuring magical environments with interactive elements and enchanting visual storytelling
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Unity</Badge>
                          <Badge variant="secondary">VR Development</Badge>
                          <Badge variant="secondary">C#</Badge>
                          <Badge variant="secondary">3D Modeling</Badge>
                          <Badge variant="secondary">Interactive Design</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="relative">
                    <div className="absolute left-0 top-0 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-purple-500 bg-background z-10" />
                    </div>
                    <div className="ml-6">
                      <div className="p-4 border rounded-lg border-l-4 border-l-purple-500 hover:border-purple-300 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Puzzler VR Game</h4>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <span className="font-medium">2019</span>
                              <span>•</span>
                              <span>Personal Project</span>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                              <a href="https://github.com/krypten/PuzzlerVR" target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3" />
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                              <a href="https://www.youtube.com/watch?v=JzLzY1imT2Y" target="_blank" rel="noopener noreferrer">
                                <Play className="h-3 w-3" />
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                              <a href="https://medium.com/@chaitiagrawal/first-vr-experience-game-puzzler-216839b2b928" target="_blank" rel="noopener noreferrer">
                                <FileText className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          First VR game experience featuring puzzle-solving mechanics with intuitive hand tracking and spatial interaction design
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Unity</Badge>
                          <Badge variant="secondary">VR Development</Badge>
                          <Badge variant="secondary">C#</Badge>
                          <Badge variant="secondary">Game Mechanics</Badge>
                          <Badge variant="secondary">Hand Tracking</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Callout Section */}
                <div className="mt-6 p-4 rounded-lg border bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
                  <h4 className="text-lg font-semibold mb-3">VR Development Excellence</h4>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive VR development expertise combining technical excellence with compelling narrative design,
                    from immersive storytelling to interactive game mechanics.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-600 mb-1">4</div>
                      <div className="text-sm text-muted-foreground">VR Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-600 mb-1">Unity</div>
                      <div className="text-sm text-muted-foreground">Primary Engine</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-600 mb-1">2019-2020</div>
                      <div className="text-sm text-muted-foreground">Active Period</div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Left Icon Position */}
          <Collapsible>
            <CollapsibleTrigger
              iconPosition="left"
              className="border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Left Icon Position</h3>
                  <p className="text-sm text-muted-foreground">Icon on the left side</p>
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-muted-foreground">
                This collapsible uses the left icon position variant.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* No Icon */}
          <Collapsible>
            <CollapsibleTrigger
              showIcon={false}
              className="border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Cloud className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">No Expand Icon</h3>
                  <p className="text-sm text-muted-foreground">Clean header without chevron</p>
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-muted-foreground">
                This collapsible doesn&apos;t show the expand/collapse icon.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Disabled State */}
          <Collapsible disabled>
            <CollapsibleTrigger className="border rounded-lg">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-semibold text-muted-foreground">Disabled State</h3>
                  <p className="text-sm text-muted-foreground">Cannot be expanded</p>
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-muted-foreground">
                This content won&apos;t be shown because the collapsible is disabled.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Link Types Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Project Link Types</CardTitle>
          <p className="text-sm text-muted-foreground">
            Understanding the different types of project links and their icons
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Available Link Types</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                  <div>
                    <div className="font-medium">GitHub Repository</div>
                    <div className="text-sm text-muted-foreground">Source code and documentation</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Globe className="h-4 w-4" />
                  </Button>
                  <div>
                    <div className="font-medium">Live Demo</div>
                    <div className="text-sm text-muted-foreground">Working application or website</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <div>
                    <div className="font-medium">Article/Blog Post</div>
                    <div className="text-sm text-muted-foreground">Detailed writeup or case study</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Award className="h-4 w-4" />
                  </Button>
                  <div>
                    <div className="font-medium">Certificate</div>
                    <div className="text-sm text-muted-foreground">Professional certification or achievement</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Play className="h-4 w-4" />
                  </Button>
                  <div>
                    <div className="font-medium">Video Demo</div>
                    <div className="text-sm text-muted-foreground">YouTube or video demonstration</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Link States</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                  <div>
                    <div className="font-medium">Active Link</div>
                    <div className="text-sm text-muted-foreground">Clickable and accessible</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 opacity-50 cursor-not-allowed">
                    <Github className="h-4 w-4" />
                  </Button>
                  <div>
                    <div className="font-medium">Private/Disabled</div>
                    <div className="text-sm text-muted-foreground">Not publicly accessible (e.g., proprietary work)</div>
                  </div>
                </div>

                <div className="p-3 border rounded-lg bg-muted/30">
                  <div className="font-medium text-muted-foreground">No Links Available</div>
                  <div className="text-sm text-muted-foreground">Project has no external links</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Interactive Features</h5>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Hover effects on project cards</li>
                  <li>• Category-specific color theming</li>
                  <li>• Responsive link button sizing</li>
                  <li>• Accessibility-friendly tooltips</li>
                  <li>• External link indicators</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}