import React from 'react';
import { Icon1, Icon2, Icon3 } from '../components/icons';

export const iconItems = [
  {
    id: 1,
    name: "Противопожарные системы",
    icon: <Icon1 className="icon1" />,
    content: [
      {
        id: 11,
        name: "Системы пожарной сигнализации",
        services: [
          { name: "Проектирование", section: "section2" },
          { name: "Монтаж", section: "section3" },
          { name: "Техническое обслуживание", section: "section4" }
        ]
      },
      {
        id: 12,
        name: "Системы оповещения о пожаре",
        services: [
          { name: "Проектирование", section: "section5" },
          { name: "Монтаж", section: "section6" },
          { name: "Техническое обслуживание", section: "section7" }
        ]
      },
      {
        id: 13,
        name: "Системы газового пожаротущения",
        services: [
          { name: "Проектирование", section: "section8" },
          { name: "Монтаж", section: "section9" },
          { name: "Техническое обслуживание", section: "section10" }
        ]
      },      
      {
        id: 14,
        name: "Системы внутреннего противопожарного водопровода",
        services: [
          { name: "Проектирование", section: "section11" },
          { name: "Монтаж", section: "section12" },
          { name: "Техническое обслуживание", section: "section13" }
        ]
      },
            {
        id: 15,
        name: "Системы водяного пожаротущения",
        services: [
          { name: "Проектирование", section: "section14" },
          { name: "Монтаж", section: "section15" },
          { name: "Техническое обслуживание", section: "section16" }
        ]
      },
            {
        id: 16,
        name: "Системы газового пожаротущения",
        services: [
          { name: "Проектирование", section: "section17" },
          { name: "Монтаж", section: "section18" },
          { name: "Техническое обслуживание", section: "section19" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Системы комплексной безопасности",
    icon: <Icon2 className="icon2" />,
    content: [
      {
        id: 21,
        name: "Проектирование", section: "section20"
      },
      {
        id: 22,
        name: "Монтаж",  section: "section21"
      },
      {
        id: 23,
        name: "Обслуживание",  section: "section22"
      }
    ]
  },
 {
    id: 3,
    name: "Специальные технические условия",
    icon: <Icon3 className="icon3" />,
    type: "single-link",
    section: "section28" 
  }
];