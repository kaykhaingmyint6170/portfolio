import { useState, useEffect } from 'react';
import {
  Home,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  Code,
  Briefcase,
  Award,
  Mail,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Sun,
  Moon,
  Activity,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/ShadCard';
import { Badge } from '../components/ui/ShadBadge';
import { Button } from '../components/ui/ShadButton';
import { Input } from '../components/ui/ShadInput';
import { ScrollArea } from '../components/ui/ShadScrollArea';
import { Switch } from '../components/ui/ShadSwitch';
import { useTheme } from '../context/ThemeContext';

const navigationItems = [
  { id: 'dashboard', name: 'Dashboard', icon: Home, badge: null },
  { id: 'projects', name: 'Projects', icon: Briefcase, badge: '8' },
  { id: 'skills', name: 'Skills', icon: Code, badge: null },
  { id: 'experience', name: 'Experience', icon: Award, badge: null },
  { id: 'contact', name: 'Contact', icon: Mail, badge: '3' },
  { id: 'settings', name: 'Settings', icon: Settings, badge: null },
];

function DashboardSidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed, activeItem, setActiveItem }) {
  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full bg-card border-r border-border z-40 transition-all duration-300 ease-in-out flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isCollapsed ? 'w-20' : 'w-64'}
          md:translate-x-0 md:static md:z-auto
        `}
      >
        {/* Logo / Brand */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          {!isCollapsed ? (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                <Code className="text-primary-foreground w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-base">Laravel Dev</span>
                <span className="text-xs text-muted-foreground">Portfolio</span>
              </div>
            </div>
          ) : (
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center mx-auto shadow-sm">
              <Code className="text-primary-foreground w-5 h-5" />
            </div>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex p-1.5 rounded-md hover:bg-muted transition-all duration-200"
            aria-label="Toggle sidebar"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Search bar */}
        {!isCollapsed && (
          <div className="px-4 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 bg-muted/50 border-border text-sm"
              />
            </div>
          </div>
        )}

        {/* Nav items */}
        <nav className="flex-1 px-3 py-2 overflow-y-auto">
          <ul className="space-y-0.5">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-left transition-all duration-200 group
                      ${isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }
                      ${isCollapsed ? 'justify-center px-2' : ''}
                    `}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <div className="flex items-center justify-center min-w-[24px]">
                      <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`} />
                    </div>

                    {!isCollapsed && (
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-sm ${isActive ? 'font-medium' : 'font-normal'}`}>
                          {item.name}
                        </span>
                        {item.badge && (
                          <Badge variant={isActive ? 'default' : 'secondary'} className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    )}

                    {isCollapsed && item.badge && (
                      <span className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center rounded-full bg-primary border border-card text-[10px] font-medium text-primary-foreground">
                        {parseInt(item.badge) > 9 ? '9+' : item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User section */}
        <div className="mt-auto border-t border-border">
          <div className={`border-b border-border bg-muted/30 ${isCollapsed ? 'py-3 px-2' : 'p-3'}`}>
            {!isCollapsed ? (
              <div className="flex items-center px-3 py-2 rounded-md bg-card hover:bg-muted transition-colors duration-200">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">JD</span>
                </div>
                <div className="flex-1 min-w-0 ml-2.5">
                  <p className="text-sm font-medium text-foreground truncate">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">Laravel Developer</p>
                </div>
                <span className="w-2 h-2 bg-green-500 rounded-full ml-2 shrink-0" title="Online" />
              </div>
            ) : (
              <div className="flex justify-center relative">
                <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">JD</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
              </div>
            )}
          </div>

          <div className="p-3">
            <button
              onClick={() => handleItemClick('logout')}
              className={`
                w-full flex items-center rounded-md text-left transition-all duration-200 group
                text-destructive hover:bg-destructive/10
                ${isCollapsed ? 'justify-center p-2.5' : 'gap-2.5 px-3 py-2.5'}
              `}
            >
              <LogOut className="h-4.5 w-4.5 shrink-0" />
              {!isCollapsed && <span className="text-sm">Logout</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

function DashboardHeader({ isCollapsed, setIsOpen }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50">
            <Sun className="h-4 w-4 text-muted-foreground" />
            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
            <Moon className="h-4 w-4 text-muted-foreground" />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

function StatsCards() {
  const stats = [
    { title: 'Total Projects', value: '24', icon: Briefcase, color: 'text-blue-500', change: '+12%' },
    { title: 'Active Clients', value: '8', icon: Users, color: 'text-green-500', change: '+3' },
    { title: 'Completed Tasks', value: '156', icon: CheckCircle2, color: 'text-purple-500', change: '+28%' },
    { title: 'Hours Logged', value: '1,240', icon: Clock, color: 'text-orange-500', change: '+120h' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 font-medium">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function RecentProjects() {
  const projects = [
    { name: 'E-commerce Platform', status: 'In Progress', progress: 75, tech: 'Laravel, Vue.js', deadline: '2024-02-15' },
    { name: 'CRM System', status: 'Completed', progress: 100, tech: 'Laravel, React', deadline: '2024-01-20' },
    { name: 'Blog Platform', status: 'In Progress', progress: 45, tech: 'Laravel, Tailwind', deadline: '2024-03-01' },
    { name: 'API Integration', status: 'Planning', progress: 20, tech: 'Laravel, REST', deadline: '2024-02-28' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          Recent Projects
        </CardTitle>
        <CardDescription>Your latest development projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">{project.name}</h4>
                  <p className="text-xs text-muted-foreground">{project.tech}</p>
                </div>
                <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{project.progress}%</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>Due: {project.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillsOverview() {
  const skills = [
    { name: 'Laravel', level: 95, color: 'bg-red-500' },
    { name: 'PHP', level: 90, color: 'bg-blue-500' },
    { name: 'Vue.js', level: 85, color: 'bg-green-500' },
    { name: 'React', level: 80, color: 'bg-cyan-500' },
    { name: 'MySQL', level: 88, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Skills Overview
        </CardTitle>
        <CardDescription>Technical proficiency levels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color} transition-all duration-500 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ExperienceTimeline() {
  const experiences = [
    {
      title: 'Senior Laravel Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications',
    },
    {
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      period: '2020 - 2022',
      description: 'Built scalable web applications',
    },
    {
      title: 'Junior Developer',
      company: 'Web Agency',
      period: '2018 - 2020',
      description: 'Developed client websites and applications',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Experience Timeline
        </CardTitle>
        <CardDescription>Professional journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <h4 className="font-medium text-foreground">{exp.title}</h4>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ContactActivity() {
  const activities = [
    { from: 'client@example.com', subject: 'Project Update', time: '2 hours ago', unread: true },
    { from: 'John Smith', subject: 'Meeting Request', time: '5 hours ago', unread: true },
    { from: 'team@company.com', subject: 'Weekly Report', time: '1 day ago', unread: false },
    { from: 'Sarah Johnson', subject: 'Code Review', time: '2 days ago', unread: false },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Contact Activity
        </CardTitle>
        <CardDescription>Recent messages and emails</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer ${
                  activity.unread ? 'bg-muted/50' : ''
                }`}
              >
                <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${activity.unread ? 'bg-primary' : 'bg-muted-foreground'}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-foreground truncate">{activity.from}</p>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{activity.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  // On desktop, sidebar is always visible
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen w-screen bg-background text-foreground overflow-hidden">
      <DashboardSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader isCollapsed={isCollapsed} setIsOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentProjects />
              <SkillsOverview />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ExperienceTimeline />
              <ContactActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
