import ActionLink from "@/components/action-link"
import MeetingModal from "@/components/meeting-modal";
import { PageSectionStyle } from "@/constants"
import { cn } from "@/lib/utils"
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function createMeeting() {
  // Create a new meeting
} 

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString().split(":").slice(0, 2).join(":");
  const date = Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date());
  const meridian = now.toLocaleTimeString().split(" ")[1];
  
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | null>(null);

  const navigate = useNavigate();

  return (
    <section className="flex size-full flex-col items-center bg-dark-2 p-6">
       {/* Banner */}
      <div className="bg-hero bg-cover flex flex-col rounded-[20px] justify-between p-8 min-h-[250px] w-full max-w-[1080px]">
        <div className="p-2 glassmorphism w-fit rounded-md">
          <p className="text-gray-1 cursor-default text-center text-base font-normal">Upcoming Meeting at 12:00 pm</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-white cursor-default">
            <span className="font-bold text-6xl lg:text-7xl mx-0">{time}</span>
            <span className="ml-2 text-lg lg:text-2xl font-normal">{meridian}</span>
          </h1>
          <p className="text-lg lg:text-2xl mt-2 font-medium text-sky-1 cursor-default">{date}</p>
        </div>

      </div>

      {/* Action links */}

      <div className={cn(PageSectionStyle,"grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2")}>
        <ActionLink icon="/icons/add-meeting.svg" color="bg-orange-1" title="New Meeting" subHeading="Set up a new recording" alt="new meeting" handleClick={() => setMeetingState("isInstantMeeting")}/>
        <ActionLink icon="/icons/join-meeting.svg" color="bg-blue-1" title="Join Meeting" subHeading="via invitation link" alt="join meeting" handleClick={() => setMeetingState(null)}/>
        <ActionLink icon="/icons/schedule.svg"color="bg-purple-1" title="Schedule Meeting" subHeading="Plan your meeting" alt="schedule meeting" handleClick={() => setMeetingState(null)}/>
        <ActionLink icon="/icons/recordings.svg" color="bg-yellow-1" title="View Recordings" subHeading="Meeting Recordings" alt="meeting recordings" handleClick={() => navigate("/recordings")}/>  
      </div>

        {/* Upcoming meetings */}

      <div className={cn(PageSectionStyle, "")}>

        {/* Heading */}
        <div className="my-2 flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl cursor-default">Today's Upcoming meetings</h1>
          <a href="/" className="text-gray-1 text-sm">See all</a>
        </div>

        {/* Meeting Links */}

        <div className="my-2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Links */}
          <div className="flex flex-col bg-dark-3 rounded-xl px-4 py-6">
            <img src="/icons/upcoming.svg" alt="upcoming" className="w-[24px] h-[24px]" />
          </div>

        </div>

      </div>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(null)}
        title="Start An Instant Meeting"
        style="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />

    </section>
  )
}

export default Home