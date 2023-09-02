const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: '행복한 애견인 모임',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2023-11-12',
      image: 'images/dogs.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: '불타는 금요일 파티 모임',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2023-10-30',
      image: 'images/party.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: '프로그래밍 공부 모임',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2024-01-10',
      image: 'images/computers.jpg',
      isFeatured: true,
    },
    {
        id: 'e4',
        title: '중년 등산 모임',
        description:
          'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2024-02-09',
        image: 'images/mountains.jpg',
        isFeatured: true,
      },
      {
        id: 'e5',
        title: '달리기 모임',
        description:
          'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2024-05-12',
        image: 'images/runnings.jpg',
        isFeatured: true,
      },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }