import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "веб-дизайн",
    description: "Современная платформа электронной коммерции с интуитивным UX/UI",
    image: "/img/076594b2-5676-4023-aef2-a06f49a7b4dd.jpg",
    year: "2024"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "ui/ux",
    description: "Мобильное приложение для банковских операций с фокусом на безопасность",
    image: "/img/59ccaf86-b896-4f58-bb87-ff7bca82d607.jpg",
    year: "2024"
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "брендинг",
    description: "Комплексная система бренд-идентичности для технологической компании",
    image: "/img/03533d06-97a5-421a-bd38-a953f1995e09.jpg",
    year: "2023"
  },
  {
    id: 4,
    title: "Corporate Website",
    category: "веб-дизайн",
    description: "Корпоративный сайт с адаптивным дизайном и современной типографикой",
    image: "/img/076594b2-5676-4023-aef2-a06f49a7b4dd.jpg",
    year: "2023"
  },
  {
    id: 5,
    title: "Dashboard Interface",
    category: "ui/ux",
    description: "Панель управления для аналитики с интуитивной навигацией",
    image: "/img/59ccaf86-b896-4f58-bb87-ff7bca82d607.jpg",
    year: "2024"
  },
  {
    id: 6,
    title: "Logo Collection",
    category: "брендинг",
    description: "Коллекция логотипов для различных индустрий и стартапов",
    image: "/img/03533d06-97a5-421a-bd38-a953f1995e09.jpg",
    year: "2023"
  }
];

function Index() {
  const [activeFilter, setActiveFilter] = useState('все');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isVisible, setIsVisible] = useState(false);

  const filters = ['все', 'веб-дизайн', 'ui/ux', 'брендинг'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeFilter === 'все') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-display font-bold text-xl">PORTFOLIO</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-gray-600 transition-colors duration-300"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-gray-600 transition-colors duration-300"
              >
                Обо мне
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="hover:text-gray-600 transition-colors duration-300"
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-gray-600 transition-colors duration-300"
              >
                Контакты
              </button>
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-6xl md:text-8xl font-light mb-6 leading-tight">
                ВЕБ
                <br />
                <span className="font-bold">ДИЗАЙНЕР</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Создаю цифровые продукты, которые вдохновляют и решают реальные задачи бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300"
                  size="lg"
                >
                  Посмотреть работы
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline" 
                  className="px-8 py-3 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                  size="lg"
                >
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-12 text-center">
              Обо мне
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  Я веб-дизайнер с 5-летним опытом создания цифровых продуктов. 
                  Специализируюсь на UX/UI дизайне, брендинге и создании комплексных 
                  дизайн-систем.
                </p>
                <p className="text-lg mb-8 leading-relaxed">
                  Мой подход основан на глубоком понимании пользователей и бизнес-задач. 
                  Верю, что хороший дизайн должен быть не только красивым, но и функциональным.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display font-semibold mb-2">Навыки</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>UI/UX Design</li>
                      <li>Figma, Sketch</li>
                      <li>Prototyping</li>
                      <li>Design Systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Опыт</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>5+ лет в дизайне</li>
                      <li>50+ проектов</li>
                      <li>Web & Mobile</li>
                      <li>B2B & B2C</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <Icon name="User" size={120} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-12 text-center">
            Портфолио
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group cursor-pointer border-0 shadow-none hover-scale transition-all duration-500 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider text-gray-500">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-12">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
              Давайте обсудим ваш проект и создадим что-то удивительное вместе
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-gray-300" />
                <h3 className="font-display font-semibold mb-2">Email</h3>
                <p className="text-gray-300">hello@designer.com</p>
              </div>
              <div className="text-center">
                <Icon name="Phone" size={32} className="mx-auto mb-4 text-gray-300" />
                <h3 className="font-display font-semibold mb-2">Телефон</h3>
                <p className="text-gray-300">+7 (999) 123-45-67</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={32} className="mx-auto mb-4 text-gray-300" />
                <h3 className="font-display font-semibold mb-2">Локация</h3>
                <p className="text-gray-300">Москва, Россия</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <Button 
                variant="outline" 
                size="icon"
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <Icon name="Dribbble" size={20} fallback="Globe" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Web Designer Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;