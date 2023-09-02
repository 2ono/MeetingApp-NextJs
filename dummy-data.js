const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: '행복한 애견인 모임',
      description:
        '애견인 애묘인 모임입니다. 자유로운 게시 해주세요 종에 상관없이 모두모두 행복해하는 세상이 오길 바랍니다',
      location: '경기도, 안양시, 동안구, 관악대로287번길, 76-6(관양동)',
      date: '2023-11-12',
      image: 'images/dogs.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: '불타는 금요일 파티 모임',
      description:
        "연말연시 가까운분들과의 모임장소로 럭셔리하우스를 소개합니다. - 1층 단독주택 안채 전체를 파티(모임) 장소로 대여합니다",
      location: '경기도, 포천시, 가산면, 선마로201번길, 6-13',
      date: '2023-10-30',
      image: 'images/party.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: '프로그래밍 공부 모임',
      description:
        '스마트폰이나 컴퓨터 카메라, 캠만 있으면(없어도 되는 경우도 있음) 프로그래밍 관심있는 누구나 참여하여 공부를 할 수 있습니다. ​',
      location: '경기도, 포천시, 소흘읍, 죽엽산로, 360-8',
      date: '2024-01-10',
      image: 'images/computers.jpg',
      isFeatured: true,
    },
    {
        id: 'e4',
        title: '중년 등산 모임',
        description: 'MZ 등산 모임 3GO crew 입니다두번째 해를 맞이한 3GO 시즌 2는초보, 고수를 가리지 않고빠르게 더 높은 더 많은 산을 타는 것이 아닌함께 즐거운 산행을 하는 것이 좋아요.',
        date: '2024-02-09',
        image: 'images/mountains.jpg',
        isFeatured: false,
      },
      {
        id: 'e5',
        title: '달리기 모임',
        description:
          '달리기 소모임 러닝크루 다이어트보다 건강하게 잘 살고 싶어서 운동에 관심만 있다면 누구라도 참여할 수 있다며 모임의 깨알홍보도 잊지 않았다.',
        location: '강원도, 양양군, 손양면, 방우재길, 38-48',
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