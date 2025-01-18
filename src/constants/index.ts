interface SidebarLink {
    label: string,
    route: string,
    iconURL: string
}

export const SidebarLinks: SidebarLink[] = [
    {
        label: "Home",
        route: "/",
        iconURL: "/icons/Home.svg"
    },
    {
        label: "Upcoming",
        route: "/upcoming",
        iconURL: "/icons/upcoming.svg"
    },
    {
        label: "Previous",
        route: "/previous",
        iconURL: "/icons/previous.svg"
    },
    {
        label: "Recordings",
        route: "/recordings",
        iconURL: "/icons/Video.svg"
    },
    {
        label: "Personal Room",
        route: "/personal-room",
        iconURL: "/icons/add-personal.svg"
    }
]