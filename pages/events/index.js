import { Fragment } from "react";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import NewsletterRegistration from "@/components/input/newsletter-registration";

function AllEventsPage() {
  const events = getAllEvents();

  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}/`;
    router.push(fullPath);
  }

  return (
    <Fragment>
    <NewsletterRegistration />
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
